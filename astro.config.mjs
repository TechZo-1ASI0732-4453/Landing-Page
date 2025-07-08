import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';

export default defineConfig({
  output: 'server',
  adapter: netlify(),
  server: {
    host: true
  },
  vite: {
    ssr: {
      noExternal: ['i18next']
    }
  }
});
