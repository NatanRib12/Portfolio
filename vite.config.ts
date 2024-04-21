import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"
import tsconfigPaths from 'vite-tsconfig-paths'
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@shared": path.resolve(__dirname, "./src/components/shared"),
    }

  },
})
