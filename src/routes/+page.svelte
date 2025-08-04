<!-- src/routes/+page.svelte -->
<script>
  import { onMount } from "svelte";
  import { browser } from "$app/environment";

  // Layout Components
  import Header from "$components/layout/Header.svelte";
  import Footer from "$components/layout/Footer.svelte";

  // Section Components
  import Hero from "$components/sections/Hero.svelte";
  import Stats from "$components/sections/Stats.svelte";
  import Features from "$components/sections/Features.svelte";
  import Guarantees from "$components/sections/Guarantees.svelte";
  import FinalCTA from "$components/sections/FinalCTA.svelte";

  // Widget Components
  import ParticleSystem from "$components/widgets/ParticleSystem.svelte";
  import SocialProof from "$components/widgets/SocialProof.svelte";
  import UrgencyTimer from "$components/widgets/UrgencyTimer.svelte";
  import ValueCalculator from "$components/widgets/ValueCalculator.svelte";

  // Utils
  import { startIntervals } from "$utils/animations.js";

  let mounted = false;

  onMount(() => {
    mounted = true;

    // Start all intervals and animations
    const cleanup = startIntervals();

    // Show calculator after 10 seconds
    setTimeout(() => {
      const event = new CustomEvent("show-calculator");
      window.dispatchEvent(event);
    }, 10000);

    return cleanup;
  });

  // Navigation handlers
  function scrollToSection(sectionId) {
    if (!browser) return;

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

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://GY6AI.com/" />
  <meta property="og:title" content="GY6AI - Revolutionary AI Chatbots" />
  <meta
    property="og:description"
    content="Transform your small business with AI chatbots. Multi-platform integration, 63% conversion boost."
  />
  <meta property="og:image" content="/images/og-image.jpg" />

  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image" />
  <meta property="twitter:url" content="https://GY6AI.com/" />
  <meta property="twitter:title" content="GY6AI - Revolutionary AI Chatbots" />
  <meta
    property="twitter:description"
    content="Transform your small business with AI chatbots. 63% more leads guaranteed."
  />
  <meta property="twitter:image" content="/images/twitter-card.jpg" />

  <!-- Preconnect for performance -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<!-- Background Elements -->
<div class="gradient-bg"></div>
{#if mounted}
  <ParticleSystem />
{/if}

<!-- Fixed UI Elements -->
{#if mounted}
  <UrgencyTimer />
  <SocialProof />
  <ValueCalculator />
{/if}

<!-- Layout -->
<Header on:navigate={(e) => scrollToSection(e.detail)} />

<main>
  <Hero onGetStarted={handleGetStarted} onSeeProof={handleSeeProof} />

  <Stats id="stats" />

  <Features id="features" />

  <Guarantees />

  <FinalCTA id="final-cta" />
</main>

<Footer />

<style lang="scss">
  // Using direct CSS instead of SCSS variables to eliminate compilation errors

  :global(*) {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :global(html) {
    scroll-behavior: smooth;
  }

  :global(body) {
    font-family:
      "Inter",
      -apple-system,
      BlinkMacSystemFont,
      sans-serif;
    line-height: 1.6;
    color: #ffffff;
    background: #0a0a0a;
    overflow-x: hidden;
  }

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
