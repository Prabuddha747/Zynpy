// Backend API for Payment Verification (Node.js + Express)
// Save as: server.js

const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();

app.use(cors());
app.use(express.json());

// Serve static HTML files
app.use(express.static(__dirname));

// Routes for HTML pages
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'upipayment.html'));
});

app.get('/payment', (req, res) => {
    res.sendFile(path.join(__dirname, 'upipayment.html'));
});

app.get('/dashboard', (req, res) => {
    res.sendFile(path.join(__dirname, 'paymentvertificationdashboard.html'));
});

// In-memory storage (use database in production)
const payments = new Map();

// Create payment intent
app.post('/api/payment/create', (req, res) => {
    const { orderId, amount, merchantUPI, customerPhone } = req.body;
    
    const payment = {
        orderId,
        amount,
        merchantUPI,
        customerPhone,
        status: 'pending',
        createdAt: new Date().toISOString(),
        utr: null // UTR (Unique Transaction Reference) from bank
    };
    
    payments.set(orderId, payment);
    
    res.json({
        success: true,
        orderId,
        message: 'Payment intent created'
    });
});

// Check payment status
app.get('/api/payment/status/:orderId', (req, res) => {
    const { orderId } = req.params;
    const payment = payments.get(orderId);
    
    if (!payment) {
        return res.status(404).json({
            success: false,
            message: 'Payment not found'
        });
    }
    
    res.json({
        success: true,
        payment
    });
});

// Webhook for bank notifications (if available)
app.post('/api/payment/webhook', (req, res) => {
    const { orderId, utr, status, amount } = req.body;
    
    const payment = payments.get(orderId);
    if (payment) {
        payment.status = status;
        payment.utr = utr;
        payment.verifiedAt = new Date().toISOString();
        payments.set(orderId, payment);
        
        console.log('Payment updated:', payment);
    }
    
    res.json({ success: true });
});

// Manual verification endpoint (admin can mark as paid)
app.post('/api/payment/verify', (req, res) => {
    const { orderId, utr, adminKey } = req.body;
    
    // Simple admin authentication (use proper auth in production)
    if (adminKey !== 'your-secret-admin-key') {
        return res.status(403).json({
            success: false,
            message: 'Unauthorized'
        });
    }
    
    const payment = payments.get(orderId);
    if (!payment) {
        return res.status(404).json({
            success: false,
            message: 'Payment not found'
        });
    }
    
    payment.status = 'completed';
    payment.utr = utr;
    payment.verifiedAt = new Date().toISOString();
    payment.verifiedBy = 'admin';
    
    payments.set(orderId, payment);
    
    res.json({
        success: true,
        message: 'Payment marked as completed',
        payment
    });
});

// List all payments (for admin dashboard)
app.get('/api/payments', (req, res) => {
    const allPayments = Array.from(payments.values());
    res.json({
        success: true,
        count: allPayments.length,
        payments: allPayments
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Payment verification server running on port ${PORT}`);
});


// ============================================
// SMS/Email Parsing for Auto-Verification
// ============================================

// Example SMS from bank: "Rs.500 credited to A/c XX1234 on 06Jan26 from UPI Ref no 12345678"

function parseBankSMS(sms) {
    // Parse amount
    const amountMatch = sms.match(/Rs\.?(\d+\.?\d*)/i);
    const amount = amountMatch ? parseFloat(amountMatch[1]) : null;
    
    // Parse UTR/Reference
    const utrMatch = sms.match(/Ref no\.? (\w+)/i) || sms.match(/UTR[:\s]+(\w+)/i);
    const utr = utrMatch ? utrMatch[1] : null;
    
    // Parse date
    const dateMatch = sms.match(/on (\d{2}[A-Za-z]{3}\d{2})/);
    const date = dateMatch ? dateMatch[1] : null;
    
    return { amount, utr, date };
}

// Endpoint to receive SMS webhooks (if using SMS gateway)
app.post('/api/sms/webhook', (req, res) => {
    const { message, from } = req.body;
    
    // Verify SMS is from your bank
    const trustedSenders = ['HDFCBK', 'ICICIB', 'AXISBK', 'PAYTM'];
    if (!trustedSenders.some(sender => from.includes(sender))) {
        return res.json({ success: false, message: 'Untrusted sender' });
    }
    
    const parsed = parseBankSMS(message);
    
    if (parsed.amount && parsed.utr) {
        // Find pending payment matching this amount
        for (const [orderId, payment] of payments.entries()) {
            if (payment.status === 'pending' && 
                Math.abs(payment.amount - parsed.amount) < 0.01) {
                
                payment.status = 'completed';
                payment.utr = parsed.utr;
                payment.verifiedAt = new Date().toISOString();
                payment.verifiedBy = 'sms';
                
                payments.set(orderId, payment);
                
                console.log('Auto-verified payment:', payment);
                break;
            }
        }
    }
    
    res.json({ success: true });
});


// ============================================
// Bank Statement Reconciliation
// ============================================

function reconcilePayments(bankStatements) {
    // bankStatements = array of { date, amount, utr, description }
    
    const reconciled = [];
    
    for (const statement of bankStatements) {
        // Find matching payment
        for (const [orderId, payment] of payments.entries()) {
            if (payment.status === 'pending' && 
                Math.abs(payment.amount - statement.amount) < 0.01) {
                
                payment.status = 'completed';
                payment.utr = statement.utr;
                payment.verifiedAt = new Date().toISOString();
                payment.verifiedBy = 'bank-statement';
                
                payments.set(orderId, payment);
                reconciled.push({ orderId, statement });
                break;
            }
        }
    }
    
    return reconciled;
}


// ============================================
// Frontend Integration Example
// ============================================

/*
// In your frontend (after UPI payment initiated)

async function createPayment() {
    const orderId = 'ORD' + Date.now();
    const amount = 500;
    
    // Create payment record
    await fetch('http://localhost:3000/api/payment/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            orderId,
            amount,
            merchantUPI: 'yourbusiness@paytm',
            customerPhone: '9999999999'
        })
    });
    
    // Initiate UPI payment (code from HTML artifact)
    initiateUPIPayment();
    
    // Poll for payment status
    checkPaymentStatus(orderId);
}

async function checkPaymentStatus(orderId) {
    const maxAttempts = 60; // Check for 5 minutes (60 * 5 sec)
    let attempts = 0;
    
    const interval = setInterval(async () => {
        attempts++;
        
        const res = await fetch(`http://localhost:3000/api/payment/status/${orderId}`);
        const data = await res.json();
        
        if (data.payment.status === 'completed') {
            clearInterval(interval);
            alert('Payment Successful! UTR: ' + data.payment.utr);
            // Redirect to success page
        } else if (attempts >= maxAttempts) {
            clearInterval(interval);
            alert('Payment verification timeout. Please contact support with Order ID: ' + orderId);
        }
    }, 5000); // Check every 5 seconds
}
*/