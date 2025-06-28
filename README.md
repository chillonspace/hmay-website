# Great Wall Smart Panels Landing Page

A modern, mobile-first React landing page for Great Wall Smart Panels, the premium commercial smart display brand represented by TB Dynamic Sdn Bhd in Malaysia.

## Features

- 🎨 **Modern Design**: Clean, gradient-based design with glassmorphism effects
- 📱 **Mobile-First**: Responsive design optimized for mobile devices
- ⚡ **Smooth Animations**: Framer Motion animations throughout
- 🔧 **Built with**: React + Vite + Tailwind CSS + Framer Motion
- 📞 **WhatsApp Integration**: Direct WhatsApp contact buttons
- 🌟 **Professional**: Showcases product highlights, use cases, and company credibility

## Sections

1. **Hero Section** - Main headline, CTAs, and floating product mockup
2. **About the Brand** - Fortune 500 credibility and global presence
3. **Product Highlights** - 4 key products with detailed features
4. **Application Scenarios** - Use cases across different industries
5. **Why Choose TB Dynamic** - Local dealer advantages
6. **Final CTA** - Contact and company information

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

## Customization

### WhatsApp Number
Update the WhatsApp number in the `WhatsAppButton` component in `src/App.jsx`:
```javascript
href="https://wa.me/60123456789" // Replace with actual number
```

### Email Address
Update the email address in the Final CTA section:
```javascript
<span>hello@tbdynamic.com.my</span> // Replace with actual email
```

### Images
Replace placeholder images by:
1. Adding your images to the `public` folder
2. Updating the image sources in the components

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2024 TB Dynamic Sdn Bhd. All rights reserved. 