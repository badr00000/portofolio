# Badr Islam Ibrahim Elewa - Portfolio Website

🚀 **Professional portfolio showcasing expertise in Data Engineering, Data Science, and AI/ML Engineering**

## 🎯 Overview

This is a modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. The site features a dark theme with crimson red accents (#dc143c) and showcases professional experience, projects, and technical skills.

## ✨ Features

- **Responsive Design**: Mobile-first, responsive layout
- **Dark Theme**: Professional black background with crimson red (#dc143c) accents
- **Smooth Animations**: Advanced scroll-triggered animations and hover effects
- **Interactive Elements**: Enhanced button interactions and card hover effects
- **Professional Sections**:
  - Hero section with unique selling proposition
  - About me with core expertise
  - Skills and technologies breakdown
  - Professional experience timeline
  - Projects portfolio with GitHub links
  - Contact information with social links

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS v4.0 (alpha)
- **Build Tool**: Vite
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended)

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation & Development

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd badr-portfolio
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
   - Navigate to `http://localhost:5173`

### Build for Production

1. **Create production build**
   ```bash
   npm run build
   ```

2. **Preview production build**
   ```bash
   npm run preview
   ```

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

3. **Follow the prompts**
   - Select your project settings
   - Vercel will automatically detect Vite configuration

### Deploy to Netlify

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Upload the `dist` folder to Netlify**
   - Or connect your GitHub repository to Netlify

### Deploy to GitHub Pages

1. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Add to package.json scripts**
   ```json
   {
     "scripts": {
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. **Build and deploy**
   ```bash
   npm run build
   npm run deploy
   ```

## 📁 Project Structure

```
├── public/
│   └── Badr_Islam_Ibrahim_Elewa_Resume.pdf    # Resume file
├── src/
│   ├── components/ui/                          # Reusable UI components
│   └── styles/globals.css                      # Global styles and animations
├── App.tsx                                     # Main application component
├── index.html                                  # HTML template
├── package.json                                # Project dependencies
├── vite.config.ts                             # Vite configuration
├── vercel.json                                # Vercel deployment config
└── README.md                                  # This file
```

## 🎨 Customization

### Colors
The main theme colors are defined in `styles/globals.css`:
- **Primary**: #dc143c (Crimson Red)
- **Background**: #000000 (Black)
- **Cards**: #0a0a0a (Dark Gray)

### Content
Update personal information in `App.tsx`:
- Contact details
- Project information
- Experience timeline
- Skills and technologies

### Resume
Replace `/public/Badr_Islam_Ibrahim_Elewa_Resume.pdf` with your own resume file.

## 🔧 Configuration Files

- **vite.config.ts**: Vite build configuration
- **vercel.json**: Vercel deployment settings
- **tsconfig.json**: TypeScript configuration
- **package.json**: Dependencies and scripts

## 🚀 Performance Features

- **Optimized Images**: Automatic image optimization
- **Code Splitting**: Automatic code splitting with Vite
- **CSS Optimization**: Tailwind CSS purging in production
- **Lazy Loading**: Components load as needed
- **Smooth Animations**: Hardware-accelerated CSS animations

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

MIT License - feel free to use this portfolio template for your own projects.

## 📞 Contact

- **Email**: badr.islam.elewa@gmail.com
- **LinkedIn**: [Badr Eslam](https://www.linkedin.com/in/badr-eslam-4881b12a4)
- **GitHub**: [badr00000](https://github.com/badr00000?tab=repositories)
- **WhatsApp**: +20 108 037 1123

---

Built with ❤️ using React, TypeScript, and Tailwind CSS