# NexaCore - Professional IT Consultancy Website

A modern, production-ready website built with React, Vite, and Tailwind CSS for NexaCore IT Consultancy Services. Features cutting-edge animations, professional design, and optimized performance.

## 🚀 Features

### Design & User Experience
- **Modern Professional Design** - Clean, contemporary IT consultancy aesthetic
- **Fully Responsive** - Optimized for all devices and screen sizes
- **Interactive Animations** - GSAP-powered smooth animations and transitions
- **Parallax Effects** - Engaging scroll-based parallax backgrounds
- **Glass Morphism** - Modern translucent card designs
- **Professional Theme** - Dark color scheme with blue/orange accents

### Sections & Content
- **Dynamic Navigation** - Sticky header with smooth scroll navigation
- **Hero Section** - Engaging landing with animated elements and CTAs
- **About Section** - Company story with animated statistics
- **Services Section** - Comprehensive IT services showcase
- **Portfolio Section** - Project showcase with filter functionality
- **Blog Section** - Latest insights and industry news
- **Team Section** - Professional team member profiles
- **Testimonials** - Client feedback with rotating testimonials
- **Contact Section** - Multi-office contact forms and information
- **Footer** - Comprehensive footer with newsletter, social links, and certifications

### Technical Features
- **React 19+** - Modern React with latest features
- **Vite 7+** - Lightning-fast build tool and dev server
- **Tailwind CSS 3+** - Utility-first CSS framework
- **GSAP Animations** - Professional-grade animations
- **Parallax scrolling** - Smooth scroll effects
- **CountUp animations** for statistics
- **Responsive design** - Mobile-first approach
- **SEO optimized** - Meta tags, structured data, and performance

## 🛠️ Tech Stack

### Core Technologies
- **React** 19.1.1 - Modern UI library with latest features
- **Vite** 7.1.2 - Next-generation frontend tooling
- **Tailwind CSS** 3.4.17 - Utility-first CSS framework

### Animation & Interaction
- **GSAP** 3.13.0 - Professional animation library
- **@gsap/react** 2.1.2 - React GSAP integration
- **ScrollTrigger** - Scroll-based animations
- **react-scroll-parallax** 3.4.5 - Parallax scrolling effects

### Routing & Navigation
- **React Router DOM** 7.8.2 - Client-side routing
- **Smooth scrolling** navigation

### UI Components & Icons
- **Lucide React** 0.543.0 - Beautiful, customizable icons
- **Custom components** - Reusable UI components

### Utilities & Extras
- **react-countup** 6.5.3 - Animated number counters
- **PostCSS** & **Autoprefixer** - CSS processing

### Development Tools
- **ESLint** 9.33.0 - Code linting and quality
- **TypeScript types** - Type definitions for development

## 📁 Project Structure

```
nexacore/
├── public/                 # Static assets
│   ├── fonts/             # Custom fonts (ProximaNova)
│   ├── images/            # Optimized images and graphics
│   └── videos/            # Video files
├── src/                   # Source code
│   ├── components/        # Reusable components
│   │   ├── NavBar.jsx     # Navigation component
│   │   └── Footer.jsx     # Footer component
│   ├── sections/          # Page sections
│   │   ├── HeroSection.jsx
│   │   ├── AboutSection.jsx
│   │   ├── ServicesSection.jsx
│   │   ├── PortfolioSection.jsx
│   │   ├── BlogSection.jsx
│   │   ├── TeamSection.jsx
│   │   ├── TestimonialsSection.jsx
│   │   └── ContactSection.jsx
│   ├── constants/         # Configuration & constants
│   ├── App.jsx            # Main app component
│   ├── main.jsx           # Entry point
│   └── index.css          # Global styles & Tailwind
├── eslint.config.js       # ESLint configuration
├── postcss.config.js      # PostCSS configuration
├── tailwind.config.js     # Tailwind configuration
├── vite.config.js         # Vite configuration (optimized)
└── package.json           # Dependencies and scripts
```

## 🚀 Getting Started

