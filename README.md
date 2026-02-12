# ORDAE - Beauty Brand Marketplace Demo

A modern luxury-tech demo website for ORDAE, a platform connecting conscious consumers with verified beauty brands through the COVENA Trust Framework.

## 🌟 Features

### Quiz-First Homepage
- Primary CTA: "Get Matched in 2 Minutes" - leads to personalized quiz
- Secondary CTA: "Browse Marketplace" - direct access to all brands
- Modern luxury aesthetic with charcoal/black background and gold accents

### Marketplace Directory
- Browse all 7 verified brands (3 wigs, 2 lashes, 2 makeup)
- Advanced filtering system:
  - Category (Wigs, Lashes, Makeup)
  - Budget ranges
  - Beginner-friendly toggle
  - Shipping speed
  - COVENA verification level
- Real-time filter updates

### Guided Buyer Quiz
- 5-step multi-choice quiz
- Progress bar showing completion
- Questions cover:
  1. Product category preference
  2. Budget range
  3. Personal priorities (ethical sourcing, clean ingredients, etc.)
  4. Experience level
  5. Shipping preferences
- Smart matching algorithm

### Match Results
- Top 3 personalized brand recommendations
- "Why This Matched" explanations for each brand
- Links to full brand profiles
- Option to retake quiz or browse marketplace

### Brand Profiles
- Dynamic pages for each brand
- Complete brand information:
  - Mission statement
  - Sourcing transparency details
  - Step-by-step process breakdown
  - Best-selling products with prices
  - Verified customer reviews
  - COVENA certification badges

### COVENA Trust Framework Page
- Comprehensive explanation of the verification system
- Three pillars of trust
- Verification process breakdown
- Verification level tiers (Silver, Gold, Platinum)

### Brand Signup Page
- Application form for new brands
- Benefits of joining ORDAE
- Verification journey visualization

## 🎨 Design

**Color Palette:**
- Deep Charcoal: `#1a1a1a`
- Rich Black: `#0a0a0a`
- Luxury Gold: `#d4af37`
- Warm Cream: `#f5f1e8`
- Accent Gray: `#666666`

**Typography:** System fonts for optimal performance and readability

**Style:** Modern luxury-tech aesthetic with spacious layouts, clean lines, and sophisticated color transitions

## 📁 File Structure

```
ordae-demo/
├── index.html              # Homepage with quiz-first design
├── marketplace.html        # Browsable brand directory
├── quiz.html              # Multi-step buyer quiz
├── match-results.html     # Quiz results page
├── brand-profile.html     # Dynamic brand profile page
├── trust-framework.html   # COVENA Trust Framework info
├── brand-signup.html      # Brand application form
├── styles.css             # All styling
├── script.js              # All JavaScript functionality
├── brands-data.js         # Brand data (7 brands with full details)
└── README.md             # This file
```

## 🚀 Deployment to GitHub Pages

### Method 1: Quick Deploy via GitHub Web Interface

1. **Create a new GitHub repository**
   - Go to https://github.com/new
   - Name it (e.g., `ordae-demo`)
   - Make it Public
   - Don't initialize with README

2. **Upload files**
   - Click "uploading an existing file"
   - Drag all files from the `ordae-demo` folder
   - Commit directly to main branch

3. **Enable GitHub Pages**
   - Go to repository Settings
   - Navigate to "Pages" in the left sidebar
   - Under "Source", select "Deploy from a branch"
   - Select branch: `main` and folder: `/ (root)`
   - Click Save

4. **Access your site**
   - Wait 1-2 minutes for deployment
   - Your site will be at: `https://[username].github.io/[repo-name]/`

### Method 2: Deploy via Git Command Line

1. **Initialize local repository**
   ```bash
   cd ordae-demo
   git init
   git add .
   git commit -m "Initial commit: ORDAE demo website"
   ```

