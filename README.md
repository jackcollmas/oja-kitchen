# ỌJÀ KITCHEN (Ọjà • The Ancestral Marketplace)
### Contemporary Nigerian Gastronomy & Fine Dining Web Experience

![Michelin Aesthetic Banner](https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop)

A sensory, high-performance web experience crafted for **Ọjà Kitchen**, a contemporary fine-dining Nigerian restaurant operating across Victoria Island, Lagos, and Mayfair, London. Designed to evoke hunger and celebrate the royal heritage of West African open-fire gastronomy with zero compromises on performance, accessibility, or mobile responsiveness.

---

## 🍽️ Project Highlights & Features

- **Sensory Scroll-Driven Experience**: An interactive visual stage showcasing signature dishes (*Smoked Suya, Grand Cru Firewood Jollof, Slow-Braised Oxtail Egusi, and River Catfish Pepper Broth*) that transitions smoothly as visitors scroll.
- **Interactive À La Carte Showcase**: Category-based menu exploration (*Grand Mains & Pots, Small Chops & Starters, Heritage Libations*) featuring left-aligned dish photography, price leaders, and dish notes.
- **Dish Inspection Lightbox (`DishModal`)**: Interactive preview modal displaying rich palate notes, ingredients, and instant table booking integration.
- **Custom Bespoke Luxury Calendar (`CustomDatePicker`)**: Custom dark-themed calendar popover that matches the brand’s warm terracotta and amber design system with minimum date constraints and real-time validation.
- **Serverless Table Reservation System**: Direct connection to **Web3Forms API** transmitting guest counts, booking dates, seating times, and dietary preferences directly to management.
- **Mobile-First Luxury Architecture**: Zero layout shift, no horizontal overflow, and tailored viewport scaling across mobile, tablet, and ultra-wide screens.
- **Vercel Edge-Optimized**: SPA rewrites and edge cache headers pre-configured in `vercel.json` for lightning-fast loads.

---

## 🛠️ Technology Stack

| Layer | Technologies Used |
|---|---|
| **Core Framework** | React 19, JavaScript (ES6+ Modules) |
| **Build & Tooling** | Vite 8, Fast HMR, ESLint |
| **Design & Architecture** | Vanilla CSS3, CSS Custom Properties Design Tokens (`variables.css`), CSS Grid & Flexbox, Glassmorphism Backdrop Blurs |
| **Typography** | Google Fonts (`Cinzel Decorative`, `Playfair Display`, `Plus Jakarta Sans`) |
| **Forms & Serverless** | Web3Forms API, Environment Variable Config (`import.meta.env`) |
| **Deployment Target** | Vercel (Edge Network) |

---

## 🎨 Design System (`variables.css`)

Zero hardcoded CSS values. The design tokens mirror West African culinary warmth:
- **Primary Spices**: Chili terracotta, smoked paprika (`#e04f16`, `#c2380d`)
- **Accents**: Palm oil amber, plantain gold (`#facc15`, `#eab308`)
- **Herbal Tones**: Scent leaf & ugwu green (`#1b7a43`)
- **Surfaces**: Charcoal ebony slate, dark glass (`#0f0d0b`, `#181512`)

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/jackcollmas/oja-kitchen.git
cd oja-kitchen
```

### 2. Install dependencies
```bash
npm install
```

### 3. Configure Environment Variables
Create a `.env` file in the root directory:
```env
VITE_WEB3FORMS_ACCESS_KEY=your_web3forms_access_key_here
```

### 4. Run development server
```bash
npm run dev
```

### 5. Build for production
```bash
npm run build
```

---

## 🌐 Deploying to Vercel

1. Push your code to GitHub.
2. Import the project into your [Vercel Dashboard](https://vercel.com).
3. Under **Project Settings → Environment Variables**, add:
   - `VITE_WEB3FORMS_ACCESS_KEY` = your access key
4. Deploy! Rewrites and caching are handled automatically by [`vercel.json`](./vercel.json).

---

## 👨‍🍳 Portfolio Attribution
Built with pride for high-end hospitality client portfolios. Demonstrates modern frontend architecture, scroll-driven visual storytelling, responsive design systems, and seamless third-party API integration.
