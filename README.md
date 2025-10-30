# Vaultin Landing Page

A modern, interactive landing page for content monetization built with Next.js, Tailwind CSS, and Framer Motion.

## ✨ Features

- 🎭 **Smooth Animations** - Framer Motion powered animations
- 🖱️ **Interactive Elements** - Mouse parallax effects and hover animations
- 🎨 **Modern Design** - Clean, professional UI with gradient cards
- 📱 **Responsive Layout** - Works perfectly on all devices
- ⚡ **Performance Optimized** - Efficient animations and smooth interactions
- 🔒 **Interactive Cards** - Locked/unlocked content with blur effects

## 🏗️ Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.js            # Root layout with metadata
│   └── page.js              # Main page component
├── components/               # Reusable UI components
│   ├── Header/              # Animated navigation header
│   ├── HeroSection/         # Interactive hero with parallax cards
│   ├── LanguageSelector/    # Animated language switcher
│   └── index.js             # Component exports
└── public/                   # Static assets
```

## 🎯 Components

### Header
- Smooth slide-in animation from top
- Interactive logo with rotation effects
- Hover animations on navigation items
- Responsive design with mobile support

### HeroSection
- **Main Headline** - Staggered text animations
- **Interactive Cards** - 6 floating cards with parallax effects
- **Mouse Tracking** - Cards respond to mouse movement
- **Blur Effects** - Cards blur/unblur on hover
- **CTA Button** - Animated button with hover effects
- **Tagline** - Interactive padlock icon with spring animations

### LanguageSelector
- Slide-in animation from right
- Hover and tap animations
- Fixed position for easy access

## 🚀 Interactive Features

### Parallax Effects
- Cards move based on mouse position
- Different intensity levels for depth
- Smooth, performant animations

### Card Interactions
- **Locked Cards**: Show padlock, blur on hover
- **Unlocked Cards**: Show unlock icon, blur on hover
- **Close Buttons**: Interactive × buttons on each card
- **Hover Effects**: Scale and rotation animations

### Animation Timeline
1. **0.2s** - Logo appears
2. **0.4s** - Main headline starts
3. **0.6s-1.0s** - Text slides in from sides
4. **1.2s** - CTA button appears
5. **1.4s** - Tagline appears
6. **1.6s** - Language selector slides in

## 🛠️ Tech Stack

- **Next.js 15** - React framework with App Router
- **Tailwind CSS 4** - Utility-first CSS framework
- **Framer Motion** - Production-ready motion library
- **React 19** - Latest React with concurrent features

## 🎨 Design System

### Colors
- **Primary**: Green (#10B981) for CTA buttons
- **Background**: Light gray (#F9FAFB) for modern feel
- **Text**: Black (#000000) for high contrast
- **Accents**: Various gradients for interactive cards

### Typography
- **Headlines**: Extra bold (900) for impact
- **Body**: Medium (500) for readability
- **Font**: Inter system font stack

### Animations
- **Spring Physics**: Natural, bouncy movements
- **Staggered**: Sequential element appearances
- **Hover States**: Interactive feedback
- **Performance**: 60fps smooth animations

## 🚀 Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run development server**:
   ```bash
   npm run dev
   ```

3. **Open** [http://localhost:3000](http://localhost:3000) in your browser

## 🔧 Development

### Adding New Sections
1. Create component in `src/components/`
2. Import in `src/components/index.js`
3. Add to main page with proper z-index

### Animation Guidelines
- Use `motion.div` for animated elements
- Implement `whileHover` and `whileTap` for interactions
- Use `initial` and `animate` for entrance animations
- Keep animations under 300ms for responsiveness

### Performance Tips
- Use `useCallback` for event handlers
- Implement proper cleanup in `useEffect`
- Use `transform` properties for smooth animations
- Avoid animating layout-affecting properties

## 📱 Responsive Design

- **Mobile**: Stacked layout with touch-friendly interactions
- **Tablet**: Optimized spacing and card positioning
- **Desktop**: Full parallax effects and hover states

## 🎭 Animation Examples

```jsx
// Entrance animation
<motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>

// Hover effect
<motion.button
  whileHover={{ scale: 1.05, y: -2 }}
  whileTap={{ scale: 0.95 }}
>

// Spring animation
<motion.div
  whileHover={{ rotate: 45 }}
  transition={{ type: "spring", stiffness: 300 }}
>
```

## 🔮 Future Enhancements

- [ ] Add more interactive sections
- [ ] Implement dark mode toggle
- [ ] Add scroll-triggered animations
- [ ] Create mobile-specific interactions
- [ ] Add loading states and transitions
