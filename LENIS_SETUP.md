# Lenis Smooth Scrolling Setup

Your website now has super smooth scrolling powered by Lenis! 🚀

## What's Been Implemented

### 1. LenisProvider Component
- Automatically initializes Lenis with optimized settings
- Provides smooth scrolling across your entire website
- Handles cleanup and performance optimization

### 2. Custom Hooks
- `useLenis()` - Access the Lenis instance directly
- `useSmoothScroll()` - Easy-to-use smooth scrolling functions

### 3. CSS Optimizations
- Added Lenis-specific CSS classes for optimal performance
- Ensures smooth scrolling works perfectly with your existing styles

## How to Use

### Basic Smooth Scrolling
The smooth scrolling is automatically active across your entire website. No additional setup needed!

### Advanced Usage with Hooks

```jsx
import { useSmoothScroll } from '../hooks/useLenis';

function MyComponent() {
  const { scrollTo, scrollToElement } = useSmoothScroll();

  const handleScrollToTop = () => {
    scrollTo(0, { duration: 2 });
  };

  const handleScrollToElement = () => {
    const element = document.getElementById('my-section');
    scrollToElement(element, { 
      offset: -100, 
      duration: 1.5 
    });
  };

  return (
    <div>
      <button onClick={handleScrollToTop}>Scroll to Top</button>
      <button onClick={handleScrollToElement}>Scroll to Section</button>
    </div>
  );
}
```

### Lenis Configuration Options

The current configuration includes:
- **Duration**: 1.2 seconds for smooth transitions
- **Easing**: Custom easing function for natural movement
- **Touch**: Optimized for mobile devices
- **Performance**: RAF loop for smooth 60fps scrolling

### Customizing Lenis Settings

To modify Lenis settings, edit `src/components/LenisProvider/LenisProvider.jsx`:

```jsx
lenisRef.current = new Lenis({
  duration: 1.2,                    // Scroll animation duration
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Easing function
  direction: 'vertical',            // Scroll direction
  gestureDirection: 'vertical',     // Gesture direction
  smooth: true,                     // Enable smooth scrolling
  smoothTouch: false,               // Disable smooth scrolling on touch devices
  touchMultiplier: 2,              // Touch sensitivity multiplier
  infinite: false,                  // Infinite scrolling
  lerp: 0.1,                       // Linear interpolation factor
});
```

## Performance Features

- **RAF Loop**: Uses RequestAnimationFrame for optimal performance
- **Touch Optimization**: Disabled smooth scrolling on touch devices for better UX
- **Memory Management**: Proper cleanup when components unmount
- **Global Access**: Lenis instance available globally for advanced use cases

## Browser Compatibility

Lenis works on all modern browsers and automatically falls back to native scrolling when needed.

## Troubleshooting

If you experience any issues:
1. Check the browser console for errors
2. Ensure Lenis is properly imported
3. Verify the LenisProvider is wrapping your app in layout.js

Your website should now have buttery smooth scrolling! 🎉
