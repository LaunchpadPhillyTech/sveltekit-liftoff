<!-- src/components/ui/Badge.svelte -->
<script>
  export let variant = "default"; // 'default', 'success', 'warning', 'error', 'info'
  export let size = "medium"; // 'small', 'medium', 'large'
  export let outline = false;

  $: classes = [
    "badge",
    `badge--${variant}`,
    `badge--${size}`,
    outline && "badge--outline",
  ]
    .filter(Boolean)
    .join(" ");
</script>

<span class={classes}>
  <slot />
</span>

<style lang="scss">
  .badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    border-radius: 20px;
    white-space: nowrap;
    transition: all 0.2s ease;
    border: 1px solid transparent;

    // Sizes
    &--small {
      padding: 0.25rem 0.75rem;
      font-size: 0.75rem;
    }

    &--medium {
      padding: 0.4rem 1rem;
      font-size: 0.875rem;
    }

    &--large {
      padding: 0.6rem 1.25rem;
      font-size: 1rem;
    }

    // Variants
    &--default {
      background: rgba(255, 255, 255, 0.1);
      color: #ffffff;
      border-color: rgba(255, 255, 255, 0.2);
    }

    &--success {
      background: linear-gradient(135deg, #10b981, #059669);
      color: white;
      box-shadow: 0 2px 8px rgba(16, 185, 129, 0.3);
    }

    &--warning {
      background: linear-gradient(135deg, #f59e0b, #d97706);
      color: white;
      box-shadow: 0 2px 8px rgba(245, 158, 11, 0.3);
    }

    &--error {
      background: linear-gradient(135deg, #ef4444, #dc2626);
      color: white;
      box-shadow: 0 2px 8px rgba(239, 68, 68, 0.3);
    }

    &--info {
      background: linear-gradient(135deg, #4facfe, #00f2fe);
      color: white;
      box-shadow: 0 2px 8px rgba(79, 172, 254, 0.3);
    }

    // Outline variants
    &--outline {
      background: transparent;

      &.badge--default {
        color: #ffffff;
        border-color: rgba(255, 255, 255, 0.4);
      }

      &.badge--success {
        color: #10b981;
        border-color: #10b981;
        background: rgba(16, 185, 129, 0.1);
        box-shadow: none;
      }

      &.badge--warning {
        color: #f59e0b;
        border-color: #f59e0b;
        background: rgba(245, 158, 11, 0.1);
        box-shadow: none;
      }

      &.badge--error {
        color: #ef4444;
        border-color: #ef4444;
        background: rgba(239, 68, 68, 0.1);
        box-shadow: none;
      }

      &.badge--info {
        color: #4facfe;
        border-color: #4facfe;
        background: rgba(79, 172, 254, 0.1);
        box-shadow: none;
      }
    }

    // Hover effects for non-outline variants
    &:not(.badge--outline) {
      &:hover {
        transform: translateY(-1px);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
      }
    }

    // Animation
    &.animate {
      animation: badgePulse 2s infinite;
    }
  }

  @keyframes badgePulse {
    0%,
    100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.05);
    }
  }
</style>
