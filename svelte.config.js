import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/vite-plugin-svelte').SvelteConfig} */
const config = {
    preprocess: vitePreprocess(),

    compilerOptions: {
        enableSourcemap: true,
        hydratable: true,
        legacy: false
    },

    onwarn: (warning, handler) => {
        if (warning.code === 'css-unused-selector') return;
        if (warning.code === 'a11y-click-events-have-key-events') return;
        if (warning.code === 'a11y-no-static-element-interactions') return;

        handler(warning);
    }
};

export default config;