# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `pnpm dev` - Start development server on localhost:3000
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build
- `pnpm check` - Run Svelte type checking 
- `pnpm check:watch` - Run type checking in watch mode
- `pnpm lint` - Run Prettier and ESLint checks
- `pnpm format` - Format code with Prettier

## Database Commands

- `pnpm db:generate` - Generate Prisma client
- `pnpm db:push` - Push schema changes to database
- `pnpm db:migrate` - Run database migrations
- `pnpm db:studio` - Open Prisma Studio
- `pnpm db:seed` - Seed database with test data

## Architecture Overview

This is a SvelteKit application with Prisma/PostgreSQL backend for lead generation and analytics. Key architectural patterns:

### Component Structure
- `src/components/layout/` - Core layout components (Header, Footer, Navigation)
- `src/components/sections/` - Landing page sections (Hero, Features, Testimonials, etc.)
- `src/components/ui/` - Reusable UI components (Button, Card, Input, Modal, etc.)
- `src/components/widgets/` - Interactive widgets (UrgencyTimer, SocialProof, ValueCalculator)
- `src/components/forms/` - Form components for lead capture

### Data Layer
- Uses Prisma ORM with PostgreSQL
- Three main models: Lead, Analytics, SocialProof
- Database configuration in `prisma/schema.prisma`
- Connection via `src/lib/db.js`

### API Structure
- `/api/leads/` - Lead capture and management
- `/api/analytics/` - Event tracking
- `/api/social-proof/` - Dynamic social proof notifications

### Styling
- SCSS with global variables and mixins
- Variables in `src/styles/variables.scss`
- Mixins in `src/styles/mixins.scss`
- Global styles auto-imported via Vite config

### State Management
- Svelte stores in `src/stores/` for analytics, forms, theme, and UI state
- Page-level state management with SvelteKit stores

### Path Aliases
- `$components` → `src/components`
- `$stores` → `src/stores`
- `$utils` → `src/utils`
- `$styles` → `src/styles`

## Key Integration Points

- Analytics tracking on all page views via layout
- Email integration with SendGrid (`src/lib/email.js`)
- Form validation using Zod schemas
- Lead status tracking through enum-based workflow