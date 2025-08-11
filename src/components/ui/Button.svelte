<!-- src/components/ui/Button.svelte -->
<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  export let variant = "primary"; // 'primary', 'secondary', 'ghost'
  export let size = "medium"; // 'small', 'medium', 'large'
  export let disabled = false;
  export let loading = false;
  export let href = null;
  export let type = "button";
  export let fullWidth = false;

  $: classes = [
    "btn",
    `btn--${variant}`,
    `btn--${size}`,
    fullWidth && "btn--full-width",
    disabled && "btn--disabled",
    loading && "btn--loading",
  ]
    .filter(Boolean)
    .join(" ");

  function handleClick(event) {
    if (!disabled && !loading) {
      dispatch("click", event);
    }
  }
</script>

{#if href}
  <a {href} class={classes} on:click={handleClick}>
    {#if loading}
      <span class="spinner" />
    {/if}
    <slot />
  </a>
{:else}
  <button {type} class={classes} {disabled} on:click={handleClick}>
    {#if loading}
      <span class="spinner" />
    {/if}
    <slot />
  </button>
{/if}

<style lang="scss">
  .btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    font-weight: 600;
    border-radius: 50px;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease;
    text-decoration: none;
    text-align: center;
    position: relative;
    overflow: hidden;

    &:focus {
      outline: 2px solid rgba(79, 172, 254, 0.5);
      outline-offset: 2px;
    }

    // Variants
    &--primary {
      background: linear-gradient(135deg, #4facfe, #00f2fe);
      color: white;
      box-shadow: 0 6px 20px rgba(79, 172, 254, 0.3);

      &:hover:not(.btn--disabled):not(.btn--loading) {
        transform: translateY(-3px);
        box-shadow: 0 10px 30px rgba(79, 172, 254, 0.4);
      }
    }

    &--secondary {
      background: transparent;
      color: #ffffff;
      border: 2px solid rgba(255, 255, 255, 0.2);

      &:hover:not(.btn--disabled):not(.btn--loading) {
        background: rgba(255, 255, 255, 0.1);
        border-color: #4facfe;
        transform: translateY(-2px);
      }
    }

    &--ghost {
      background: transparent;
      color: #4facfe;
      border: 2px solid transparent;

      &:hover:not(.btn--disabled):not(.btn--loading) {
        background: rgba(79, 172, 254, 0.1);
        border-color: #4facfe;
      }
    }

    &--outline {
      background: transparent;
      color: #4facfe;
      border: 2px solid #4facfe;

      &:hover:not(.btn--disabled):not(.btn--loading) {
        background: #4facfe;
        color: white;
        transform: translateY(-2px);
        box-shadow: 0 8px 25px rgba(79, 172, 254, 0.3);
      }
    }

    // Sizes
    &--small {
      padding: 0.5rem 1rem;
      font-size: 0.9rem;
    }

    &--medium {
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
    }

    &--large {
      padding: 1rem 2rem;
      font-size: 1.1rem;
    }

    // States
    &--full-width {
      width: 100%;
    }

    &--disabled {
      opacity: 0.6;
      cursor: not-allowed;
      transform: none !important;
    }

    &--loading {
      cursor: wait;

      .spinner {
        width: 16px;
        height: 16px;
        border: 2px solid transparent;
        border-top: 2px solid currentColor;
        border-radius: 50%;
        animation: spin 1s linear infinite;
      }
    }
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }

  // Mobile responsiveness
  @media (max-width: 768px) {
    .btn--large {
      width: 100%;
      max-width: 300px;
    }
  }
</style>
