// src/lib/validation.js
import { z } from 'zod';

export const leadSchema = z.object({
    email: z.string().email('Please enter a valid email address'),
    businessName: z.string().min(1, 'Business name is required'),
    phone: z.string().min(10, 'Please enter a valid phone number'),
    source: z.string().default('hero')
});

export const newsletterSchema = z.object({
    email: z.string().email('Please enter a valid email address')
});