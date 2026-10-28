import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://az-demenagement.be',
  trailingSlash: 'always',
  integrations: [
    sitemap({
      // Page de confirmation (noindex) exclue du sitemap
      filter: (page) => !page.includes('/contactus-thank-you/') && !page.includes('/merci/'),
      changefreq: 'weekly',
      priority: 0.7,
    }),
  ],
  build: {
    inlineStylesheets: 'auto',
  },
});
