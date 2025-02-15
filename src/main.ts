import './assets/index.css'

import { createPinia } from 'pinia'
import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import { registerComponents } from './registerComponents'

const app = createApp(App)

registerComponents(app)
app.use(createPinia())
app.use(router)

app.mount('#app')
