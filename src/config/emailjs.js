// EmailJS Configuration for NexaCore Contact Form
// Replace these values with your actual EmailJS credentials

export const emailJSConfig = {
    // Get these from your EmailJS dashboard: https://dashboard.emailjs.com/
    serviceId: 'service_nexacore',     // Replace with your EmailJS Service ID
    templateId: 'template_nexacore',   // Replace with your EmailJS Template ID
    publicKey: 'YOUR_PUBLIC_KEY_HERE'  // Replace with your EmailJS Public Key
}

// Email template should include these variables:
// {{to_email}} - gautamanand@nexacoreconsultancy.com
// {{from_name}} - Sender's name
// {{from_email}} - Sender's email
// {{company}} - Sender's company
// {{phone}} - Sender's phone
// {{service}} - Service of interest
// {{message}} - Message content
// {{reply_to}} - Sender's email for reply
