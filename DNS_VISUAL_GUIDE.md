## 🎯 Quick Visual Guide - Namecheap DNS Configuration

```
┌─────────────────────────────────────────────────────┐
│                NAMECHEAP LOGIN                      │
│  1. Go to namecheap.com                            │
│  2. Click "Sign In"                                │
│  3. Enter credentials                              │
└─────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────┐
│              FIND YOUR DOMAIN                       │
│  1. Click "Domain List" (left sidebar)            │
│  2. Look for "nexacoreconsultancy.com"            │
│  3. Click "Manage" button                          │
└─────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────┐
│              ACCESS DNS SETTINGS                    │
│  1. Click "Advanced DNS" tab                       │
│  2. You'll see current DNS records                 │
└─────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────┐
│            DELETE EXISTING RECORDS                  │
│  ❌ Delete any A records with Host: @               │
│  ❌ Delete any CNAME records with Host: www         │
│  ✅ Keep MX records (email)                         │
└─────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────┐
│              ADD NEW RECORDS                        │
│                                                     │
│  Record 1:                                         │
│  Type: CNAME                                       │
│  Host: @                                           │
│  Value: gautamanand22.github.io.                   │
│  TTL: Automatic                                    │
│                                                     │
│  Record 2:                                         │
│  Type: CNAME                                       │
│  Host: www                                         │
│  Value: gautamanand22.github.io.                   │
│  TTL: Automatic                                    │
└─────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────┐
│                SAVE CHANGES                         │
│  1. Click "Save All Changes"                       │
│  2. Wait for confirmation                          │
│  3. DNS propagation starts immediately             │
└─────────────────────────────────────────────────────┘
```

## 🖼️ What Your DNS Records Should Look Like:

```
╔═══════════════════════════════════════════════════════╗
║                  ADVANCED DNS                         ║
╠═══════════════════════════════════════════════════════╣
║ Type    │ Host │ Value                   │ TTL         ║
╠═════════┼══════┼═══════════════════════════┼═══════════╣
║ CNAME   │  @   │ gautamanand22.github.io. │ Automatic ║
║ CNAME   │ www  │ gautamanand22.github.io. │ Automatic ║
╚═════════╧══════╧═══════════════════════════╧═══════════╝
```

## 🔄 DNS Propagation Timeline:

```
0 min     │ You save DNS changes in Namecheap
          │ ✅ Changes saved
          │
5 min     │ DNS starts propagating globally
          │ 🟡 Some locations see new DNS
          │
15 min    │ Most locations updated
          │ 🟢 Your site should start working
          │
30 min    │ Wide propagation complete
          │ 🟢 Site working globally
          │
24 hrs    │ 100% propagation guaranteed
          │ ✅ Complete
```

## 🚫 Common Mistakes to Avoid:

❌ **Wrong**: Using A records instead of CNAME
❌ **Wrong**: Forgetting the period: `gautamanand22.github.io`
❌ **Wrong**: Not deleting conflicting records first
❌ **Wrong**: Using IP addresses in CNAME records

✅ **Correct**: Using CNAME records
✅ **Correct**: Including the period: `gautamanand22.github.io.`
✅ **Correct**: Deleting old records first
✅ **Correct**: Using the GitHub subdomain exactly as shown
