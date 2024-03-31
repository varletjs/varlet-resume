import vue from '@vitejs/plugin-vue'
import components from 'unplugin-vue-components/vite'
import autoImport from 'unplugin-auto-import/vite'
import { VarletImportResolver } from '@varlet/import-resolver'
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
      resolvers: [VarletImportResolver()]
    }),
    
    autoImport({
      resolvers: [VarletImportResolver({ autoImport: true })],
    })
  ],

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
})
