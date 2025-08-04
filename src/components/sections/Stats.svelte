<!-- src/components/sections/Stats.svelte -->
<script>
  export let id = 'stats';
</script>

<section {id} class="stats section">
  <div class="container">
    <h2>Proven Results</h2>
    <div class="stats-grid">
      <div class="stat">
        <div class="number">63%</div>
        <div class="label">More Leads</div>
      </div>
      <div class="stat">
        <div class="number">24/7</div>
        <div class="label">Always Working</div>
      </div>
      <div class="stat">
        <div class="number">$0</div>
        <div class="label">Sick Days</div>
      </div>
    </div>
  </div>
</section>

<style>
  .stats {
    background: #1a1a1a;
    color: white;
    text-align: center;
  }
  h2 {
    font-size: 3rem;
    margin-bottom: 3rem;
  }
  .stats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 2rem;
  }
  .stat {
    padding: 2rem;
  }
  .number {
    font-size: 3rem;
    font-weight: 900;
    color: #4facfe;
    margin-bottom: 0.5rem;
  }
  .label {
    font-size: 1.2rem;
    color: #ccc;
  }
</style>