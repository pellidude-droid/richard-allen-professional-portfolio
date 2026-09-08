import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://richard-allen-professional-portfoli.vercel.app',
  integrations: [sitemap()],
  output: 'static'
});
