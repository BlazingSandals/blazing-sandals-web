import './assets/main.css'
//import store from './store'
import { createApp } from 'vue'
import App from './components/app.vue'

const app = createApp(App)

//app.use(store);

app.mount('#app')
