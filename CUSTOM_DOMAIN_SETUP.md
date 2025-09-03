# NexaCore Custom Domain Setup Guide

## 🌐 Domain: nexacoreconsultancy.com

This guide will help you set up your custom domain with GitHub Pages.

## 📋 Prerequisites

✅ Domain purchased from Namecheap: `nexacoreconsultancy.com`
✅ GitHub repository: `gautamanand22/NexaCore`
✅ CNAME file created in `/public/CNAME`

## 🚀 Deployment Steps

### Step 1: Configure GitHub Pages

1. Go to your GitHub repository: https://github.com/gautamanand22/NexaCore
2. Click on **Settings** tab
3. Scroll down to **Pages** section in the left sidebar
4. Under **Source**, select **GitHub Actions**
5. Under **Custom domain**, enter: `nexacoreconsultancy.com`
6. Check **Enforce HTTPS** (recommended)

### Step 2: Configure DNS in Namecheap

Login to your Namecheap account and follow these steps:

#### Option A: Using CNAME (Recommended)
1. Go to **Domain List** → **Manage** → **Advanced DNS**
2. Delete any existing A records for your domain
3. Add these records:

```
Type: CNAME
Host: www
Value: gautamanand22.github.io
TTL: Automatic

Type: CNAME  
Host: @
Value: gautamanand22.github.io
TTL: Automatic
```

#### Option B: Using A Records (Alternative)
If CNAME doesn't work, use A records:

```
Type: A
Host: @
Value: 185.199.108.153
TTL: Automatic

Type: A
Host: @
Value: 185.199.109.153
TTL: Automatic

Type: A
Host: @
Value: 185.199.110.153
TTL: Automatic

Type: A
Host: @
Value: 185.199.111.153
TTL: Automatic

Type: CNAME
Host: www
Value: gautamanand22.github.io
TTL: Automatic
```

### Step 3: Verify Domain Configuration

1. Wait 5-10 minutes for DNS propagation
2. Go to GitHub repository **Settings** → **Pages**
3. You should see: "Your site is ready to be published at https://nexacoreconsultancy.com"
4. Wait for the green checkmark indicating SSL certificate is ready

### Step 4: Test Your Site

1. Visit: https://nexacoreconsultancy.com
2. Verify all pages load correctly
3. Check that HTTPS is working (green lock icon)

## 🔧 Troubleshooting

### DNS Not Propagating
- Wait up to 24-48 hours for full DNS propagation
- Use https://dnschecker.org to check propagation status
- Clear browser cache and try incognito mode

### SSL Certificate Issues
- Uncheck and recheck "Enforce HTTPS" in GitHub Pages settings
- Wait 10-15 minutes for certificate generation
- Ensure DNS records are correct

### Site Not Loading
- Verify CNAME file contains only: `nexacoreconsultancy.com`
- Check that GitHub Actions workflow completed successfully
- Ensure custom domain is set in GitHub Pages settings

## 📞 Support

If you encounter issues:
1. Check GitHub Actions logs for build errors
2. Verify DNS configuration in Namecheap
3. Contact Namecheap support for DNS issues
4. Contact GitHub support for Pages issues

## 🎉 Success Checklist

- [ ] Domain configured in GitHub Pages
- [ ] DNS records added in Namecheap  
- [ ] CNAME file deployed
- [ ] Site accessible at https://nexacoreconsultancy.com
- [ ] HTTPS working (green lock)
- [ ] All pages loading correctly

## 📈 Next Steps

Once your domain is live:
1. Set up Google Analytics
2. Configure Google Search Console
3. Submit sitemap to search engines
4. Set up monitoring and analytics

---

**Domain**: nexacoreconsultancy.com  
**GitHub Repository**: gautamanand22/NexaCore  
**Deployment**: GitHub Pages with Custom Domain  
**SSL**: Enabled via GitHub Pages
