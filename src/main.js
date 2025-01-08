import './assets/css/style.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

import { MotionPlugin } from '@vueuse/motion'

library.add(fas,fab)


import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(MotionPlugin)
app.component('font-awesome-icon',FontAwesomeIcon)
app.use(createPinia())
app.use(router)

app.mount('#app')
