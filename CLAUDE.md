# Sigma PPF Website - Project Documentation

## Project Overview

**Project:** Sigma PPF Portfolio Website
**Brand:** Sigma PPF - Premium Automotive Paint Protection Film
**Tagline:** "THE INVISIBLE ARMOUR YOUR CAR DESERVES"
**Live URL:** https://sigmappf-website.vercel.app
**Repository:** /Users/akash/sigmappf/sigmappf-website

## Tech Stack

- **Framework:** Next.js 16.1.6 (App Router)
- **Styling:** Tailwind CSS v4
- **Icons:** Lucide React
- **Forms:** React Hook Form + Zod validation
- **Deployment:** Vercel (Mumbai region - bom1)
- **Database:** Google Sheets (e-warranty registrations)
- **Image Storage:** Cloudinary (user-uploaded car images)

## Design System

### Colors
- **Primary:** `#D32F2F` (Ferrari Red)
- **Primary 600:** `#C62828`
- **Primary 700:** `#B71C1C`
- **Background:** `#0a0a0a` (Dark)
- **Dark 50:** `#1a1a1a`
- **Dark 100:** `#2a2a2a`
- **Text:** White on dark backgrounds

### Typography
- **Font:** Inter (Google Fonts)
- **Weights:** 300-900

### CSS Classes
- `section-padding` - Responsive section padding
- `container-custom` - Max-width container with padding
- `btn-primary` - Primary button with gradient
- `btn-outline` - Outline button style
- `form-input` - Form input styling
- `glass-card` - Glassmorphism card effect
- `gradient-text` - Red gradient text
- `warranty-badge` - 7-year warranty badge

## Project Structure

```
sigmappf-website/
├── app/
│   ├── layout.tsx              # Root layout with Header/Footer
│   ├── page.tsx                # Home page
│   ├── globals.css             # Tailwind + custom styles
│   ├── about/page.tsx          # About page
│   ├── contact/page.tsx        # Contact page
│   ├── e-warranty/page.tsx     # Warranty registration form
│   ├── products/
│   │   ├── page.tsx            # Products overview
│   │   └── [category]/page.tsx # Individual product pages
│   └── api/
│       └── warranty/route.ts   # Form submission endpoint
├── components/
│   ├── layout/                 # Header, Footer
│   ├── ui/                     # Button, Card, Input, FileUpload, Placeholder
│   ├── sections/               # Hero, Features, Products, LayerDiagram, CTA
│   └── forms/                  # WarrantyForm, ContactForm
├── lib/
│   ├── assets.ts               # Asset paths & product data
│   ├── google-sheets.ts        # Google Sheets API client
│   ├── cloudinary.ts           # Image upload utility
│   └── validations.ts          # Zod schemas
└── public/
    └── assets/                 # Product images & videos
        ├── ppf/                # PPF variant images
        ├── window-films/       # Window film images
        ├── precut/             # Precut edition videos
        └── brand/              # Logo, catalogue
```

## Pages & Routes

| Route | Description |
|-------|-------------|
| `/` | Home - Hero, Features, Products, Protection Options, Layer Diagram, CTA |
| `/about` | Company story, mission/vision, why choose us |
| `/products` | All products overview |
| `/products/ultra-clear` | Ultra Clear PPF details |
| `/products/gloss-black` | Gloss Black PPF details |
| `/products/matte` | Matte PPF details |
| `/products/satin-matte` | Satin Matte PPF details |
| `/products/colour-series` | Colour Series PPF details |
| `/products/window-films` | Window Films details |
| `/products/precut-edition` | Precut Edition details |
| `/e-warranty` | Warranty registration (10-field form) |
| `/contact` | Contact form & company info |
| `/api/warranty` | POST endpoint for warranty submissions |

## E-Warranty Form Fields

1. Customer Name (text, required)
2. Phone Number (tel, required)
3. Email Address (email, required)
4. Sigma Roll Unique Code (text, required)
5. PPF Category (dropdown, required)
6. Car Image with PPF Roll (file upload, required, max 10MB)
7. Detailer/Studio Name (text, required)
8. Detailer Mobile Number (tel, required)
9. Location (text, required)
10. Message (textarea, optional)

## Environment Variables

Required for production:
```
GOOGLE_SERVICE_ACCOUNT_EMAIL=your-service-account@project.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
GOOGLE_SHEET_ID=your-spreadsheet-id
CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=your-api-key
CLOUDINARY_API_SECRET=your-api-secret
```

## Product Data

### PPF Variants (7-Year Warranty)
- **Ultra Clear:** Crystal clear, invisible protection
- **Gloss Black:** Deep black finish with protection
- **Matte:** Sophisticated matte finish
- **Satin Matte:** Balance between gloss and matte
- **Colour Series:** Vibrant color options (Lexus, Seltos examples)

### Specifications
- Exterior Thickness: 195 Micron
- Interior Thickness: 140 Micron
- 5-Layer Construction: Top Coat, Clear Coat, TPU Film, Adhesive, Liner

### Other Products
- **Sigma Nano Ceramic Window Films:** Heat rejection, UV protection
- **Precut Edition:** DIY kits for interior, exterior, window films

## Contact Information

- **Email:** sigmappf@gmail.com
- **Address:** Hyderabad, India
- **Instagram:** @sigmappf

## Development Commands

```bash
npm run dev      # Start development server (localhost:3000)
npm run build    # Production build
npm run start    # Start production server
vercel           # Deploy to Vercel
vercel --prod    # Deploy to production
```

## Key Files to Know

| File | Purpose |
|------|---------|
| `lib/assets.ts` | All product data, images, features, contact info |
| `lib/validations.ts` | Zod schemas for form validation |
| `components/sections/` | Reusable page sections |
| `app/products/[category]/page.tsx` | Dynamic product pages |
| `app/api/warranty/route.ts` | Form submission handler |

## Notes

- **Mock Mode:** API works without credentials for testing (returns success)
- **Logo:** Placeholder used - actual logo to be provided
- **Videos:** Using precut edition videos for hero background
- **Caching:** Assets cached for 1 year (immutable) via Vercel headers
