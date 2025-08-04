// src/stores/ui.js
import { writable, readable, derived } from 'svelte/store';

// UI state for popups and widgets
export const showSocialProof = writable(false);
export const calculatorVisible = writable(false);
export const currentScarcityCount = writable(23);
export const urgencyTimerText = writable('');

// Current social proof message
export const currentSocialMessage = writable('');

// Form states
export const formData = writable({
    email: '',
    businessName: '',
    phone: ''
});

export const isSubmitting = writable(false);

// Calculator values
export const currentSalary = writable(3000);

// Derived calculations (automatically update when salary changes)
export const monthlySavings = derived(
    currentSalary,
    ($currentSalary) => $currentSalary - 97
);

export const annualSavings = derived(
    monthlySavings,
    ($monthlySavings) => $monthlySavings * 12
);

export const roi = derived(
    monthlySavings,
    ($monthlySavings) => Math.round(($monthlySavings / 97) * 100)
);

// Theme and UI preferences
export const theme = writable('dark');
export const reducedMotion = writable(false);

// Navigation state
export const activeSection = writable('hero');
export const mobileMenuOpen = writable(false);

// Analytics and tracking
export const pageViews = writable(0);
export const timeOnPage = writable(0);
export const userInteractions = writable([]);

// Device and viewport information
export const viewport = writable({
    width: 0,
    height: 0,
    isMobile: false,
    isTablet: false,
    isDesktop: false
});

// Performance metrics
export const loadingStates = writable({
    hero: false,
    features: false,
    calculator: false,
    form: false
});

// A11y (Accessibility) states
export const screenReader = writable(false);
export const highContrast = writable(false);
export const fontSize = writable('medium'); // 'small', 'medium', 'large'

// Error handling
export const errors = writable([]);
export const notifications = writable([]);

// Social proof data
export const socialProofData = readable([
    {
        id: 1,
        message: "🎉 Sarah from Denver just got her Revenue Robot setup!",
        location: "Denver, CO",
        timestamp: new Date(),
        type: "signup"
    },
    {
        id: 2,
        message: "💰 Mike's Restaurant increased bookings by 47% this week!",
        location: "Miami, FL",
        timestamp: new Date(),
        type: "success"
    },
    {
        id: 3,
        message: "⚡ Jessica's Revenue Robot generated 23 leads yesterday!",
        location: "Austin, TX",
        timestamp: new Date(),
        type: "leads"
    },
    {
        id: 4,
        message: "🚀 Tom's Auto Shop booked 15 appointments while he slept!",
        location: "Phoenix, AZ",
        timestamp: new Date(),
        type: "booking"
    },
    {
        id: 5,
        message: "📈 Lisa's boutique saw 31% more sales since setup!",
        location: "Seattle, WA",
        timestamp: new Date(),
        type: "sales"
    },
    {
        id: 6,
        message: "🔥 David's gym signed 12 new members via chatbot today!",
        location: "Chicago, IL",
        timestamp: new Date(),
        type: "conversion"
    }
]);

// Utility functions for store management
export const uiActions = {
    // Social proof actions
    showRandomSocialProof() {
        socialProofData.subscribe(messages => {
            const randomMessage = messages[Math.floor(Math.random() * messages.length)];
            currentSocialMessage.set(randomMessage.message);
            showSocialProof.set(true);

            // Auto-hide after 5 seconds
            setTimeout(() => {
                showSocialProof.set(false);
            }, 5000);
        });
    },

    // Calculator actions
    toggleCalculator() {
        calculatorVisible.update(visible => !visible);
    },

    showCalculator(duration = 15000) {
        calculatorVisible.set(true);
        if (duration > 0) {
            setTimeout(() => calculatorVisible.set(false), duration);
        }
    },

    // Scarcity counter actions
    updateScarcityCount() {
        const min = 18;
        const max = 23;
        const newCount = Math.floor(Math.random() * (max - min + 1)) + min;
        currentScarcityCount.set(newCount);
    },

    // Form actions
    resetForm() {
        formData.set({
            email: '',
            businessName: '',
            phone: ''
        });
        isSubmitting.set(false);
    },

    submitForm(data) {
        isSubmitting.set(true);
        formData.set(data);

        // Simulate form submission
        return new Promise((resolve) => {
            setTimeout(() => {
                isSubmitting.set(false);
                resolve({ success: true, message: 'Form submitted successfully!' });
            }, 2000);
        });
    },

    // Navigation actions
    setActiveSection(section) {
        activeSection.set(section);
    },

    toggleMobileMenu() {
        mobileMenuOpen.update(open => !open);
    },

    // Notification actions
    addNotification(notification) {
        notifications.update(current => [
            ...current,
            {
                id: Date.now(),
                ...notification,
                timestamp: new Date()
            }
        ]);
    },

    removeNotification(id) {
        notifications.update(current =>
            current.filter(notification => notification.id !== id)
        );
    },

    // Error handling
    addError(error) {
        errors.update(current => [
            ...current,
            {
                id: Date.now(),
                message: error.message || error,
                type: error.type || 'error',
                timestamp: new Date()
            }
        ]);
    },

    clearErrors() {
        errors.set([]);
    },

    // Viewport actions
    updateViewport(width, height) {
        viewport.set({
            width,
            height,
            isMobile: width < 768,
            isTablet: width >= 768 && width < 1024,
            isDesktop: width >= 1024
        });
    },

    // Accessibility actions
    toggleHighContrast() {
        highContrast.update(contrast => !contrast);
    },

    setFontSize(size) {
        fontSize.set(size);
    },

    // Analytics actions
    trackInteraction(interaction) {
        userInteractions.update(current => [
            ...current,
            {
                ...interaction,
                timestamp: new Date()
            }
        ]);
    },

    incrementPageViews() {
        pageViews.update(views => views + 1);
    }
};

// Timer management
export const timerActions = {
    startUrgencyTimer() {
        const now = new Date();
        const endTime = new Date(now.getTime() + (4 * 24 * 60 * 60 * 1000)); // 4 days from now

        function updateTimer() {
            const now = new Date();
            const timeLeft = endTime - now;

            if (timeLeft > 0) {
                const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
                const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));

                urgencyTimerText.set(`⏰ Price increases in ${days}d ${hours}h ${minutes}m`);
            } else {
                urgencyTimerText.set('🔥 Offer Expired - Contact Support');
            }
        }

        updateTimer();
        const interval = setInterval(updateTimer, 60000); // Update every minute

        return () => clearInterval(interval);
    },

    startScarcityUpdates() {
        const interval = setInterval(() => {
            uiActions.updateScarcityCount();
        }, 30000); // Update every 30 seconds

        return () => clearInterval(interval);
    },

    startSocialProofCycle() {
        const showProof = () => {
            uiActions.showRandomSocialProof();
            // Schedule next popup between 15-25 seconds
            const nextDelay = Math.random() * 10000 + 15000;
            setTimeout(showProof, nextDelay);
        };

        // Start first popup after 5 seconds
        setTimeout(showProof, 5000);
    }
};

// Local storage persistence
export const persistenceActions = {
    saveToStorage(key, store) {
        if (typeof localStorage !== 'undefined') {
            store.subscribe(value => {
                localStorage.setItem(key, JSON.stringify(value));
            });
        }
    },

    loadFromStorage(key, store, defaultValue) {
        if (typeof localStorage !== 'undefined') {
            const stored = localStorage.getItem(key);
            if (stored) {
                try {
                    store.set(JSON.parse(stored));
                } catch (e) {
                    store.set(defaultValue);
                }
            }
        }
    }
};