# 🌐 Namecheap DNS Configuration Guide for nexacoreconsultancy.com

## Step-by-Step DNS Setup Instructions

### Step 1: Login to Namecheap

1. Go to **https://www.namecheap.com**
2. Click **Sign In** (top right corner)
3. Enter your username/email and password
4. Click **Sign In**

### Step 2: Access Domain Management

1. After logging in, you'll see your **Dashboard**
2. Look for **Domain List** in the left sidebar (or main menu)
3. Click on **Domain List**
4. Find `nexacoreconsultancy.com` in your domains list
5. Click the **Manage** button next to your domain

### Step 3: Navigate to DNS Settings

1. On the domain management page, look for tabs at the top
2. Click on **Advanced DNS** tab
3. You should now see the DNS records management page

### Step 4: Remove Existing Records (Important!)

Before adding new records, you need to remove conflicting ones:

1. Look for any existing **A Records** pointing to your domain (@)
2. Look for any existing **CNAME Records** for www
3. **Delete these records** by clicking the trash/delete icon next to them
4. Keep any **MX Records** (for email) if you have them

**Common records to DELETE:**
- A Record with Host: @
- CNAME Record with Host: www
- Any Parked Domain records

### Step 5: Add New DNS Records

Now add these **TWO** records exactly as shown:

#### Record 1: Root Domain (@)
```
Type: CNAME Record
Host: @
Value: gautamanand22.github.io.
TTL: Automatic (or 1 min)
```

#### Record 2: WWW Subdomain
```
Type: CNAME Record  
Host: www
Value: gautamanand22.github.io.
TTL: Automatic (or 1 min)
```

### Step 6: How to Add Each Record

For **each record above**:

1. Click **Add New Record** button
2. Select **CNAME Record** from the dropdown
3. In **Host** field, enter either `@` or `www`
4. In **Value** field, enter `gautamanand22.github.io.` (note the period at the end)
5. Leave **TTL** as **Automatic**
6. Click **Save** or **Add Record**

### Step 7: Verify Your Settings

After adding both records, your DNS settings should look like this:

```
Type        Host    Value                       TTL
CNAME       @       gautamanand22.github.io.    Automatic
CNAME       www     gautamanand22.github.io.    Automatic
```

### Step 8: Save Changes

1. Make sure both records are added correctly
2. Click **Save All Changes** button (if available)
3. You should see a confirmation message

## 🚨 Important Notes:

### ✅ DO:
- Use **CNAME records** (not A records)
- Include the **period (.)** at the end of `gautamanand22.github.io.`
- Delete conflicting existing records first
- Use `@` for the root domain
- Use `www` for the www subdomain

### ❌ DON'T:
- Don't use A records for this setup
- Don't forget the period at the end of the GitHub URL
- Don't keep old conflicting DNS records
- Don't use IP addresses in CNAME records

## 🕐 Timeline:

- **Immediate**: Changes saved in Namecheap
- **5-15 minutes**: DNS starts propagating
- **30 minutes - 2 hours**: Full propagation worldwide
- **Up to 24 hours**: Maximum time for complete propagation

## 🔍 How to Check if DNS is Working:

### Method 1: Online DNS Checker
1. Go to **https://dnschecker.org**
2. Enter `nexacoreconsultancy.com`
3. Select **CNAME** from dropdown
4. Click **Search**
5. Look for green checkmarks showing `gautamanand22.github.io`

### Method 2: Command Line (Terminal)
```bash
# Check root domain
nslookup nexacoreconsultancy.com

# Check www subdomain  
nslookup www.nexacoreconsultancy.com
```

### Method 3: Browser Test
- Try visiting: `https://nexacoreconsultancy.com`
- Try visiting: `https://www.nexacoreconsultancy.com`

## 📱 Namecheap Mobile App:

If using the Namecheap mobile app:
1. Tap **Domains**
2. Tap your domain `nexacoreconsultancy.com`
3. Tap **Advanced DNS**
4. Follow the same steps to add CNAME records

## 🆘 Troubleshooting:

### Problem: "CNAME conflicts with other record"
**Solution**: Delete the conflicting A record or CNAME record first

### Problem: "Invalid CNAME value"
**Solution**: Make sure you include the period: `gautamanand22.github.io.`

### Problem: "Changes not taking effect"
**Solution**: 
- Wait 15-30 minutes for propagation
- Clear browser cache
- Try incognito/private browsing mode

### Problem: Can't find "Advanced DNS"
**Solution**: 
- Make sure you clicked **Manage** next to your domain
- Look for tabs at the top of the page
- Some accounts show it as "Advanced DNS" or "DNS Management"

## 📞 Support:

If you encounter issues:
1. **Namecheap Live Chat**: Available 24/7 on their website
2. **Namecheap Support**: Submit a ticket through your account
3. **Phone Support**: Available for premium customers

## ✅ Final Checklist:

- [ ] Logged into Namecheap
- [ ] Found nexacoreconsultancy.com in Domain List
- [ ] Clicked Manage → Advanced DNS
- [ ] Deleted conflicting records
- [ ] Added CNAME record for @ → gautamanand22.github.io.
- [ ] Added CNAME record for www → gautamanand22.github.io.
- [ ] Saved changes
- [ ] Waiting for DNS propagation (15-30 minutes)

---

After completing these steps, continue with the GitHub Pages configuration as mentioned in the previous guide!
