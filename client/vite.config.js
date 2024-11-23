import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Uncomment the next line if deploying to GitHub Pages
  // Replace `your-repo-name` with your actual repository name
  base: '/okellogeorgeokoth/',

  build: {
    outDir: 'dist', // Change this if you want a different output folder
  },

  server: {
    port: 3000, // Change this if you want a different dev server port
  },
})
