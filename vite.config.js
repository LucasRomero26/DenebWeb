// vite.config.js
import { defineConfig } from 'vite';
import imagePresets from 'vite-plugin-image-presets';

export default defineConfig({
  plugins: [
    imagePresets({
      opam: {
        src: './src/images/OPAM.webp',
        sizes: [400, 800],
        formats: {
          webp: { quality: 80 },
        },
      },
    }),
  ],
});