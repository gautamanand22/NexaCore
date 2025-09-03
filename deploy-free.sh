#!/bin/bash

# 🚀 NexaCore FREE Deployment Script
echo "🌐 Deploying NexaCore with FREE domain options..."
echo "================================================="

# Build the project
echo "🔨 Building project..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo ""
    
    echo "🎯 FREE DEPLOYMENT OPTIONS:"
    echo "=========================="
    echo ""
    echo "🔥 OPTION 1: Netlify (RECOMMENDED)"
    echo "   → Go to: https://netlify.com"
    echo "   → New site from Git → Select NexaCore repo"
    echo "   → Your URL: https://nexacore-consultancy.netlify.app"
    echo ""
    echo "⚡ OPTION 2: Vercel"
    echo "   → Go to: https://vercel.com"
    echo "   → Import project → Select NexaCore repo"
    echo "   → Your URL: https://nexacore-consultancy.vercel.app"
    echo ""
    echo "📦 OPTION 3: Manual Upload"
    echo "   → Go to: https://netlify.com/drop"
    echo "   → Drag & drop: nexacore-deployment.tar.gz"
    echo ""
    echo "🎉 Your website will be LIVE in 5 minutes!"
    echo "   Professional IT consultancy site ready to share!"
    echo ""
    echo "💡 Later upgrade to nexacore.com when ready to purchase domain"
    
else
    echo "❌ Build failed. Please check errors above."
    exit 1
fi
