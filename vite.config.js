import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [svelte()],

    // CSS preprocessing
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `
          @import './src/styles/variables.scss';
          @import './src/styles/mixins.scss';
        `
            }
        }
    },

    // Development server configuration
    server: {
        port: 3000,
        host: true,
        open: true
    },

    // Build configuration
    build: {
        outDir: 'dist',
        sourcemap: true,

        // Rollup options for optimization
        rollupOptions: {
            output: {
                // Manual chunks for better caching
                manualChunks: {
                    vendor: ['svelte'],
                    ui: [
                        './src/components/ui/Button.svelte',
                        './src/components/ui/Input.svelte',
                        './src/components/ui/Card.svelte'
                    ]
                }
            }
        },

        // Asset handling
        assetsDir: 'assets',
        assetsInlineLimit: 4096, // Inline assets smaller than 4kb
    },

    // Optimization
    optimizeDeps: {
        include: ['lucide-svelte']
    },

    // Testing configuration
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: ['./src/test/setup.js']
    },

    // Define global constants
    define: {
        __APP_VERSION__: JSON.stringify(process.env.npm_package_version),
        __BUILD_TIME__: JSON.stringify(new Date().toISOString())
    }
})