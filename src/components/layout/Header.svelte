<!-- src/components/layout/Header.svelte -->
<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  function navigate(section) {
    dispatch("navigate", section);
  }
</script>

<header class="header">
  <div class="container">
    <div class="logo">GY6AI</div>
    <nav>
      <button on:click={() => navigate("hero")}>Home</button>
      <button on:click={() => navigate("features")}>Features</button>
      <button on:click={() => navigate("stats")}>Proof</button>
    </nav>
  </div>
</header>

<style>
  .header {
    position: fixed;
    top: 0;
    width: 100%;
    background: rgba(10, 10, 10, 0.9);
    backdrop-filter: blur(10px);
    z-index: 100;
    padding: 1rem 0;
  }
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
  }
  .logo {
    color: #4facfe;
    font-size: 1.5rem;
    font-weight: 700;
  }
  nav {
    display: flex;
    gap: 2rem;
  }
  button {
    background: none;
    border: none;
    color: white;
    cursor: pointer;
    padding: 0.5rem;
  }
</style>
