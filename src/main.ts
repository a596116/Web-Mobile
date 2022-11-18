import { createApp } from 'vue'
import App from './App.vue'
import router, { setupRouter } from './router'

/**
 * Tailwindcss
 */
import './styles/tailwindcss.css'

/**
 * Vant
 */
import { Toast } from 'vant'
import 'vant/es/toast/style'
import { Dialog } from 'vant'
import 'vant/es/dialog/style'
import { Notify } from 'vant'
import 'vant/es/notify/style'
import { ImagePreview } from 'vant'
import 'vant/es/image-preview/style'


async function main() {
    const app = createApp(App)
    app.use(Toast, Dialog, Notify, ImagePreview)
    setupRouter(app)

    app.mount('#app')
}
main()
