/**
 * Autonomous Client Acquisition Engine
 * Outreach Generator - Creates personalized emails
 */

const fs = require('fs');
const path = require('path');

const OUTPUT_DIR = path.join(__dirname, 'outreach');

/**
 * Generate outreach email for a business
 */
function generateEmail(business, mockupUrl) {
  const email = {
    subject: `I built something for ${business.name} 👀`,
    body: `Hi ${business.name || 'there'},

I was searching for local barber shops and noticed you don't have a website yet.

So I built one for you.

**See it here:** ${mockupUrl}

It's fully functional, mobile-responsive, and designed to convert visitors into customers. Premium aesthetic with gold accents - same style as high-end barbershops.

**Why I did this:**
- To show you what's possible
- To help your business grow
- Because I believe in delivering before asking

**What's included:**
✓ Hero section with your branding
✓ Services showcase
✓ Contact buttons (phone + email)
✓ Mobile responsive
✓ Fast loading

**No cost to review.**

If you like it, we can customize it further and get it live on your own domain.

Let me know what you think.

Best,
Frank Sharpe
Web Developer & AI Architect

---
P.S. I can also add:
- Online booking system
- Photo gallery
- Customer reviews section
- Google Maps integration`

  };
  
  return email;
}

/**
 * Generate phone script
 */
function generatePhoneScript(business) {
  return `Hi, this is Frank from Web Design.

I noticed ${business.name} doesn't have a website yet, so I built a demo mockup to show you what's possible.

It's a premium design with gold accents, mobile responsive, and ready to convert visitors into customers.

I'd love to share it with you - took me about 20 minutes to build.

Do you have 2 minutes to look at it?

[Wait for response]

Great! I can send you the link right now. What's your email address?

[Send email with mockup link]

No pressure - just wanted to show you what's possible. If you like it, we can customize it and get it live on your own domain.

Sound fair?`;
}

/**
 * Main execution
 */
async function main() {
  console.log('✉️  Outreach Generator');
  console.log('='.repeat(60));
  
  // Demo business
  const demoBusiness = {
    name: "Sharp Cuts Barber Shop",
    phone: "555-0123",
    email: "info@sharpcuts.com",
    address: "123 Main St, Pine Bluff, AR"
  };
  
  const demoUrl = "https://autonomous-client-engine.vercel.app/demo";
  
  console.log(`\n📧 Generating email for ${demoBusiness.name}...`);
  
  const email = generateEmail(demoBusiness, demoUrl);
  
  // Save email
  const emailFile = path.join(OUTPUT_DIR, `email-${Date.now()}.txt`);
  fs.writeFileSync(emailFile, `Subject: ${email.subject}\n\n${email.body}`);
  
  console.log(`✅ Email saved: ${emailFile}`);
  console.log(`\n${'='.repeat(60)}`);
  console.log(`SUBJECT: ${email.subject}`);
  console.log(`\n${email.body}`);
  
  // Generate phone script
  console.log(`\n${'='.repeat(60)}`);
  console.log(`📞 Phone Script:\n`);
  const script = generatePhoneScript(demoBusiness);
  console.log(script);
  
  const scriptFile = path.join(OUTPUT_DIR, `phone-script-${Date.now()}.txt`);
  fs.writeFileSync(scriptFile, script);
  
  console.log(`\n✅ Phone script saved: ${scriptFile}`);
  console.log('\n✅ Outreach generation complete!');
}

main().catch(console.error);
