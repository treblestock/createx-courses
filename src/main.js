import { createApp, ref, computed, watch } from 'vue'
import App from '@/components/App.vue'
const app = createApp(App)



import UI from '@/components/UI'
for (const key in UI) {
  const value = UI[key]
  app.component(key, value)
}


import { router } from '@/router'
app.use(router)



import { createPinia } from 'pinia'
const pinia = createPinia()

import { onRegister } from '@/stores/plugins/onRegister.js'
pinia.use(onRegister)
// pinia plugins


app.use(pinia)





app.mount('#app')
