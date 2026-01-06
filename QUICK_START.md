# 🚀 Quick Start - Get Your Payment Page Live!

## Fastest Way: Deploy to Render (FREE - 2 minutes)

### Step 1: Push to GitHub
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

### Step 2: Deploy on Render
1. Go to [render.com](https://render.com) and sign up (free)
2. Click **"New +"** → **"Web Service"**
3. Connect your GitHub repository
4. Settings:
   - **Name**: `upi-payment`
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
5. Click **"Create Web Service"**
6. Wait 2-3 minutes for deployment
7. **Copy your URL** (e.g., `https://upi-payment.onrender.com`)

### Step 3: Access on Mobile! 📱
Open the Render URL on your mobile browser - payment buttons will work!

---

## Alternative: Local Access with ngrok (For Testing)

### Step 1: Install ngrok
Download from [ngrok.com](https://ngrok.com/download) or:
```bash
brew install ngrok  # Mac
# OR download from website
```

### Step 2: Start Server
```bash
npm install
npm start
```

### Step 3: Start ngrok (in new terminal)
```bash
ngrok http 3000
```

### Step 4: Copy HTTPS URL
You'll see something like:
```
Forwarding  https://abc123.ngrok.io -> http://localhost:3000
```

### Step 5: Open on Mobile! 📱
Open `https://abc123.ngrok.io` on your mobile browser!

---

## Your Live URLs

After deployment, you'll have:
- **Payment Page**: `https://your-app-url.com/`
- **Dashboard**: `https://your-app-url.com/dashboard`

---

## Test It!

1. Open the URL on your **mobile phone**
2. Enter an amount (e.g., ₹100)
3. Click **"Pay with UPI App"** or **GPay/PhonePe/Paytm**
4. Your UPI app should open! 🎉

---

## Need Help?

- Check `DEPLOY.md` for detailed instructions
- Render support: [render.com/docs](https://render.com/docs)
- ngrok docs: [ngrok.com/docs](https://ngrok.com/docs)

