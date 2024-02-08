import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  envPrefix: 'VITE_',
  envDir: './',
  plugins: [react()],
  resolve: {
    alias: [{ find: "@", replacement: path.resolve( "src")}],
  },
});
