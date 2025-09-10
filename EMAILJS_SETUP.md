# EmailJS Setup Guide for NexaCore Contact Form

## Step 1: Create EmailJS Account
1. Go to [EmailJS](https://www.emailjs.com/)
2. Sign up with your Google account or email
3. Verify your email address

## Step 2: Create Email Service
1. In EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider:
   - **Gmail**: Use your Gmail account (gautamanand@nexacoreconsultancy.com)
   - **Outlook**: If using Outlook/Hotmail
   - **Custom SMTP**: For custom email servers
4. Follow the setup instructions for your chosen provider
5. Test the connection and save the service
6. **Copy the Service ID** (e.g., service_1abc2def)

## Step 3: Create Email Template
1. Go to "Email Templates" in dashboard
2. Click "Create New Template"
3. Use this template content:

### Subject Line:
```
New Contact Form Submission from {{from_name}}
```

### Email Body:
```html
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
    <h2 style="color: #2563eb;">New Contact Form Submission</h2>
    <p><strong>You have received a new message from your NexaCore website contact form.</strong></p>
    
    <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="color: #1f2937; margin-top: 0;">Contact Details:</h3>
        <p><strong>Name:</strong> {{from_name}}</p>
        <p><strong>Email:</strong> {{from_email}}</p>
        <p><strong>Company:</strong> {{company}}</p>
        <p><strong>Phone:</strong> {{phone}}</p>
        <p><strong>Service of Interest:</strong> {{service}}</p>
    </div>
    
    <div style="background-color: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="color: #1f2937; margin-top: 0;">Message:</h3>
        <p style="white-space: pre-wrap;">{{message}}</p>
    </div>
    
    <div style="background-color: #fef7ff; padding: 15px; border-radius: 8px; margin: 20px 0;">
        <p><strong>Reply to this email to respond directly to the sender.</strong></p>
        <p style="font-size: 12px; color: #6b7280;">
            This message was sent from the NexaCore Consultancy Services website contact form.
        </p>
    </div>
</div>
```

4. **Copy the Template ID** (e.g., template_1abc2def)

## Step 4: Get Public Key
1. Go to "Account" → "General"
2. Find your **Public Key** (e.g., user_1abc2def3ghi4jkl)
3. Copy this key

## Step 5: Update Configuration
1. Open `/src/config/emailjs.js`
2. Replace the placeholder values:

```javascript
export const emailJSConfig = {
    serviceId: 'service_1abc2def',        // Your Service ID
    templateId: 'template_1abc2def',      // Your Template ID
    publicKey: 'user_1abc2def3ghi4jkl'    // Your Public Key
}
```

## Step 6: Test the Integration
1. Save the configuration file
2. Run `npm run dev`
3. Go to the contact section
4. Fill out the form and submit
5. Check your email (gautamanand@nexacoreconsultancy.com) for the test message

## Security Notes:
- The public key is safe to use in client-side code
- EmailJS handles rate limiting and spam protection
- Set up EmailJS template filters to prevent abuse
- Consider adding a captcha for production use

## Troubleshooting:
- **403 Forbidden**: Check your public key and service configuration
- **Template not found**: Verify your template ID is correct
- **Service unavailable**: Ensure your email service connection is active
- **Rate limited**: EmailJS has monthly limits on free accounts

## Alternative Options:
If you prefer a different solution, you can also use:
1. **Netlify Forms** (if deploying on Netlify)
2. **Formspree** (form backend service)
3. **Custom backend** with Node.js and Nodemailer

Your contact form is now ready to send emails directly to gautamanand@nexacoreconsultancy.com! 🚀
