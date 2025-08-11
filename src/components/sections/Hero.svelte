<!-- src/components/sections/Hero.svelte -->
<script>
  import { onMount } from "svelte";
  import Button from "$components/ui/Button.svelte";
  import Badge from "$components/ui/Badge.svelte";
  import LeadForm from "$components/forms/LeadForm.svelte";
  import { currentScarcityCount } from "$stores/ui.js";

  export let onSeeProof = () => {};
  export let onGetStarted = () => {};

  let showForm = false;
  let scarcityCount = 23;

  onMount(() => {
    const unsubscribe = currentScarcityCount.subscribe((value) => {
      scarcityCount = value;
    });
    return unsubscribe;
  });

  function handleGetStarted() {
    showForm = true;
    onGetStarted(); // Call the prop function
    // Track conversion intent
    fetch("/api/analytics", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        event: "cta_clicked",
        data: { location: "hero", action: "get_started" },
      }),
    });
  }
</script>

<section id="hero" class="hero section">
  <div class="container">
    <div class="hero-content">
      <div class="value-stack-badge">
        <span class="strike-through">$5,485 Value</span>
        <span class="highlight">FREE Today</span>
      </div>

      <h1>
        The 24/7 Revenue Robot That Never Sleeps, Calls In Sick, Or Asks For A
        Raise
      </h1>

      <p class="hero-subheader">
        Replace expensive customer service staff with an AI employee that
        converts 63% more leads, works 24/7, and pays for itself in 30 days.
        <strong>Setup guaranteed in 24 hours or we pay YOU $500.</strong>
      </p>

      <div class="urgency-banner">
        <span class="urgency-text"
          >⚡ Only {scarcityCount} Revenue Robot setups left this month</span
        >
      </div>

      {#if !showForm}
        <div class="hero-cta">
          <Button variant="primary" size="large" on:click={handleGetStarted}>
            Get My Revenue Robot Now
          </Button>

          <Button variant="secondary" size="large" on:click={onSeeProof}>
            See 63% Conversion Proof
          </Button>
        </div>
      {:else}
        <LeadForm source="hero" on:success={() => (showForm = false)} />
      {/if}

      <div class="guarantee-badges">
        <Badge>90-Day Money Back</Badge>
        <Badge>24-Hour Setup</Badge>
        <Badge>10+ Leads Guaranteed</Badge>
      </div>
    </div>
  </div>
</section>

<style lang="scss">
  .hero {
    background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
    color: white;
    text-align: center;
    min-height: 100vh;
    display: flex;
    align-items: center;
    position: relative;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(
        -45deg,
        rgba(102, 126, 234, 0.1),
        rgba(118, 75, 162, 0.1),
        rgba(240, 147, 251, 0.1),
        rgba(245, 87, 108, 0.1)
      );
      pointer-events: none;
    }
  }

  .hero-content {
    position: relative;
    z-index: 1;
    max-width: 800px;
    margin: 0 auto;
  }

  .value-stack-badge {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 50px;
    padding: 0.5rem 1rem;
    margin-bottom: 2rem;
    backdrop-filter: blur(10px);

    .strike-through {
      text-decoration: line-through;
      color: #999;
      font-size: 0.9rem;
    }

    .highlight {
      background: linear-gradient(135deg, #4facfe, #00f2fe);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      font-weight: 700;
    }
  }

  h1 {
    font-size: 3.5rem;
    font-weight: 900;
    line-height: 1.1;
    margin-bottom: 1.5rem;
    background: linear-gradient(135deg, #ffffff, #e0e0e0);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;

    @media (max-width: 768px) {
      font-size: 2.5rem;
    }
  }

  .hero-subheader {
    font-size: 1.25rem;
    line-height: 1.6;
    color: #b0b0b0;
    margin-bottom: 2rem;

    strong {
      color: #4facfe;
      font-weight: 700;
    }
  }

  .urgency-banner {
    background: linear-gradient(135deg, #ff4757, #ff6b7a);
    border-radius: 30px;
    padding: 0.75rem 1.5rem;
    margin-bottom: 2rem;
    display: inline-block;

    .urgency-text {
      color: white;
      font-weight: 600;
      font-size: 1rem;
    }
  }

  .hero-cta {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 2rem;

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
    }
  }

  .guarantee-badges {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 2rem;

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
    }
  }
</style>
