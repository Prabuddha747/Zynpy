// Android UPI Intent Implementation
// File: UPIPaymentActivity.java

import android.content.Intent;
import android.net.Uri;
import android.os.Bundle;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;
import androidx.appcompat.app.AppCompatActivity;
import androidx.annotation.Nullable;

public class UPIPaymentActivity extends AppCompatActivity {
    
    private static final int UPI_PAYMENT_REQUEST_CODE = 1001;
    
    // Your UPI configuration
    private static final String MERCHANT_UPI_ID = "yourbusiness@paytm";
    private static final String MERCHANT_NAME = "Your Startup";
    
    private EditText etAmount, etOrderId, etNote;
    private Button btnPay, btnPayGPay, btnPayPhonePe, btnPayPatytm;
    
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_upi_payment);
        
        // Initialize views
        etAmount = findViewById(R.id.etAmount);
        etOrderId = findViewById(R.id.etOrderId);
        etNote = findViewById(R.id.etNote);
        btnPay = findViewById(R.id.btnPay);
        btnPayGPay = findViewById(R.id.btnPayGPay);
        btnPayPhonePe = findViewById(R.id.btnPayPhonePe);
        btnPayPatytm = findViewById(R.id.btnPayPatytm);
        
        // Generate order ID
        etOrderId.setText("ORD" + System.currentTimeMillis());
        etOrderId.setEnabled(false);
        
        // Generic UPI payment (user chooses app)
        btnPay.setOnClickListener(v -> initiateUPIPayment(null));
        
        // App-specific payments
        btnPayGPay.setOnClickListener(v -> initiateUPIPayment("com.google.android.apps.nbu.paisa.user"));
        btnPayPhonePe.setOnClickListener(v -> initiateUPIPayment("com.phonepe.app"));
        btnPayPatytm.setOnClickListener(v -> initiateUPIPayment("net.one97.paytm"));
    }
    
    private void initiateUPIPayment(String targetApp) {
        String amount = etAmount.getText().toString().trim();
        String orderId = etOrderId.getText().toString().trim();
        String note = etNote.getText().toString().trim();
        
        // Validation
        if (amount.isEmpty() || Double.parseDouble(amount) <= 0) {
            Toast.makeText(this, "Please enter valid amount", Toast.LENGTH_SHORT).show();
            return;
        }
        
        if (note.isEmpty()) {
            note = "Payment for " + orderId;
        }
        
        try {
            // Build UPI URI
            Uri.Builder builder = new Uri.Builder();
            builder.scheme("upi");
            builder.authority("pay");
            builder.appendQueryParameter("pa", MERCHANT_UPI_ID);
            builder.appendQueryParameter("pn", MERCHANT_NAME);
            builder.appendQueryParameter("am", amount);
            builder.appendQueryParameter("cu", "INR");
            builder.appendQueryParameter("tr", orderId);
            builder.appendQueryParameter("tn", note);
            
            Uri uri = builder.build();
            
            Intent intent = new Intent(Intent.ACTION_VIEW);
            intent.setData(uri);
            
            // If specific app is requested
            if (targetApp != null) {
                intent.setPackage(targetApp);
            }
            
            // Check if any app can handle UPI
            if (intent.resolveActivity(getPackageManager()) != null) {
                startActivityForResult(intent, UPI_PAYMENT_REQUEST_CODE);
            } else {
                Toast.makeText(this, "No UPI app found. Please install GPay, PhonePe, or Paytm", Toast.LENGTH_LONG).show();
            }
            
        } catch (Exception e) {
            Toast.makeText(this, "Error: " + e.getMessage(), Toast.LENGTH_SHORT).show();
            e.printStackTrace();
        }
    }
    
    @Override
    protected void onActivityResult(int requestCode, int resultCode, @Nullable Intent data) {
        super.onActivityResult(requestCode, resultCode, data);
        
        if (requestCode == UPI_PAYMENT_REQUEST_CODE) {
            if (data != null) {
                String response = data.getStringExtra("response");
                handleUPIResponse(response);
            } else {
                Toast.makeText(this, "Payment cancelled", Toast.LENGTH_SHORT).show();
            }
        }
    }
    
    private void handleUPIResponse(String response) {
        if (response == null) {
            Toast.makeText(this, "Payment cancelled", Toast.LENGTH_SHORT).show();
            return;
        }
        
        // Parse response
        String[] responseParts = response.split("&");
        String status = null;
        String txnId = null;
        String txnRef = null;
        
        for (String part : responseParts) {
            String[] keyValue = part.split("=");
            if (keyValue.length >= 2) {
                String key = keyValue[0].toLowerCase();
                String value = keyValue[1];
                
                if (key.equals("status")) {
                    status = value;
                } else if (key.equals("txnid")) {
                    txnId = value;
                } else if (key.equals("txnref") || key.equals("transactionref")) {
                    txnRef = value;
                }
            }
        }
        
        // Handle different statuses
        if (status != null) {
            switch (status.toLowerCase()) {
                case "success":
                    onPaymentSuccess(txnId, txnRef);
                    break;
                case "submitted":
                    onPaymentPending(txnId);
                    break;
                case "failure":
                    onPaymentFailed(response);
                    break;
                default:
                    Toast.makeText(this, "Payment status: " + status, Toast.LENGTH_LONG).show();
            }
        }
    }
    
    private void onPaymentSuccess(String txnId, String txnRef) {
        Toast.makeText(this, "Payment Successful!\nTransaction ID: " + txnId, Toast.LENGTH_LONG).show();
        
        // Send to your backend for verification
        String orderId = etOrderId.getText().toString();
        verifyPaymentOnBackend(orderId, txnId, txnRef);
        
        // Navigate to success screen
        // Intent intent = new Intent(this, PaymentSuccessActivity.class);
        // startActivity(intent);
        // finish();
    }
    
    private void onPaymentPending(String txnId) {
        Toast.makeText(this, "Payment is pending.\nTransaction ID: " + txnId, Toast.LENGTH_LONG).show();
        
        // Poll backend for status
        String orderId = etOrderId.getText().toString();
        checkPaymentStatus(orderId);
    }
    
    private void onPaymentFailed(String response) {
        Toast.makeText(this, "Payment Failed!\nPlease try again", Toast.LENGTH_LONG).show();
        // Log for debugging
        android.util.Log.e("UPI", "Payment failed: " + response);
    }
    
    private void verifyPaymentOnBackend(String orderId, String txnId, String txnRef) {
        // Use Retrofit, Volley, or OkHttp to call your backend
        // Example endpoint: POST /api/payment/verify
        
        // Pseudo code:
        /*
        ApiService api = RetrofitClient.getInstance().create(ApiService.class);
        Call<VerifyResponse> call = api.verifyPayment(orderId, txnId, txnRef);
        call.enqueue(new Callback<VerifyResponse>() {
            @Override
            public void onResponse(Call<VerifyResponse> call, Response<VerifyResponse> response) {
                if (response.isSuccessful() && response.body().isVerified()) {
                    // Payment verified
                    navigateToSuccessScreen();
                }
            }
            
            @Override
            public void onFailure(Call<VerifyResponse> call, Throwable t) {
                Toast.makeText(UPIPaymentActivity.this, "Verification failed", Toast.LENGTH_SHORT).show();
            }
        });
        */
    }
    
    private void checkPaymentStatus(String orderId) {
        // Poll your backend every few seconds to check status
        // Use Handler or WorkManager for periodic checks
        
        // Pseudo code:
        /*
        Handler handler = new Handler();
        handler.postDelayed(new Runnable() {
            @Override
            public void run() {
                // Call API to check status
                // If still pending, schedule another check
                // If success, navigate to success screen
            }
        }, 5000); // Check after 5 seconds
        */
    }
}


