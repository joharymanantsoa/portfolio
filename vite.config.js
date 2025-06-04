import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // Ajoute le plugin React
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(), // Plugin React nécessaire
    tailwindcss(),
  ],
})