<script>
  import "../styles/global.scss";
  import { onMount } from "svelte";
  import { page } from "$app/stores";
  import Analytics from "$components/Analytics.svelte";

  onMount(() => {
    // Track page view
    fetch("/api/analytics", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        event: "page_view",
        data: { path: $page.url.pathname },
      }),
    });
  });
</script>

<Analytics />
<slot />

<style lang="scss">
  // Variables and mixins are now auto-injected globally via vite.config.js

  // Animated gradient background
  :global(.gradient-bg) {
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
</style>
