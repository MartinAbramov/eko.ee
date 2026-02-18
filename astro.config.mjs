import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
    site: 'https://eko.ee',
    integrations: [react()],
    vite: {
        plugins: [tailwindcss()],
    },
    i18n: {
        defaultLocale: "et",
        locales: ["et", "en", "ru"],
        routing: {
            prefixDefaultLocale: true,
            redirectToDefaultLocale: false
        }
    }
});
