<!-- src/components/forms/LeadForm.svelte -->
<script>
  import { createEventDispatcher } from "svelte";
  import Button from "$components/ui/Button.svelte";

  const dispatch = createEventDispatcher();

  export let source = "unknown";

  let formData = {
    email: "",
    businessName: "",
    phone: "",
  };

  let isSubmitting = false;
  let message = "";
  let messageType = "";

  async function handleSubmit() {
    isSubmitting = true;
    message = "";

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, source }),
      });

      const result = await response.json();

      if (result.success) {
        message = result.message;
        messageType = "success";
        formData = { email: "", businessName: "", phone: "" };
        dispatch("success", { source });
      } else {
        message = result.message;
        messageType = "error";
      }
    } catch (error) {
      message = "Something went wrong. Please try again.";
      messageType = "error";
    } finally {
      isSubmitting = false;
    }
  }
</script>

<div class="lead-form-container">
  <form on:submit|preventDefault={handleSubmit} class="lead-form">
    <div class="form-group">
      <input
        type="email"
        placeholder="Enter your business email"
        bind:value={formData.email}
        required
        disabled={isSubmitting}
      />
    </div>

    <div class="form-group">
      <input
        type="text"
        placeholder="Business name"
        bind:value={formData.businessName}
        required
        disabled={isSubmitting}
      />
    </div>

    <div class="form-group">
      <input
        type="tel"
        placeholder="Phone number"
        bind:value={formData.phone}
        required
        disabled={isSubmitting}
      />
    </div>

    <Button
      type="submit"
      variant="primary"
      size="large"
      fullWidth
      loading={isSubmitting}
      disabled={isSubmitting}
    >
      {isSubmitting
        ? "Securing Your Revenue Robot..."
        : "🚀 Get My Revenue Robot Now"}
    </Button>

    {#if message}
      <div class="message {messageType}">
        {message}
      </div>
    {/if}
  </form>
</div>

<style lang="scss">
  .lead-form-container {
    max-width: 500px;
    margin: 0 auto;
  }

  .lead-form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .form-group input {
    width: 100%;
    padding: 1rem 1.5rem;
    border: 2px solid rgba(255, 255, 255, 0.2);
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.1);
    color: #ffffff;
    font-size: 1rem;
    transition: all 0.3s ease;

    &:focus {
      outline: none;
      border-color: #4facfe;
      background: rgba(255, 255, 255, 0.15);
    }

    &::placeholder {
      color: #888;
    }

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
  }

  .message {
    padding: 1rem;
    border-radius: 10px;
    text-align: center;
    font-weight: 500;

    &.success {
      background: rgba(76, 175, 80, 0.1);
      color: #4caf50;
      border: 1px solid #4caf50;
    }

    &.error {
      background: rgba(244, 67, 54, 0.1);
      color: #f44336;
      border: 1px solid #f44336;
    }
  }
</style>
