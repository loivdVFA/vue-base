import { createApp } from 'vue'
import { createPinia } from 'pinia'
import IconBack from './icons/IconBack.vue'
import IconPhone from './icons/IconPhone.vue'
import IconPlus from './icons/IconPlus.vue'
import IconSearch from './icons/IconSearch.vue'
import IconSend from './icons/IconSend.vue'
import IconClose from './icons/IconClose.vue'
import ModalBase from './components/modal/ModalBase.vue'
import ModalProduct from './components/modal/ModalProduct.vue'
import './styles/_main.scss'

import App from './App.vue'
import router from './router'
import { registerSW } from 'virtual:pwa-register'

const updateSW = registerSW({ immediate: true })

const app = createApp(App)
app.component('IconBack', IconBack)
app.component('IconPhone', IconPhone)
app.component('IconPlus', IconPlus)
app.component('IconSearch', IconSearch)
app.component('IconSend', IconSend)
app.component('IconClose', IconClose)
app.component('ModalBase', ModalBase)
app.component('ModalLogin', ModalProduct)


app.use(createPinia())
app.use(router)
app.mount('#app')