### Prerequisites
- **Node.js** 18+ 
- **npm** or **yarn** package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd nexacore
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5174`

### Available Scripts

```bash
# Development
npm run dev              # Start development server with host
npm run build           # Build for production
npm run build:analyze   # Build with bundle analysis
npm run preview         # Preview production build
npm run lint           # Run ESLint
npm run lint:fix       # Fix ESLint issues
npm run clean          # Clean build directory
npm run type-check     # TypeScript type checking
```

## 🎨 Customization

### Colors & Branding
The color scheme is defined in `src/index.css` with CSS custom properties:

```css
:root {
  --primary-blue: #007BFF;
  --primary-orange: #FF6B00;
  --text-dark: #171717;
  --text-light: #6B7280;
  /* Professional color palette */
}
```

### Content Updates
- **Company Information**: Update in respective section components
- **Images**: Replace files in `public/images/` directory
- **Services**: Modify `ServicesSection.jsx`
- **Team Members**: Update `TeamSection.jsx`
- **Portfolio Projects**: Modify `PortfolioSection.jsx`
- **Footer Content**: Update `Footer.jsx`

### Animations
GSAP animations are configured in each section component. Customize:
- **Timing**: Adjust `duration` and `delay` properties
- **Easing**: Modify `ease` properties
- **Triggers**: Update `ScrollTrigger` configurations

## 🚀 Production Deployment

### Build Optimization
The project includes production optimizations:
- **Code splitting** - Vendor, router, animations, UI chunks
- **Tree shaking** - Unused code elimination
- **Minification** - Terser with console/debugger removal
- **Asset optimization** - Image compression and lazy loading

### Build for Production
```bash
npm run build
```

### Deploy to Various Platforms

**Vercel (Recommended)**
```bash
npm install -g vercel
vercel --prod
```

**Netlify**
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

**Traditional Hosting**
Upload the contents of the `dist/` folder to your web server.

## 📊 Performance Optimizations

### Built-in Features
- **Vite optimization** - Fast HMR and optimized builds
- **Chunk splitting** - Separate vendor and feature bundles
- **Asset preloading** - Critical resources preloaded
- **Lazy loading** - Images and components loaded on demand
- **Modern JavaScript** - ES2015+ for better performance
- **CSS optimization** - PostCSS with Tailwind purging

### Performance Metrics (Target)
- **Lighthouse Score**: 95+
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **Time to Interactive**: < 3s

## 🔧 Configuration

### Environment Variables
Create `.env` file for custom configuration:

```env
VITE_APP_TITLE=NexaCore
VITE_API_BASE_URL=https://api.nexacore.com
VITE_CONTACT_EMAIL=contact@nexacore.com
VITE_ANALYTICS_ID=your-analytics-id
```

### Build Configuration
The `vite.config.js` includes:
- **Path aliases** - `@/`, `@components/`, `@sections/`
- **Asset handling** - WebP, AVIF support
- **Performance optimization** - Dependency pre-bundling
- **Development server** - Hot reload with host access

## 🔍 SEO & Analytics

### SEO Features
- **Meta tags** - Complete Open Graph and Twitter Card support
- **Structured data** - JSON-LD for search engines
- **Sitemap ready** - Clean URLs for indexing
- **Performance optimized** - Core Web Vitals compliance

### Analytics Integration
Ready for:
- Google Analytics 4
- Google Tag Manager
- Facebook Pixel
- Custom tracking events

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- **React Team** - For the amazing React framework
- **Vite Team** - For the lightning-fast build tool
- **Tailwind CSS** - For the utility-first CSS framework
- **GSAP** - For professional-grade animations
- **Lucide** - For beautiful, consistent icons

---

## 📞 Support

For support and questions:
- **Email**: hello@nexacore.com
- **Website**: [https://nexacore.com](https://nexacore.com)
- **Documentation**: Check component files for inline documentation

---

**Built with ❤️ for Professional IT Consultancy Services**

*Ready for production deployment with optimized performance and modern web standards.*

## 📦 Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Setup Instructions

1. **Clone or navigate to the project directory:**
   ```bash
   cd nexacore
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser and navigate to:**
   ```
   http://localhost:5173
   ```

## 🛠 Technologies Used

### Core Technologies
- **React 19.1.1** - Modern React with latest features
- **Vite 7.1.2** - Fast build tool and development server
- **Tailwind CSS 3.4.17** - Utility-first CSS framework

### Animation Libraries
- **GSAP 3.13.0** - Professional animation library
- **@gsap/react 2.1.2** - React-specific GSAP integration
- **Framer Motion** - React animation library
- **react-scroll-parallax** - Parallax scrolling effects
- **react-countup** - Animated number counters

### UI & Icons
- **Lucide React** - Beautiful, customizable icons
- **@heroicons/react** - Additional icon set

### Routing
- **React Router DOM** - Client-side routing

## 🎨 Color Scheme

### Primary Colors
- **Primary Blue:** #007BFF (Trust, professionalism)
- **Secondary Orange:** #FF6B00 (Innovation, energy)
- **Dark Blue:** #0056B3 (Depth, stability)
- **Dark Orange:** #E55A00 (Warmth, action)

### Neutral Colors
- **Dark Gray:** #1a202c (Text, backgrounds)
- **Light Gray:** #f8fafc (Backgrounds, cards)
- **White:** #ffffff (Clean backgrounds)

## 📱 Responsive Design

The website is fully responsive and optimized for:
- **Mobile devices** (320px and up)
- **Tablets** (768px and up)
- **Desktop** (1024px and up)
- **Large screens** (1440px and up)

## 🚀 Performance Optimizations

- **Lazy loading** for images
- **Code splitting** with React.lazy()
- **Optimized animations** with GSAP
- **Compressed assets** and images
- **Minimal bundle size** with Vite optimization

## 🔧 Customization

### Adding New Sections
1. Create a new component in `src/sections/`
2. Import and add to `App.jsx`
3. Add navigation link to `NavBar.jsx`

### Modifying Animations
- GSAP animations are in individual section components
- ScrollTrigger configurations can be adjusted in `useEffect` hooks
- Animation timing and easing can be customized

### Styling Changes
- Modify `tailwind.config.js` for theme customization
- Update color scheme in `index.css`
- Component-specific styles are in individual files

## 📈 SEO & Accessibility

### SEO Features
- Semantic HTML structure
- Meta tags and descriptions
- Proper heading hierarchy
- Alt texts for images

### Accessibility Features
- ARIA labels and roles
- Keyboard navigation support
- Focus management
- Screen reader compatibility

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## 📄 License

This project is created for NexaCore Consultancy Services. All rights reserved.

---

**Built with ❤️ using React, GSAP, and Tailwind CSS**+ Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
