import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import { astroFont } from 'astro-font/integration';

// https://astro.build/config
export default defineConfig({
    site: 'https://eko.ee',
    integrations: [astroFont()],
    build: {
        inlineStylesheets: 'always',
    },
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
