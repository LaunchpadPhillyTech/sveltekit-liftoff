<!-- src/components/layout/Header.svelte -->
<script>
  import { createEventDispatcher } from "svelte";
  import { goto } from "$app/navigation";
  import { page } from "$app/stores";
  
  const dispatch = createEventDispatcher();

  function navigate(section) {
    // Check if we're on the main page
    if ($page.url.pathname === '/') {
      // On main page - use scroll navigation via event dispatch
      dispatch("navigate", section);
    } else {
      // On other pages - navigate to main page first, then scroll
      goto("/").then(() => {
        // Small delay to ensure page has loaded and DOM is ready
        setTimeout(() => {
          const element = document.getElementById(section);
          if (element) {
            const headerHeight = 80;
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset - headerHeight;
            window.scrollTo({
              top: elementPosition,
              behavior: "smooth"
            });
          }
        }, 150);
      });
    }
  }

  function navigateToCareers() {
    goto("/careers");
  }

  function navigateHome() {
    goto("/");
  }
</script>

<header class="header">
  <div class="container">
    <div class="logo" on:click={navigateHome}>GY6AI</div>
    <nav>
      <button on:click={() => navigate("hero")}>Home</button>
      <button on:click={() => navigate("features")}>Features</button>
      <button on:click={() => navigate("stats")}>Proof</button>
      <button on:click={navigateToCareers} class="careers-btn">Careers</button>
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
    cursor: pointer;
    transition: opacity 0.3s ease;
  }
  .logo:hover {
    opacity: 0.8;
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
    transition: color 0.3s ease;
  }
  button:hover {
    color: #4facfe;
  }
  .careers-btn {
    background: linear-gradient(135deg, #4facfe, #00f2fe);
    color: white;
    border-radius: 0.5rem;
    padding: 0.75rem 1.5rem;
    font-weight: 600;
    transition: all 0.3s ease;
  }
  .careers-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(79, 172, 254, 0.3);
    color: white;
  }
</style>
