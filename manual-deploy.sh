#!/bin/bash

# 🚀 NexaCore Manual Deployment Script
echo "🚀 Building NexaCore for nexacore.com deployment..."
echo "=============================================="

# Clean previous build
echo "🧹 Cleaning previous build..."
rm -rf dist/

# Build the project
echo "🔨 Building project..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo ""
    
    # Show build stats
    echo "📊 Build Statistics:"
    echo "==================="
    du -sh dist/
    ls -la dist/
    echo ""
    
    # Create deployment package
    echo "📦 Creating deployment package..."
    tar -czf nexacore-deployment.tar.gz -C dist .
    
    echo "✅ Deployment package created: nexacore-deployment.tar.gz"
    echo ""
    echo "🌐 Ready for deployment to nexacore.com!"
    echo ""
    echo "📋 Quick Deploy Options:"
    echo "1. Netlify: Upload nexacore-deployment.tar.gz manually"
    echo "2. Vercel: Connect GitHub repo automatically"
    echo "3. GitHub Pages: Upload dist/ contents to gh-pages branch"
    echo ""
    echo "🎯 Recommended: Use Netlify for fastest deployment"
    echo "   Go to: https://netlify.com/drop"
    echo "   Drag & drop: nexacore-deployment.tar.gz"
    echo ""
    
else
    echo "❌ Build failed. Please check errors above."
    exit 1
fi
