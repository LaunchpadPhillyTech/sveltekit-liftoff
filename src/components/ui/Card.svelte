<!-- src/components/ui/Card.svelte -->
<script>
  export let className = "";
  export let variant = "default"; // 'default', 'outlined', 'elevated'
  export let padding = "default"; // 'none', 'small', 'default', 'large'
  export let hover = false;

  $: classes = [
    "card",
    `card--${variant}`,
    `card--padding-${padding}`,
    hover && "card--hover",
    className
  ].filter(Boolean).join(" ");
</script>

<div class={classes}>
  <slot />
</div>

<style lang="scss">
  .card {
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 1rem;
    backdrop-filter: blur(10px);
    transition: all 0.3s ease;

    &--default {
      background: rgba(255, 255, 255, 0.05);
    }

    &--outlined {
      background: transparent;
      border: 2px solid rgba(79, 172, 254, 0.3);
    }

    &--elevated {
      background: rgba(255, 255, 255, 0.08);
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
    }

    &--padding-none {
      padding: 0;
    }

    &--padding-small {
      padding: 1rem;
    }

    &--padding-default {
      padding: 1.5rem;
    }

    &--padding-large {
      padding: 2rem;
    }

    &--hover {
      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 12px 40px rgba(79, 172, 254, 0.2);
        border-color: rgba(79, 172, 254, 0.4);
      }
    }
  }
</style>