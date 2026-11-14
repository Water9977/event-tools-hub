// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import cloudflare from '@astrojs/cloudflare';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://tools.eventrentalcosts.com',
  output: 'static',
  trailingSlash: 'always',

  vite: {
    plugins: [tailwindcss()]
  },

  adapter: cloudflare(),
  integrations: [sitemap()]
});