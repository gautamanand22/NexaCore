# 🌐 NexaCore.com Deployment Guide

## Domain: https://nexacore.com/

Perfect choice! You have an excellent domain for your IT consultancy. Let's get your NexaCore website live on this domain.

---

## 🚀 Recommended Deployment Options

### Option 1: Netlify (Recommended for Business)

**Why Netlify for nexacore.com:**
- ✅ **Professional hosting** for business domains
- ✅ **Free SSL certificate** for nexacore.com
- ✅ **Global CDN** - Fast loading worldwide
- ✅ **99.9% uptime** guarantee
- ✅ **Easy domain management**
- ✅ **Form handling** for contact forms

#### Step-by-Step Netlify Deployment:

1. **Go to [netlify.com](https://netlify.com)**
2. **Sign up** with your GitHub account
3. **Click "New site from Git"**
4. **Connect to GitHub** and select `gautamanand22/NexaCore`
5. **Deploy settings** (pre-configured):
   ```
   Build command: npm run build
   Publish directory: dist
   ```
6. **Click "Deploy site"**
7. **Your site will be live** at a temporary URL

#### Connect nexacore.com to Netlify:

1. **In Netlify Dashboard** → Go to your site
2. **Site settings** → **Domain management**
3. **Add custom domain** → Enter `nexacore.com`
4. **Configure DNS** (choose one option):

**Option A: Netlify DNS (Recommended)**
- Netlify provides nameservers
- Change nameservers at your domain registrar
- Full DNS management through Netlify

**Option B: External DNS**
Add these records where you manage DNS:
```
Type: A
Name: @
Value: 75.2.60.5

Type: CNAME
Name: www
Value: [your-site-name].netlify.app
```

---

### Option 2: Vercel (Great Alternative)

#### Deploy to Vercel:
1. **Go to [vercel.com](https://vercel.com)**
2. **Import project** → Select `gautamanand22/NexaCore`
3. **Deploy** (auto-configured from vercel.json)

#### Add nexacore.com:
1. **Dashboard** → **Settings** → **Domains**
2. **Add domain** → `nexacore.com`
3. **Configure DNS**:
   ```
   Type: A
   Name: @
   Value: 76.76.19.61
   
   Type: CNAME
   Name: www  
   Value: cname.vercel-dns.com
   ```

---

### Option 3: GitHub Pages (Most Cost-Effective)

#### Setup GitHub Pages:
1. **Go to your repo**: `github.com/gautamanand22/NexaCore`
2. **Settings** → **Pages**
3. **Source**: Deploy from branch → `gh-pages`
4. **Custom domain**: Enter `nexacore.com`
5. **GitHub Actions** will auto-deploy (already configured)

#### Configure DNS for GitHub Pages:
```
Type: A
Name: @
Value: 185.199.108.153

Type: A
Name: @
Value: 185.199.109.153

Type: A
Name: @
Value: 185.199.110.153

Type: A
Name: @
Value: 185.199.111.153

Type: CNAME
Name: www
Value: gautamanand22.github.io
```

---

## 🔧 DNS Configuration Guide

### Where to configure DNS:

**If you bought nexacore.com from:**
- **GoDaddy**: DNS Management in your account
- **Namecheap**: Advanced DNS in domain list
- **Domain.com**: DNS & Nameservers section
- **Cloudflare**: DNS management (if using Cloudflare)

### DNS Propagation:
- **Time**: 24-48 hours (usually faster)
- **Check status**: Use `dig nexacore.com` or online DNS checkers
- **Tip**: Clear browser cache after propagation

---

## 🎯 Quick Start (Recommended Path)

### Fastest Deploy to nexacore.com:

1. **Choose Netlify** (easiest for custom domains)
2. **Deploy from GitHub** (5 minutes)
3. **Add nexacore.com** in domain settings
4. **Update DNS** at your registrar
5. **Enable HTTPS** (automatic)
6. **🎉 Your site is live!**

### Commands to run:
```bash
# Test build locally first
cd /Users/apple/Downloads/NexaCore
npm run build

# Deploy will happen automatically when you push to GitHub
git add .
git commit -m "Configure nexacore.com deployment"
git push origin main
```

---

## 📊 Expected Timeline

| Task | Time |
|------|------|
| Deploy to hosting platform | 5-10 minutes |
| Configure custom domain | 10 minutes |
| DNS propagation | 2-24 hours |
| SSL certificate provision | 1-4 hours |
| **Total time to live site** | **2-24 hours** |

---

## 🔒 Security & Performance

**Already configured:**
- ✅ **SSL/HTTPS** - Automatic with all platforms
- ✅ **Security headers** - XSS protection, content security
- ✅ **Gzip compression** - 22.81 kB optimized size
- ✅ **Caching** - Optimized for performance
- ✅ **CDN** - Global content delivery

---

## 🆘 Troubleshooting

### If nexacore.com doesn't work:
1. **Check DNS propagation**: Use `nslookup nexacore.com`
2. **Verify DNS records**: Correct A/CNAME values
3. **Clear browser cache**: Hard refresh (Cmd+Shift+R)
4. **Check hosting platform**: Build logs for errors
5. **Wait longer**: DNS can take up to 48 hours

### Common issues:
- **"Site not found"**: DNS not propagated yet
- **"Not secure"**: SSL certificate still provisioning
- **"Page not loading"**: Check build completed successfully

---

## � Next Steps After Deploy

1. **Test website** on mobile and desktop
2. **Set up Google Analytics** for traffic monitoring
3. **Submit to Google Search Console** for SEO
4. **Add Google My Business** listing
5. **Set up contact forms** (Netlify handles this automatically)

**Your professional nexacore.com website will be live and ready for business! 🚀**
