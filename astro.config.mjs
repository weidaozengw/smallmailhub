// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://smallmailhub.com',
  trailingSlash: 'never',
  integrations: [sitemap()],
  build: {
    format: 'directory',
  },
  markdown: {
    shikiConfig: {
      theme: 'github-dark-dimmed',
    },
  },
  // Astro v5 legacy.collections is false by default — turn it on
  legacy: {
    collections: true,
  },
});
