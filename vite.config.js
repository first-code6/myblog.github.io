import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "./",
  build: {
    outDir: "docs",
    emptyOutDir: false,
  },
  // // 解决后端跨域问题
  // server: {
  //   proxy: {
  //     '/api': {
  //       target: 'http://localhost:5173',
  //       changeOrigin: true,
  //       rewrite: (path) => path.replace(/^\/api/, "")
  //     }
  //   },
  // }
})
