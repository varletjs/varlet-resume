import App from './App.vue'
import { createApp } from 'vue'
import { Themes } from '@varlet/ui'
import '@varlet/touch-emulator'

StyleProvider({ ...Themes.md3Light, '--cell-padding': '16px 22px' })

createApp(App).mount('#app')
