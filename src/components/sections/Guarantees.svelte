<!-- src/components/sections/Guarantees.svelte -->
<section class="guarantees section">
  <div class="container">
    <h2>Our Guarantees</h2>
    <div class="guarantee-grid">
      <div class="guarantee">
        <h3>90-Day Money Back</h3>
        <p>Not satisfied? Get a full refund.</p>
      </div>
      <div class="guarantee">
        <h3>24-Hour Setup</h3>
        <p>Your chatbot will be live within 24 hours.</p>
      </div>
    </div>
  </div>
</section>

<style>
  .guarantees {
    background: #1a1a1a;
    color: white;
    text-align: center;
  }
  h2 {
    font-size: 3rem;
    margin-bottom: 3rem;
  }
  .guarantee-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
  }
  .guarantee {
    padding: 2rem;
    background: #2a2a2a;
    border-radius: 10px;
  }
</style>
