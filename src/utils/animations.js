// src/utils/animations.js
import { timerActions } from '../stores/ui.js';

/**
 * Start all interval-based animations and timers
 * @returns {Function} Cleanup function to stop all intervals
 */
export function startIntervals() {
    const cleanupFunctions = [];

    // Start urgency timer
    cleanupFunctions.push(timerActions.startUrgencyTimer());

    // Start scarcity updates
    cleanupFunctions.push(timerActions.startScarcityUpdates());

    // Start social proof cycle
    timerActions.startSocialProofCycle();

    // Return cleanup function
    return () => {
        cleanupFunctions.forEach(cleanup => cleanup());
    };
}

/**
 * Create floating particles in a container
 * @param {HTMLElement} container - Container element
 * @param {number} count - Number of particles to create
 */
export function createFloatingParticles(container, count = 50) {
    if (!container) return;

    for (let i = 0; i < count; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
      position: absolute;
      width: 4px;
      height: 4px;
      background: rgba(79, 172, 254, 0.6);
      border-radius: 50%;
      left: ${Math.random() * 100}%;
      animation: float ${Math.random() * 3 + 3}s infinite linear;
      animation-delay: ${Math.random() * 6}s;
    `;
        container.appendChild(particle);
    }
}

/**
 * Smooth scroll to element with offset
 * @param {string} selector - CSS selector or element ID
 * @param {number} offset - Offset from top in pixels
 */
export function smoothScrollTo(selector, offset = 80) {
    const element = selector.startsWith('#')
        ? document.getElementById(selector.slice(1))
        : document.querySelector(selector);

    if (element) {
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
}

/**
 * Intersection Observer for scroll animations
 * @param {string} selector - CSS selector for elements to observe
 * @param {Object} options - Intersection Observer options
 */
export function createScrollObserver(selector, options = {}) {
    const defaultOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
        ...options
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, defaultOptions);

    // Observe all matching elements
    document.querySelectorAll(selector).forEach(el => {
        // Set initial state
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease';

        observer.observe(el);
    });

    return observer;
}

/**
 * Typewriter effect for text
 * @param {HTMLElement} element - Target element
 * @param {string} text - Text to type
 * @param {number} speed - Typing speed in milliseconds
 */
export function typewriterEffect(element, text, speed = 50) {
    if (!element || !text) return;

    element.textContent = '';
    let i = 0;

    const timer = setInterval(() => {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
        } else {
            clearInterval(timer);
        }
    }, speed);

    return () => clearInterval(timer);
}

/**
 * Parallax scroll effect
 * @param {string} selector - CSS selector for parallax elements
 * @param {number} speed - Parallax speed multiplier
 */
export function initParallax(selector, speed = 0.5) {
    const elements = document.querySelectorAll(selector);

    function updateParallax() {
        const scrollY = window.pageYOffset;

        elements.forEach(element => {
            const rect = element.getBoundingClientRect();
            const elementTop = rect.top + scrollY;
            const elementHeight = rect.height;
            const windowHeight = window.innerHeight;

            // Only apply parallax if element is in viewport
            if (scrollY + windowHeight > elementTop && scrollY < elementTop + elementHeight) {
                const yPos = -(scrollY - elementTop) * speed;
                element.style.transform = `translateY(${yPos}px)`;
            }
        });
    }

    // Throttled scroll listener
    let ticking = false;
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateParallax);
            ticking = true;
            setTimeout(() => { ticking = false; }, 16); // ~60fps
        }
    }

    window.addEventListener('scroll', requestTick);
    updateParallax(); // Initial call

    return () => window.removeEventListener('scroll', requestTick);
}

/**
 * Count up animation for numbers
 * @param {HTMLElement} element - Target element
 * @param {number} target - Target number
 * @param {number} duration - Animation duration in milliseconds
 * @param {Function} formatter - Number formatting function
 */
export function animateCountUp(element, target, duration = 2000, formatter = (n) => n) {
    if (!element || isNaN(target)) return;

    const start = 0;
    const increment = target / (duration / 16); // 60fps
    let current = start;

    const timer = setInterval(() => {
        current += increment;

        if (current >= target) {
            current = target;
            clearInterval(timer);
        }

        element.textContent = formatter(Math.floor(current));
    }, 16);

    return () => clearInterval(timer);
}

/**
 * Stagger animation for multiple elements
 * @param {string} selector - CSS selector for elements
 * @param {number} delay - Delay between each element animation
 * @param {string} animationClass - CSS class to add for animation
 */
export function staggerAnimation(selector, delay = 100, animationClass = 'animate-in') {
    const elements = document.querySelectorAll(selector);

    elements.forEach((element, index) => {
        setTimeout(() => {
            element.classList.add(animationClass);
        }, index * delay);
    });
}

/**
 * Morphing loader animation
 * @param {HTMLElement} element - Target element
 * @param {Array} shapes - Array of CSS clip-path values
 * @param {number} duration - Duration for each shape
 */
export function morphLoader(element, shapes, duration = 800) {
    if (!element || !shapes.length) return;

    let currentIndex = 0;

    const timer = setInterval(() => {
        element.style.clipPath = shapes[currentIndex];
        currentIndex = (currentIndex + 1) % shapes.length;
    }, duration);

    return () => clearInterval(timer);
}

/**
 * Magnetic button effect
 * @param {string} selector - CSS selector for buttons
 * @param {number} strength - Magnetic effect strength
 */
export function initMagneticButtons(selector, strength = 0.3) {
    const buttons = document.querySelectorAll(selector);

    buttons.forEach(button => {
        button.addEventListener('mousemove', (e) => {
            const rect = button.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            button.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
        });

        button.addEventListener('mouseleave', () => {
            button.style.transform = 'translate(0, 0)';
        });
    });
}

/**
 * Text reveal animation
 * @param {HTMLElement} element - Target element
 * @param {number} delay - Delay between each character
 */
export function textRevealAnimation(element, delay = 50) {
    if (!element) return;

    const text = element.textContent;
    const characters = text.split('');

    element.innerHTML = characters
        .map((char, index) =>
            `<span style="opacity: 0; animation-delay: ${index * delay}ms">${char === ' ' ? '&nbsp;' : char}</span>`
        )
        .join('');

    // Trigger animation
    setTimeout(() => {
        element.querySelectorAll('span').forEach(span => {
            span.style.animation = 'fadeInUp 0.6s ease forwards';
        });
    }, 100);
}

/**
 * CSS Animations definitions (to be added to global styles)
 */
export const cssAnimations = `
  @keyframes float {
    0% { transform: translateY(100vh) rotate(0deg); opacity: 0; }
    10% { opacity: 1; }
    90% { opacity: 1; }
    100% { transform: translateY(-100px) rotate(360deg); opacity: 0; }
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.05); }
  }

  @keyframes glow {
    from { box-shadow: 0 0 5px rgba(79, 172, 254, 0.3); }
    to { box-shadow: 0 0 20px rgba(79, 172, 254, 0.6); }
  }

  @keyframes slideInRight {
    from {
      transform: translateX(100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @keyframes slideInLeft {
    from {
      transform: translateX(-100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

  .animate-in {
    animation: fadeInUp 0.6s ease forwards;
  }

  .animate-pulse {
    animation: pulse 2s infinite;
  }

  .animate-glow {
    animation: glow 2s infinite alternate;
  }
`;