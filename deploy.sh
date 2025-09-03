#!/bin/bash

# NexaCore Deployment Helper Script
# Run this script to prepare your site for deployment

echo "🚀 NexaCore Deployment Helper"
echo "============================="

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: Please run this script from the NexaCore project directory"
    exit 1
fi

echo "📦 Installing dependencies..."
npm install

echo "🔨 Building project for production..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo ""
    echo "📊 Build Summary:"
    echo "=================="
    ls -lh dist/
    echo ""
    echo "🌐 Your site is ready for deployment!"
    echo ""
    echo "Next Steps:"
    echo "1. Choose a hosting provider (Netlify recommended)"
    echo "2. Connect your GitHub repository"
    echo "3. Deploy with these settings:"
    echo "   - Build command: npm run build"
    echo "   - Publish directory: dist"
    echo ""
    echo "📖 For detailed instructions, see: DEPLOYMENT_GUIDE.md"
else
    echo "❌ Build failed. Please check the errors above."
    exit 1
fi

echo ""
echo "🎉 Ready to go live! Choose your hosting platform:"
echo "   • Netlify: https://netlify.com (Recommended)"
echo "   • Vercel: https://vercel.com"
echo "   • GitHub Pages: Already configured via GitHub Actions"
