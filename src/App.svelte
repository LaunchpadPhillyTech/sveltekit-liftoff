<!-- src/App.svelte -->
<script>
  import { onMount } from "svelte";

  // Layout Components
  import Header from "./components/layout/Header.svelte";
  import Footer from "./components/layout/Footer.svelte";

  // Section Components
  import Hero from "./components/sections/Hero.svelte";
  import Stats from "./components/sections/Stats.svelte";
  import Features from "./components/sections/Features.svelte";
  import BonusStack from "./components/sections/BonusStack.svelte";
  import Testimonials from "./components/sections/Testimonials.svelte";
  import Guarantees from "./components/sections/Guarantees.svelte";
  import FinalCTA from "./components/sections/FinalCTA.svelte";

  // Widget Components (optional for now)
  // import ParticleSystem from './components/widgets/ParticleSystem.svelte';
  // import SocialProof from './components/widgets/SocialProof.svelte';
  // import UrgencyTimer from './components/widgets/UrgencyTimer.svelte';
  // import ValueCalculator from './components/widgets/ValueCalculator.svelte';

  // Stores
  // import { showSocialProof, calculatorVisible } from './stores/ui.js';

  // Utils
  // import { startIntervals } from './utils/animations.js';

  let mounted = false;

  onMount(() => {
    mounted = true;
    console.log("App mounted successfully!");
  });

  // Navigation handlers
  function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  function handleGetStarted() {
    scrollToSection("final-cta");
  }

  function handleSeeProof() {
    scrollToSection("stats");
  }
</script>

<svelte:head>
  <title>GY6AI - Revolutionary AI Chatbots for Small Business</title>
  <meta
    name="description"
    content="Transform your small business with AI chatbots. Multi-platform integration, 63% conversion boost. Start your free trial today - no credit card required."
  />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<!-- Background Elements -->
<div class="gradient-bg" />

<!-- Test if basic structure works -->
{#if !mounted}
  <div class="loading">Loading...</div>
{:else}
  <!-- Header -->
  <Header on:navigate={(e) => scrollToSection(e.detail)} />

  <main>
    <Hero onGetStarted={handleGetStarted} onSeeProof={handleSeeProof} />

    <Stats id="stats" />

    <Features id="features" />

    <BonusStack />

    <Testimonials />

    <Guarantees />

    <FinalCTA id="final-cta" />
  </main>

  <Footer />
{/if}

<style lang="scss">
  :global(*) {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :global(html) {
    scroll-behavior: smooth;
  }

  :global(body) {
    font-family: "Inter", -apple-system, BlinkMacSystemFont, sans-serif;
    line-height: 1.6;
    color: #1a1a1a;
    background: #0a0a0a;
    overflow-x: hidden;
  }

  .loading {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    color: white;
    font-size: 1.5rem;
  }

  // Animated gradient background
  .gradient-bg {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      -45deg,
      #667eea,
      #764ba2,
      #f093fb,
      #f5576c,
      #4facfe,
      #00f2fe
    );
    background-size: 400% 400%;
    animation: gradientShift 15s ease infinite;
    opacity: 0.03;
    z-index: -2;
  }

  @keyframes gradientShift {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  main {
    position: relative;
    z-index: 1;
  }

  // Global text styles
  :global(h1, h2, h3, h4, h5, h6) {
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 1rem;
  }

  :global(p) {
    margin-bottom: 1rem;
  }

  :global(a) {
    color: inherit;
    text-decoration: none;
    transition: color 0.3s ease;
  }

  // Utility classes
  :global(.container) {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  :global(.section) {
    padding: 6rem 0;
  }

  :global(.text-center) {
    text-align: center;
  }

  :global(.text-gradient) {
    background: linear-gradient(135deg, #4facfe, #00f2fe);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  // Responsive utilities
  @media (max-width: 768px) {
    :global(.container) {
      padding: 0 1rem;
    }

    :global(.section) {
      padding: 4rem 0;
    }
  }
</style>
