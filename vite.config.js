// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  base: '/PasteCode/', // Update this with the name of your GitHub repository
  build: {
    outDir: 'dist', // Ensure the build output goes into the 'dist' folder
  },
});
