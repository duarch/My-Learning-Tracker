// @ts-check
import { defineConfig } from 'astro/config';

import svelte from '@astrojs/svelte';

// https://astro.build/config
export default defineConfig({
  site: 'https://duarch.github.io/My-Learning-Tracker/',
  base: '/My-Learning-Tracker/',
  output: 'static',
  integrations: [svelte()]
});