2. **Create GitHub repository**
   - Go to https://github.com/new
   - Create repository (don't initialize with anything)

3. **Push to GitHub**
   ```bash
   git remote add origin https://github.com/[username]/[repo-name].git
   git branch -M main
   git push -u origin main
   ```

4. **Enable GitHub Pages** (follow step 3 from Method 1)

### Method 3: GitHub Desktop (User-Friendly)

1. **Install GitHub Desktop**
   - Download from https://desktop.github.com/

2. **Create repository**
   - File → New Repository
   - Name: `ordae-demo`
   - Local Path: choose the `ordae-demo` folder location
   - Click "Create Repository"

3. **Publish to GitHub**
   - Click "Publish repository"
   - Uncheck "Keep this code private"
   - Click "Publish Repository"

4. **Enable GitHub Pages** (follow step 3 from Method 1)

## 🧪 Local Testing

To test locally before deploying:

1. **Using Python (pre-installed on Mac/Linux)**
   ```bash
   cd ordae-demo
   python -m http.server 8000
   ```
   Open: http://localhost:8000

2. **Using Node.js (if installed)**
   ```bash
   npx http-server ordae-demo
   ```
   Open the URL shown in terminal

3. **Using VS Code Live Server**
   - Install "Live Server" extension
   - Right-click `index.html`
   - Select "Open with Live Server"

## 📄 Pages Overview

### Homepage (`index.html`)
- Hero section with quiz CTA
- Quiz preview card
- Why Choose ORDAE features
- How It Works steps
- COVENA Trust Framework introduction

### Marketplace (`marketplace.html`)
- Left sidebar with filters
- Grid of brand cards
- Each card shows name, category, description, badges, stats

### Quiz (`quiz.html`)
- 5 progressive steps
- Visual progress bar
- Navigation buttons (Previous/Next/Submit)
- Selected state styling

### Match Results (`match-results.html`)
- Ranked match cards (1st, 2nd, 3rd)
- Match reasoning for each brand
- CTA buttons to view profiles or shop
- Options to retake quiz or browse all

### Brand Profile (`brand-profile.html`)
- Hero with brand name and COVENA badges
- Mission section
- Sourcing transparency details
- Process steps with icons
- Best sellers showcase
- Customer reviews

### Trust Framework (`trust-framework.html`)
- What is COVENA section
- Three pillars breakdown
- Verification process details
- Verification levels explanation

### Brand Signup (`brand-signup.html`)
- Benefits of joining
- Multi-field application form
- Verification journey visualization

## 🔧 Customization

### Adding New Brands
Edit `brands-data.js` and add a new brand object:

```javascript
{
    id: "brand-slug",
    name: "Brand Name",
    category: "Wigs" | "Lashes" | "Makeup",
    tagline: "Brand tagline",
    mission: "Mission statement",
    description: "Short description",
    sourcing: { summary: "...", details: [...] },
    process: [{ step: "...", description: "...", icon: "..." }],
    bestSellers: [{ name: "...", price: "$..." }],
    reviews: [{ name: "...", rating: 5, text: "..." }],
    badges: ["Verified by COVENA", "Sourcing Transparency", "Review Integrity"],
    rating: 4.9,
    reviewCount: 100,
    priceRange: "$50-$200",
    beginnerFriendly: true,
    shippingSpeed: "2-4 days",
    verifiedLevel: "Gold"
}
```

### Changing Colors
Edit CSS variables in `styles.css`:

```css
:root {
    --charcoal: #1a1a1a;
    --gold: #d4af37;
    --cream: #f5f1e8;
    /* ... */
}
```

### Modifying Quiz Questions
Edit the quiz steps in `quiz.html` - each step is a `div` with class `quiz-step`.

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📱 Responsive Design

Fully responsive with breakpoints at:
- Desktop: 1200px+
- Tablet: 768px - 1199px
- Mobile: < 768px

## 🔒 Privacy & Data

This is a static demo with no backend:
- Quiz results stored in sessionStorage (cleared on browser close)
- No personal data collected
- No cookies used
- All data is client-side only

## 🎯 Demo Brand Data

**Wigs:**
- Luxe Locks (Premium, Gold)
- Crown Collective (Budget-friendly, Silver)
- Artisan Tresses (Luxury custom, Platinum)

**Lashes:**
- Flutter Lux (Faux-mink, Gold)
- Wink Studio (DIY extensions, Silver)

**Makeup:**
- Pure Canvas (Clean beauty, Gold)
- Heritage Hues (Inclusive shades, Gold)

## 💡 Tips

1. **Testing Filters:** Try different combinations on the marketplace page
2. **Quiz Flow:** Complete the quiz to see the matching algorithm in action
3. **Mobile View:** The site is fully responsive - test on mobile!
4. **Brand Profiles:** Click any brand card to see the full profile page

## 🚨 Troubleshooting

**Issue:** Site not loading on GitHub Pages
- **Solution:** Check that GitHub Pages is enabled in repository settings
- **Solution:** Ensure all files are in the root directory (not in a subfolder)

**Issue:** Quiz results not showing
- **Solution:** Complete all 5 quiz steps before clicking "Get My Matches"

**Issue:** Filters not working
- **Solution:** Ensure JavaScript is enabled in your browser

## 📞 Support

This is a demo website. For questions about implementation:
- Review the code comments in `script.js`
- Check the inline documentation in HTML files
- Examine the CSS structure in `styles.css`

## 📝 License

Demo project for portfolio/educational purposes. Feel free to use as a template.

## 🎉 Credits

Created as a modern luxury-tech demo showcasing:
- Clean, semantic HTML5
- Modular CSS with CSS variables
- Vanilla JavaScript (no frameworks)
- Mobile-first responsive design
- Accessible UI components

---

**Live Demo:** Once deployed to GitHub Pages, your site will be live at:
`https://[your-username].github.io/[repository-name]/`

Enjoy exploring ORDAE! ✨
