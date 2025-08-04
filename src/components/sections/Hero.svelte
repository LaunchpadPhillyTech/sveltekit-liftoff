<!-- src/components/sections/Hero.svelte -->
<script>
  import { onMount } from 'svelte';
  import { currentScarcityCount } from '../../stores/ui.js';
  import Button from '../ui/Button.svelte';
  import Badge from '../ui/Badge.svelte';

  export let onGetStarted = () => {};
  export let onSeeProof = () => {};

  let scarcityCount = 23;

  onMount(() => {
    const unsubscribe = currentScarcityCount.subscribe(value => {
      scarcityCount = value;
    });

    return unsubscribe;
  });
</script>

<section class="hero">
  <div class="hero-content">
    <div class="value-stack-badge">
      <span class="strike-through">$5,485 Value</span>
      <span class="highlight">FREE Today</span>
    </div>
    
    <h1>The 24/7 Revenue Robot That Never Sleeps, Calls In Sick, Or Asks For A Raise</h1>
    
    <p class="hero-subheader">
      Replace expensive customer service staff with an AI employee that converts 63% more leads, 
      works 24/7, and pays for itself in 30 days. 
      <strong>Setup guaranteed in 24 hours or we pay YOU $500.</strong>
    </p>
    
    <div class="urgency-banner">
      <span class="urgency-text">⚡ Only {scarcityCount} Revenue Robot setups left this month</span>
    </div>
    
    <div class="hero-cta">
      <Button 
        variant="primary" 
        size="large" 
        on:click={onGetStarted}
      >
        Get My Revenue Robot Now
      </Button>
      
      <Button 
        variant="secondary" 
        size="large" 
        on:click={onSeeProof}
      >
        See 63% Conversion Proof
      </Button>
    </div>
    
    <div class="guarantee-badges">
      <Badge>90-Day Money Back</Badge>
      <Badge>24-Hour Setup</Badge>
      <Badge>10+ Leads Guaranteed</Badge>
    </div>
  </div>
</section>

<style lang="scss">
  .hero {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 0 2rem;
    position: relative;
  }

  .hero-content {
    max-width: 800px;
    z-index: 10;
  }

  h1 {
    font-size: clamp(2.5rem, 5vw, 4rem);
    font-weight: 900;
    margin-bottom: 1.5rem;
    background: linear-gradient(135deg, #ffffff, #4facfe);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    line-height: 1.2;
  }

  .hero-subheader {
    font-size: 1.25rem;
    color: #b0b0b0;
    margin-bottom: 2.5rem;
    line-height: 1.6;
  }

  .value-stack-badge {
    background: linear-gradient(135deg, #ff6b6b, #ee5a24);
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 50px;
    margin-bottom: 1rem;
    display: inline-block;
    font-weight: 600;
    animation: pulse 2s infinite;
  }

  .strike-through {
    text-decoration: line-through;
    opacity: 0.8;
    margin-right: 0.5rem;
  }

  .highlight {
    background: #4facfe;
    padding: 0.2rem 0.5rem;
    border-radius: 15px;
    font-weight: 700;
  }

  .urgency-banner {
    background: rgba(255, 107, 107, 0.1);
    border: 1px solid #ff6b6b;
    border-radius: 25px;
    padding: 0.75rem 1.5rem;
    margin: 1.5rem 0;
    animation: glow 2s infinite alternate;
  }

  .urgency-text {
    color: #ff6b6b;
    font-weight: 600;
  }

  .hero-cta {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 2rem;
  }

  .guarantee-badges {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
  }

  @keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.05); }
  }

  @keyframes glow {
    from { box-shadow: 0 0 5px rgba(255, 107, 107, 0.3); }
    to { box-shadow: 0 0 20px rgba(255, 107, 107, 0.6); }
  }

  @media (max-width: 768px) {
    .hero-cta {
      flex-direction: column;
      align-items: center;
    }
  }
</style>