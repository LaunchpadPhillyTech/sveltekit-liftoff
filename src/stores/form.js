import { writable } from "svelte/store";

export const formData = writable({
  email: "",
  businessName: "",
  phone: "",
});

export const isSubmitting = writable(false);
