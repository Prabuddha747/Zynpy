# Deployment Guide - UPI Payment System

## Quick Deploy Options

### Option 1: Render (Recommended - Free & Easy)

1. **Create account** at [render.com](https://render.com) (free)

2. **Connect your GitHub repository** (or upload files)

3. **Create New Web Service**:
   - Connect your repository
   - Name: `upi-payment-system`
   - Environment: `Node`
   - Build Command: `npm install`
   - Start Command: `npm start`
   - Click "Create Web Service"

4. **Your app will be live** at: `https://upi-payment-system.onrender.com`

5. **Access on mobile**: Open the URL on your mobile browser!

---

### Option 2: Vercel (Fast & Free)

1. **Install Vercel CLI**:
   ```bash
   npm install -g vercel
   ```

2. **Deploy**:
   ```bash
   vercel
   ```

3. **Follow prompts** - your app will be live instantly!

4. **Access on mobile**: Use the provided Vercel URL

---

### Option 3: Railway (Simple & Free)

1. **Create account** at [railway.app](https://railway.app)

2. **New Project** → **Deploy from GitHub**

3. **Select your repository**

4. **Railway auto-detects** Node.js and deploys

5. **Get your URL** from Railway dashboard

---

### Option 4: Local Access with ngrok (For Testing)

1. **Install ngrok**:
   ```bash
   npm install -g ngrok
   # OR download from https://ngrok.com
   ```

2. **Start your server**:
   ```bash
   npm start
   ```

3. **In another terminal, start ngrok**:
   ```bash
   ngrok http 3000
   ```

4. **Copy the HTTPS URL** (e.g., `https://abc123.ngrok.io`)

5. **Access on mobile**: Open the ngrok URL on your mobile browser!

---

## After Deployment

### Update UPI Configuration

Once deployed, update your UPI details in the payment page:
- **Merchant UPI ID**: Your business UPI ID
- **Business Name**: Your business name

### Test on Mobile

1. Open the deployed URL on your mobile browser
2. Enter amount and click payment buttons
3. UPI apps should open directly!

### Dashboard Access

- Payment Page: `https://your-app-url.com/`
- Dashboard: `https://your-app-url.com/dashboard`

---

## Environment Variables (Optional)

For production, you can set:
- `PORT`: Server port (default: 3000)
- `NODE_ENV`: Set to `production`

---

## Quick Start (Local Testing)

```bash
# Install dependencies
npm install

# Start server
npm start

# Server runs on http://localhost:3000
# Open on mobile: Use your computer's IP address
# Example: http://192.168.1.100:3000
```

---

## Mobile Access Tips

1. **Same WiFi**: Make sure mobile and computer are on same network
2. **Firewall**: Allow port 3000 in firewall settings
3. **IP Address**: Find your computer's IP:
   - Mac: `ifconfig | grep "inet "`
   - Windows: `ipconfig`
   - Linux: `hostname -I`

