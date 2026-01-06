#!/bin/bash

echo "🚀 UPI Payment System - Deployment Helper"
echo "=========================================="
echo ""

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install Node.js first."
    exit 1
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -ne 0 ]; then
    echo "❌ Failed to install dependencies. Check your internet connection."
    exit 1
fi

echo "✅ Dependencies installed!"
echo ""

# Start server
echo "🌐 Starting server on http://localhost:3000"
echo ""
echo "📱 To access on mobile:"
echo "   1. Make sure your phone is on the same WiFi"
echo "   2. Find your computer's IP address:"
echo "      Mac: ifconfig | grep 'inet ' | grep -v 127.0.0.1"
echo "      Windows: ipconfig | findstr IPv4"
echo "   3. Open http://YOUR_IP:3000 on your mobile browser"
echo ""
echo "   OR use ngrok for public URL:"
echo "   ngrok http 3000"
echo ""
echo "Press Ctrl+C to stop the server"
echo ""

npm start

