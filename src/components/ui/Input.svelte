<!-- src/components/ui/Input.svelte -->
<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  export let value = "";
  export let type = "text";
  export let placeholder = "";
  export let disabled = false;
  export let required = false;
  export let readonly = false;
  export let maxlength = undefined;
  export let rows = undefined; // For textarea
  export let className = "";
  export let label = "";
  export let error = "";
  export let hint = "";

  $: isTextarea = type === "textarea";
  $: inputClasses = [
    "input",
    error && "input--error",
    disabled && "input--disabled",
    readonly && "input--readonly",
    className
  ].filter(Boolean).join(" ");

  function handleInput(event) {
    value = event.target.value;
    dispatch("input", event);
  }

  function handleChange(event) {
    dispatch("change", event);
  }

  function handleFocus(event) {
    dispatch("focus", event);
  }

  function handleBlur(event) {
    dispatch("blur", event);
  }
</script>

<div class="input-group">
  {#if label}
    <label class="input-label" for={$$props.id}>
      {label}
      {#if required}
        <span class="required">*</span>
      {/if}
    </label>
  {/if}

  {#if isTextarea}
    <textarea
      class={inputClasses}
      {value}
      {placeholder}
      {disabled}
      {required}
      {readonly}
      {maxlength}
      {rows}
      {...$$restProps}
      on:input={handleInput}
      on:change={handleChange}
      on:focus={handleFocus}
      on:blur={handleBlur}
    ></textarea>
  {:else}
    <input
      class={inputClasses}
      {type}
      {value}
      {placeholder}
      {disabled}
      {required}
      {readonly}
      {maxlength}
      {...$$restProps}
      on:input={handleInput}
      on:change={handleChange}
      on:focus={handleFocus}
      on:blur={handleBlur}
    />
  {/if}

  {#if hint && !error}
    <p class="input-hint">{hint}</p>
  {/if}

  {#if error}
    <p class="input-error">{error}</p>
  {/if}
</div>

<style lang="scss">
  .input-group {
    width: 100%;
    margin-bottom: 1rem;
  }

  .input-label {
    display: block;
    color: #e0e0e0;
    font-weight: 600;
    font-size: 0.9rem;
    margin-bottom: 0.5rem;

    .required {
      color: #f5576c;
      margin-left: 0.25rem;
    }
  }

  .input {
    width: 100%;
    padding: 0.75rem 1rem;
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 0.5rem;
    background: rgba(255, 255, 255, 0.05);
    color: #ffffff;
    font-size: 1rem;
    transition: all 0.3s ease;
    resize: vertical;

    &::placeholder {
      color: #888;
    }

    &:focus {
      outline: none;
      border-color: #4facfe;
      box-shadow: 0 0 0 2px rgba(79, 172, 254, 0.2);
      background: rgba(255, 255, 255, 0.08);
    }

    &:hover:not(:disabled):not(:focus) {
      border-color: rgba(255, 255, 255, 0.3);
    }

    &--error {
      border-color: #f5576c;
      background: rgba(245, 87, 108, 0.05);

      &:focus {
        border-color: #f5576c;
        box-shadow: 0 0 0 2px rgba(245, 87, 108, 0.2);
      }
    }

    &--disabled {
      opacity: 0.6;
      cursor: not-allowed;
      background: rgba(255, 255, 255, 0.02);
    }

    &--readonly {
      background: rgba(255, 255, 255, 0.02);
      cursor: default;
    }
  }

  textarea.input {
    min-height: 100px;
    font-family: inherit;
    line-height: 1.5;
  }

  .input-hint {
    margin-top: 0.5rem;
    margin-bottom: 0;
    color: #888;
    font-size: 0.85rem;
    line-height: 1.4;
  }

  .input-error {
    margin-top: 0.5rem;
    margin-bottom: 0;
    color: #f5576c;
    font-size: 0.85rem;
    line-height: 1.4;
    display: flex;
    align-items: center;
    gap: 0.25rem;

    &::before {
      content: " ";
    }
  }

  @media (max-width: 768px) {
    .input {
      padding: 0.75rem;
      font-size: 16px; // Prevents zoom on mobile
    }
  }
</style>