// ===========================================
// Layout XML (res/layout/activity_upi_payment.xml)
// ===========================================

/*
<?xml version="1.0" encoding="utf-8"?>
<ScrollView xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:padding="16dp"
    android:background="#F5F5F5">

    <LinearLayout
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:orientation="vertical">

        <TextView
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:text="UPI Payment"
            android:textSize="24sp"
            android:textStyle="bold"
            android:layout_marginBottom="8dp"/>

        <TextView
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:text="Fast, secure, and instant"
            android:textSize="14sp"
            android:textColor="#666"
            android:layout_marginBottom="24dp"/>

        <com.google.android.material.textfield.TextInputLayout
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:hint="Amount (₹)"
            style="@style/Widget.MaterialComponents.TextInputLayout.OutlinedBox">

            <com.google.android.material.textfield.TextInputEditText
                android:id="@+id/etAmount"
                android:layout_width="match_parent"
                android:layout_height="wrap_content"
                android:inputType="numberDecimal"
                android:textSize="24sp"
                android:textStyle="bold"/>
        </com.google.android.material.textfield.TextInputLayout>

        <com.google.android.material.textfield.TextInputLayout
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:layout_marginTop="16dp"
            android:hint="Order ID"
            style="@style/Widget.MaterialComponents.TextInputLayout.OutlinedBox">

            <com.google.android.material.textfield.TextInputEditText
                android:id="@+id/etOrderId"
                android:layout_width="match_parent"
                android:layout_height="wrap_content"
                android:enabled="false"/>
        </com.google.android.material.textfield.TextInputLayout>

        <com.google.android.material.textfield.TextInputLayout
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:layout_marginTop="16dp"
            android:hint="Note (Optional)"
            style="@style/Widget.MaterialComponents.TextInputLayout.OutlinedBox">

            <com.google.android.material.textfield.TextInputEditText
                android:id="@+id/etNote"
                android:layout_width="match_parent"
                android:layout_height="wrap_content"
                android:inputType="textMultiLine"
                android:lines="2"/>
        </com.google.android.material.textfield.TextInputLayout>

        <Button
            android:id="@+id/btnPay"
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:layout_marginTop="24dp"
            android:text="Pay with UPI"
            android:textSize="16sp"
            android:padding="16dp"/>

        <TextView
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:text="Or pay with specific app:"
            android:layout_marginTop="16dp"
            android:textSize="14sp"
            android:textColor="#666"/>

        <LinearLayout
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:orientation="horizontal"
            android:layout_marginTop="12dp"
            android:weightSum="3">

            <Button
                android:id="@+id/btnPayGPay"
                android:layout_width="0dp"
                android:layout_height="wrap_content"
                android:layout_weight="1"
                android:layout_margin="4dp"
                android:text="GPay"
                style="@style/Widget.MaterialComponents.Button.OutlinedButton"/>

            <Button
                android:id="@+id/btnPayPhonePe"
                android:layout_width="0dp"
                android:layout_height="wrap_content"
                android:layout_weight="1"
                android:layout_margin="4dp"
                android:text="PhonePe"
                style="@style/Widget.MaterialComponents.Button.OutlinedButton"/>

            <Button
                android:id="@+id/btnPayPatytm"
                android:layout_width="0dp"
                android:layout_height="wrap_content"
                android:layout_weight="1"
                android:layout_margin="4dp"
                android:text="Paytm"
                style="@style/Widget.MaterialComponents.Button.OutlinedButton"/>
        </LinearLayout>

    </LinearLayout>
</ScrollView>
*/


// ===========================================
// Add to AndroidManifest.xml
// ===========================================

/*
<uses-permission android:name="android.permission.INTERNET" />

<queries>
    <intent>
        <action android:name="android.intent.action.VIEW" />
        <data android:scheme="upi" />
    </intent>
    <package android:name="com.google.android.apps.nbu.paisa.user" />
    <package android:name="com.phonepe.app" />
    <package android:name="net.one97.paytm" />
</queries>
*/