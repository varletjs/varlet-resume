import vue from '@vitejs/plugin-vue'
import components from 'unplugin-vue-components/vite'
import autoImport from 'unplugin-auto-import/vite'
import { VarletUIResolver } from 'unplugin-vue-components/resolvers'
import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  
  plugins: [
    vue({
      template: {
        transformAssetUrls: {
          'var-avatar': ['src'],
          'var-app-bar': ['image']
        }
      }
    }),

    components({
      resolvers: [VarletUIResolver()]
    }),
    
    autoImport({
      resolvers: [VarletUIResolver({ autoImport: true })],
    })
  ],

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
})
