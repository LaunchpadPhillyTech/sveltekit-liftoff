<!-- src/components/sections/FinalCTA.svelte -->
<script>
  export let id = "final-cta";
</script>

<section {id} class="final-cta section">
  <div class="container">
    <h2>Ready to Transform Your Business?</h2>
    <p>Join thousands of businesses already using GY6AI</p>
    <button class="cta-button">Get Started Now - FREE</button>
  </div>
</section>

<style>
  .final-cta {
    background: linear-gradient(135deg, #4facfe, #00f2fe);
    color: white;
    text-align: center;
  }
  h2 {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  p {
    font-size: 1.3rem;
    margin-bottom: 2rem;
  }
  .cta-button {
    background: white;
    color: #4facfe;
    border: none;
    padding: 1rem 2rem;
    font-size: 1.2rem;
    font-weight: 700;
    border-radius: 50px;
    cursor: pointer;
    transition: transform 0.3s ease;
  }
  .cta-button:hover {
    transform: translateY(-3px);
  }
</style>
