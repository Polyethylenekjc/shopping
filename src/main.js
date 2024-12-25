import 'element-plus/dist/index.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueCookies from 'vue3-cookies'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'


const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.use(VueCookies)
app.use(router)
app.mount('#app')