/**
 * Autonomous Client Acquisition Engine
 * Mockup Generator - Creates HTML websites automatically
 */

const fs = require('fs');
const path = require('path');

const OUTPUT_DIR = path.join(__dirname, 'mockups');

// Clean Kutz inspired template
const TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{BUSINESS_NAME}} - Premium Barber & Style</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Inter:wght@300;400;600&display=swap" rel="stylesheet">
    <script src="https://unpkg.com/lucide@latest"></script>
    <style>
        :root {
            --gold: #d4af37;
            --dark: #0a0a0a;
        }
        body {
            font-family: 'Inter', sans-serif;
            background: var(--dark);
        }
        .font-display {
            font-family: 'Playfair Display', serif;
        }
        .text-gold {
            color: var(--gold);
        }
        .bg-gold {
            background-color: var(--gold);
        }
        .border-gold {
            border-color: var(--gold);
        }
        .noise {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            opacity: 0.03;
            background-image: url('data:image/svg+xml,%3Csvg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noiseFilter"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch"/%3E%3C/filter%3E%3Crect width="100%25" height="100%25" filter="url(%23noiseFilter)"/%3E%3C/svg%3E');
        }
        .animate-fade-in {
            animation: fadeIn 0.8s ease-out;
        }
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
    </style>
</head>
<body class="text-white min-h-screen">
    <div class="noise"></div>
    
    <!-- Hero Section -->
    <section class="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div class="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        <div class="relative z-10 text-center px-4 animate-fade-in">
            <h1 class="font-display text-6xl md:text-8xl font-bold mb-4">
                <span class="text-gold">{{BUSINESS_NAME}}</span>
            </h1>
            <p class="text-xl md:text-2xl text-gray-300 mb-8 tracking-wide">
                Premium Grooming Experience
            </p>
            <div class="flex items-center justify-center gap-2 text-gold">
                <i data-lucide="scissors" class="w-5 h-5"></i>
                <span class="text-sm uppercase tracking-widest">By Appointment Only</span>
                <i data-lucide="scissors" class="w-5 h-5"></i>
            </div>
        </div>
    </section>
    
    <!-- Services Section -->
    <section class="py-20 px-4">
        <div class="max-w-4xl mx-auto">
            <h2 class="font-display text-4xl text-center mb-12 text-gold">Services</h2>
            <div class="grid md:grid-cols-3 gap-8">
                <div class="bg-gray-900 p-6 border border-gray-800 hover:border-gold transition-all">
                    <i data-lucide="user" class="w-8 h-8 text-gold mb-4"></i>
                    <h3 class="text-xl font-semibold mb-2">Haircuts</h3>
                    <p class="text-gray-400">Precision cuts tailored to your style</p>
                </div>
                <div class="bg-gray-900 p-6 border border-gray-800 hover:border-gold transition-all">
                    <i data-lucide="sparkles" class="w-8 h-8 text-gold mb-4"></i>
                    <h3 class="text-xl font-semibold mb-2">Beard Grooming</h3>
                    <p class="text-gray-400">Expert shaping and trimming</p>
                </div>
                <div class="bg-gray-900 p-6 border border-gray-800 hover:border-gold transition-all">
                    <i data-lucide="crown" class="w-8 h-8 text-gold mb-4"></i>
                    <h3 class="text-xl font-semibold mb-2">Premium Service</h3>
                    <p class="text-gray-400">Luxury grooming experience</p>
                </div>
            </div>
        </div>
    </section>
    
    <!-- Contact Section -->
    <section class="py-20 px-4 bg-gray-900">
        <div class="max-w-2xl mx-auto text-center">
            <h2 class="font-display text-4xl mb-8 text-gold">Book Your Experience</h2>
            <p class="text-gray-300 mb-8">Ready to elevate your look? Contact us today.</p>
            <div class="flex flex-col md:flex-row gap-4 justify-center">
                <a href="tel:{{PHONE}}" class="bg-gold text-black px-8 py-3 font-semibold hover:bg-yellow-500 transition-colors">
                    Call Now
                </a>
                <a href="mailto:{{EMAIL}}" class="border border-gold text-gold px-8 py-3 font-semibold hover:bg-gold hover:text-black transition-colors">
                    Email Us
                </a>
            </div>
        </div>
    </section>
    
    <!-- Footer -->
    <footer class="py-8 text-center text-gray-500 border-t border-gray-900">
        <p>&copy; 2026 {{BUSINESS_NAME}}. All rights reserved.</p>
    </footer>
    
    <script src="https://unpkg.com/lucide@latest"></script>
    <script>
        lucide.createIcons();
    </script>
</body>
</html>
`;

/**
 * Generate mockup HTML for a business
 */
function generateMockup(business) {
  let html = TEMPLATE;
  
  // Replace placeholders
  html = html.replace(/\{\{BUSINESS_NAME\}\}/g, business.name || 'Premium Barber');
  html = html.replace(/\{\{PHONE\}\}/g, business.phone || '555-0123');
  html = html.replace(/\{\{EMAIL\}\}/g, business.email || 'contact@example.com');
  html = html.replace(/\{\{ADDRESS\}\}/g, business.address || '');
  
  return html;
}

/**
 * Main execution
 */
async function main() {
  console.log('🎨 Mockup Generator');
  console.log('='.repeat(60));
  
  // Check if we have leads
  const leadsDir = path.join(__dirname, 'leads');
  const leadFiles = fs.readdirSync(leadsDir).filter(f => f.endsWith('.json'));
  
  if (leadFiles.length === 0) {
    console.log('⚠️  No leads found. Run lead-scraper.js first.');
    return;
  }
  
  // Load latest leads
  const latestLeads = JSON.parse(fs.readFileSync(path.join(leadsDir, leadFiles[leadFiles.length - 1]), 'utf8'));
  
  if (latestLeads.length === 0) {
    console.log('⚠️  No businesses found in leads file.');
    
    // Generate a demo mockup
    const demoBusiness = {
      name: "Sharp Cuts Barber Shop",
      phone: "555-0123",
      email: "info@sharpcuts.com",
      address: "123 Main St, Pine Bluff, AR"
    };
    
    console.log(`\n🎯 Generating demo mockup for ${demoBusiness.name}...`);
    const html = generateMockup(demoBusiness);
    
    const outputFile = path.join(OUTPUT_DIR, `demo-mockup-${Date.now()}.html`);
    fs.writeFileSync(outputFile, html);
    
    console.log(`✅ Generated demo mockup: ${outputFile}`);
    
    return;
  }
  
  // Generate mockups for all leads
  for (const business of latestLeads) {
    console.log(`\n🎯 Generating mockup for ${business.name}...`);
    
    const html = generateMockup(business);
    const outputFile = path.join(OUTPUT_DIR, `${business.name.toLowerCase().replace(/\s+/g, '-')}-${Date.now()}.html`);
    
    fs.writeFileSync(outputFile, html);
    console.log(`✅ Generated: ${outputFile}`);
  }
  
  console.log('\n✅ Mockup generation complete!');
}

main().catch(console.error);
