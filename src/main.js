import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'

// Dark-first (Cursor-like palette)
document.body.classList.add('dark-theme')
document.documentElement.classList.add('dark')

const app = createApp(App)

app.use(router)

app.mount('#app')
