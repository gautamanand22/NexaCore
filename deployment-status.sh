#!/bin/bash

echo "🚀 NEXACORE DEPLOYMENT MONITOR"
echo "================================"
echo ""

# Check if we're in a git repository
if [ ! -d .git ]; then
    echo "❌ Error: Not in a git repository"
    exit 1
fi

# Get current branch
BRANCH=$(git branch --show-current)
echo "📂 Current Branch: $BRANCH"

# Get latest commit info
COMMIT_HASH=$(git rev-parse HEAD)
COMMIT_MESSAGE=$(git log -1 --pretty=format:"%s")
COMMIT_AUTHOR=$(git log -1 --pretty=format:"%an")
COMMIT_TIME=$(git log -1 --pretty=format:"%cr")

echo "🔗 Latest Commit: ${COMMIT_HASH:0:8}"
echo "💬 Message: $COMMIT_MESSAGE"
echo "👤 Author: $COMMIT_AUTHOR"
echo "⏰ Time: $COMMIT_TIME"
echo ""

# Check deployment status
echo "🌐 DEPLOYMENT STATUS:"
echo "================================"

if [ "$BRANCH" = "main" ]; then
    echo "✅ On main branch - deployments enabled"
    echo "🎯 Target URL: https://nexacoreconsultancy.com"
    echo ""
    
    # Check if there are uncommitted changes
    if [ -n "$(git status --porcelain)" ]; then
        echo "⚠️  You have uncommitted changes:"
        git status --short
        echo ""
        echo "💡 Commit and push to trigger deployment:"
        echo "   git add ."
        echo "   git commit -m \"Your commit message\""
        echo "   git push origin main"
    else
        echo "✅ No uncommitted changes"
        echo ""
        echo "📊 Recent deployments:"
        echo "   To view deployment history, visit:"
        echo "   https://github.com/gautamanand22/NexaCore/actions"
    fi
else
    echo "ℹ️  On branch '$BRANCH' - switch to main for deployment"
    echo "   git checkout main"
fi

echo ""
echo "🔍 QUICK CHECKS:"
echo "================================"

# Check if package.json exists
if [ -f package.json ]; then
    echo "✅ package.json found"
else
    echo "❌ package.json missing"
fi

# Check if dist directory exists (after build)
if [ -d dist ]; then
    echo "✅ dist/ directory exists"
    echo "📊 Build size: $(du -sh dist/ | cut -f1)"
else
    echo "ℹ️  dist/ directory not found (run 'npm run build')"
fi

# Check if CNAME file exists
if [ -f public/CNAME ]; then
    echo "✅ CNAME file exists: $(cat public/CNAME)"
else
    echo "❌ CNAME file missing in public/"
fi

echo ""
echo "🎯 DEPLOYMENT WORKFLOW:"
echo "================================"
echo "1. Make your changes"
echo "2. git add ."
echo "3. git commit -m \"Description of changes\""
echo "4. git push origin main"
echo "5. GitHub Actions will automatically deploy to nexacoreconsultancy.com"
echo ""
echo "⏱️  Deployment usually takes 2-3 minutes"
echo "🌍 Live site: https://nexacoreconsultancy.com"
