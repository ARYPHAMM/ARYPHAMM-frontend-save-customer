import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  // css : { 
  //   preprocessorOptions : { 
  //       scss : { 
  //           sourceMap : false , 
  //           // additionalData : `@import "@/assets/mixin.scss";`,
  //           additionalData (source, fp) {
  //             // All scss files ending with imports.scss
  //             // will not re-import additionalData
  //             if (fp.endsWith('variables.scss')) return source;
  //             // Use additionalData from legacy nuxt scss options
  //             return `@import "@/assets/scss/main.scss"; ${source}`
  //           } 
  //       } , 
  //   } , 
  // } , 
 
})
