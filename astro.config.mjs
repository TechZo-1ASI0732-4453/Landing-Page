import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'server',
  server: {
    host: true
  },
  vite: {
    ssr: {
      noExternal: ['i18next']
    }
  }
});
