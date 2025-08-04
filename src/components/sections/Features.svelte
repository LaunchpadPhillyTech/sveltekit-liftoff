<!-- src/components/sections/Features.svelte -->
<script>
  export let id = "features";
</script>

<section {id} class="features section">
  <div class="container">
    <h2>Why Choose GY6AI?</h2>
    <div class="features-grid">
      <div class="feature">
        <h3>🤖 AI-Powered</h3>
        <p>Advanced AI that learns and improves over time</p>
      </div>
      <div class="feature">
        <h3>⚡ Lightning Fast</h3>
        <p>Responds to customers instantly, 24/7</p>
      </div>
      <div class="feature">
        <h3>📈 Boost Sales</h3>
        <p>Convert 63% more leads into paying customers</p>
      </div>
    </div>
  </div>
</section>

<style>
  .features {
    background: #0a0a0a;
    color: white;
    text-align: center;
  }
  h2 {
    font-size: 3rem;
    margin-bottom: 3rem;
  }
  .features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
  }
  .feature {
    padding: 2rem;
    background: #1a1a1a;
    border-radius: 10px;
  }
  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
</style>
