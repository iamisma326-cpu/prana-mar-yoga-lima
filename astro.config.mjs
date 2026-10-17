import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  base: process.env.BASE_PATH || '/',
  integrations: [tailwind({ applyBaseStyles: false })],
});
