import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import mdx from '@mdx-js/rollup';

export default defineConfig({
   plugins: [
      react(),
      tailwindcss(),
      mdx(),
      VitePWA({
         registerType: 'autoUpdate',
         includeAssets: ['favicon.png'],
         manifest: {
            name: 'David Maksić Portfolio',
            short_name: 'Portfolio',
            description:
               'On this portfolio I showcase all of my most imporant projects.',
            theme_color: '#090909',
            background_color: '#090909',
            display: 'standalone',
            start_url: '/',
            icons: [
               {
                  src: '/assets/logo-mobile-sm.png',
                  sizes: '192x192',
                  type: 'image/png',
               },
               {
                  src: '/assets/logo-mobile-lg.png',
                  sizes: '512x512',
                  type: 'image/png',
               },
            ],
         },
      }),
   ],
});
