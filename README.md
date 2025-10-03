# Anyanwu Franklin - Portfolio Website

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS. Features a comprehensive showcase of web development projects, services, and professional information with dark/light theme support.

## 🚀 Live Demo

[View Live Site](https://your-vercel-url.vercel.app)

## ✨ Features

### Core Features
- **Responsive Design** - Optimized for all devices (mobile, tablet, desktop)
- **Dark/Light Theme** - Toggle between themes with smooth transitions
- **Interactive Animations** - Smooth Framer Motion animations without layout shift
- **3D Background** - Vanta.js animated network background
- **Contact Form** - EmailJS integration for direct messaging
- **Newsletter Signup** - Email subscription functionality
- **Project Showcase** - Interactive portfolio with case studies
- **Professional CV** - Downloadable resume section

### Technical Features
- **Modern Stack** - React 18, Vite, Tailwind CSS
- **Performance Optimized** - Code splitting, lazy loading, optimized images
- **SEO Friendly** - Meta tags, semantic HTML, proper structure
- **Accessibility** - WCAG compliant, keyboard navigation
- **PWA Ready** - Service worker, offline capabilities
- **Type Safety** - PropTypes validation

### Interactive Elements
- **Command Palette** - Quick navigation (⌘K)
- **Easter Eggs** - Developer tools, Konami code, console commands
- **WhatsApp Integration** - Direct messaging widget
- **Scroll Progress** - Visual page progress indicator
- **Theme Persistence** - Remembers user preference

## 🛠️ Tech Stack

### Frontend
- **React 18** - Component-based UI library
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Router** - Client-side routing
- **React Hook Form** - Form handling and validation

### 3D & Animations
- **Vanta.js** - 3D animated backgrounds
- **Three.js** - 3D graphics library
- **React Three Fiber** - React renderer for Three.js

### Integrations
- **EmailJS** - Email service for contact forms
- **Lucide React** - Modern icon library
- **React Intersection Observer** - Scroll-based animations

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixes

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── About.jsx       # About section
│   ├── Contact.jsx     # Contact form
│   ├── Footer.jsx      # Site footer
│   ├── Hero.jsx        # Landing section
│   ├── Navbar.jsx      # Navigation
│   ├── Services.jsx    # Services showcase
│   ├── Work.jsx        # Portfolio projects
│   └── ...
├── pages/              # Route components
│   ├── AboutPage.jsx   # About page
│   ├── ContactPage.jsx # Contact page
│   ├── PortfolioPage.jsx # Portfolio page
│   └── ...
├── data/               # Static data
│   └── data.jsx        # Projects and content
├── assets/             # Images and media
├── utils/              # Helper functions
└── styles/             # Global styles
```

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/DevHubFusionX/Frank.tech.git
   cd Frank.tech
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Fill in your EmailJS credentials:
   ```env
   VITE_REACT_APP_EMAILJS_SERVICE_ID=your_service_id
   VITE_REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
   VITE_REACT_APP_EMAILJS_USER_ID=your_user_id
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open browser**
   Navigate to `http://localhost:5173`

## 📧 EmailJS Setup

1. Create account at [EmailJS](https://www.emailjs.com/)
2. Create email service (Gmail, Outlook, etc.)
3. Create email template
4. Get service ID, template ID, and public key
5. Add credentials to environment variables

### Email Template Variables
- `{{from_name}}` - Sender name
- `{{from_email}}` - Sender email
- `{{message}}` - Message content
- `{{to_name}}` - Recipient name

## 🎨 Customization

### Theme Colors
Edit `src/theme.css` to customize colors:
```css
:root {
  --color-primary: #4080ff;
  --color-text-primary: #1a1a1a;
  --color-bg-primary: #ffffff;
}
```

### Project Data
Update `src/data/data.jsx` to add your projects:
```javascript
export const projects = [
  {
    title: "Project Name",
    description: "Project description",
    image: projectImage,
    tech: ["React", "Node.js"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/username/repo"
  }
]
```

### Personal Information
Update contact details in:
- `src/components/Contact.jsx`
- `src/components/Footer.jsx`
- `src/components/WhatsAppChat.jsx`

## 🚀 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically on push

### Netlify
1. Build the project: `npm run build`
2. Upload `dist` folder to Netlify
3. Add environment variables in site settings
4. Configure redirects for SPA routing

### Environment Variables for Production
Add these in your hosting platform:
```
VITE_REACT_APP_EMAILJS_SERVICE_ID
VITE_REACT_APP_EMAILJS_TEMPLATE_ID
VITE_REACT_APP_EMAILJS_PUBLIC_KEY
VITE_REACT_APP_EMAILJS_USER_ID
```

## 📱 Features Breakdown

### Responsive Design
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Touch-friendly interactions
- Optimized typography scaling

### Performance Optimizations
- Image optimization and lazy loading
- Code splitting with React.lazy()
- Minimal bundle size
- Efficient re-renders with React.memo()

### Accessibility
- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Screen reader compatibility
- Color contrast compliance

### SEO Features
- Meta tags for social sharing
- Structured data markup
- Sitemap generation
- Fast loading times
- Mobile-friendly design

## 🤝 Contributing

1. Fork the repository
2. Create feature branch: `git checkout -b feature/new-feature`
3. Commit changes: `git commit -am 'Add new feature'`
4. Push to branch: `git push origin feature/new-feature`
5. Submit pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Anyanwu Franklin**
- Portfolio: [frank.tech](https://your-domain.com)
- GitHub: [@DevHubFusionX](https://github.com/DevHubFusionX)
- Twitter: [@DevHubFusionX](https://x.com/DevHubFusionX)
- Email: anyanwufranklin@gmail.com

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - UI library
- [Vite](https://vitejs.dev/) - Build tool
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Vanta.js](https://www.vantajs.com/) - 3D backgrounds
- [EmailJS](https://www.emailjs.com/) - Email service
- [Lucide](https://lucide.dev/) - Icon library

## 📊 Project Stats

- **Lines of Code**: ~5,000+
- **Components**: 25+
- **Pages**: 8
- **Build Size**: ~500KB (gzipped)
- **Lighthouse Score**: 98/100
- **Load Time**: <2s

---

⭐ Star this repository if you found it helpful!