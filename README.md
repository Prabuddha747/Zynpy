# UPI Payment System

A web-based UPI payment system with payment verification dashboard.

## Problem Fixed

The payment buttons (GPay, PhonePe, etc.) were not working on web browsers because UPI deep links (`upi://`, `gpay://`, `phonepe://`) only work on mobile devices, not in desktop browsers.

## Solution

The code now:
1. **Detects device type** - Automatically detects if running on mobile or desktop
2. **Mobile devices** - Opens UPI apps directly when buttons are clicked
3. **Desktop/Web browsers** - Automatically shows QR code instead (which can be scanned with mobile UPI apps)
4. **Better user experience** - Clear messages explaining what will happen

## How to Run

### 1. Install Dependencies

```bash
npm install
```

### 2. Start the Server

```bash
npm start
```

Or for development with auto-reload:

```bash
npm run dev
```

The server will run on `http://localhost:3000`

### 3. Open the Payment Page

Open `upipayment.html` in your web browser:
- **On Desktop**: The payment buttons will automatically show QR codes (since UPI apps don't work on desktop)
- **On Mobile**: The payment buttons will open the respective UPI apps (GPay, PhonePe, Paytm, etc.)

### 4. Configure Your UPI Details

Before testing, update your UPI details in `upipayment.html`:
- **Merchant UPI ID**: Your business UPI ID (e.g., `yourbusiness@paytm`)
- **Business Name**: Your business name

## Files

- `upipayment.html` - Main payment page (fixed for web browsers)
- `server.js` - Backend API for payment verification
- `paymentvertificationdashboard.html` - Admin dashboard to verify payments
- `package.json` - Node.js dependencies

## Testing

1. **On Desktop Browser**:
   - Click "Pay with UPI App" → Shows QR code automatically
   - Click GPay/PhonePe/Paytm buttons → Shows QR code with message
   - Scan QR code with mobile UPI app

2. **On Mobile Browser**:
   - Click "Pay with UPI App" → Opens UPI app selector
   - Click GPay/PhonePe/Paytm → Opens specific UPI app
   - Complete payment in the app

## API Endpoints

- `POST /api/payment/create` - Create payment intent
- `GET /api/payment/status/:orderId` - Check payment status
- `POST /api/payment/verify` - Manually verify payment (admin)
- `GET /api/payments` - List all payments

## Notes

- UPI deep links only work on mobile devices
- Desktop browsers will automatically show QR codes
- QR codes can be scanned with any UPI app on mobile
- The server stores payments in memory (use a database in production)

