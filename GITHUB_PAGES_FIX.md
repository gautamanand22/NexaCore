# 🔧 GitHub Pages Permission Fix

## Issue: Permission Denied Error
```
remote: Permission to gautamanand22/NexaCore.git denied to github-actions[bot].
fatal: unable to access 'https://github.com/gautamanand22/NexaCore.git/': The requested URL returned error: 403
```

## ✅ Solutions Applied

### 1. Updated Workflow Permissions
Added required permissions to `.github/workflows/deploy.yml`:
```yaml
permissions:
  contents: read
  pages: write
  id-token: write
```

### 2. Alternative Workflow Created
Created `deploy-alternative.yml` using the official GitHub Pages action.

## 🚀 Manual GitHub Pages Setup (Recommended)

To ensure GitHub Pages works with nexacore.com, follow these steps:

### Step 1: Enable GitHub Pages
1. Go to your repo: `https://github.com/gautamanand22/NexaCore`
2. **Settings** → **Pages** (left sidebar)
3. **Source**: Select "GitHub Actions"
4. **Custom domain**: Enter `nexacore.com`
5. **Enforce HTTPS**: ✅ Enable

### Step 2: Choose Workflow
**Option A: Use the fixed workflow** (deploy.yml)
- Already has permissions fixed
- Uses peaceiris/actions-gh-pages@v4

**Option B: Use alternative workflow** (deploy-alternative.yml)
- Uses official GitHub Pages actions
- More reliable for permissions

### Step 3: DNS Configuration
Configure DNS for nexacore.com at your domain registrar:

```
Type: A
Name: @
Value: 185.199.108.153
Value: 185.199.109.153  
Value: 185.199.110.153
Value: 185.199.111.153

Type: CNAME
Name: www
Value: gautamanand22.github.io
```

## 🎯 Quick Deploy Options

### If GitHub Pages Still Has Issues:

#### Option 1: Netlify (Easiest)
1. Go to [netlify.com](https://netlify.com)
2. "New site from Git" → Select NexaCore
3. Deploy → Add domain `nexacore.com`
4. **Time**: 5 minutes

#### Option 2: Vercel (Fastest)
1. Go to [vercel.com](https://vercel.com)  
2. Import project → Select NexaCore
3. Add domain `nexacore.com`
4. **Time**: 3 minutes

## 📋 Next Steps

1. **Push the permission fixes** (already done)
2. **Check GitHub Actions** for successful build
3. **Configure DNS** for nexacore.com
4. **Wait for propagation** (2-24 hours)
5. **Test https://nexacore.com/**

**Issue should be resolved! If GitHub Pages continues to have issues, Netlify or Vercel are excellent alternatives. 🚀**
