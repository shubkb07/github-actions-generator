import { createApp } from 'vue'
// import { renderToString } from "vue/server-renderer";
import App from './App.vue'
import router from './router'
import store from './store'

import PrimeVue from 'primevue/config'
import 'primeicons/primeicons.css' // Icons
import 'primeflex/primeflex.css' // PrimeFlex
import MyPreset from './plugin/theme'

// PrimeVue Components (global registration)
import Button from 'primevue/button'
import Menubar from 'primevue/menubar'
import Avatar from 'primevue/avatar'
import Dialog from 'primevue/dialog'
import Card from 'primevue/card'
import Listbox from 'primevue/listbox'
import ToastService from 'primevue/toastservice'
import Toast from 'primevue/toast'
import Ripple from 'primevue/ripple'

createApp(App)
  .use(PrimeVue, {
    ripple: true,
    theme: {
      preset: MyPreset,
      options: {
        darkModeSelector: '.my-app-dark',
      },
    },
  })
  .directive('ripple', Ripple)
  .component('Button', Button)
  .component('Menubar', Menubar)
  .component('Avatar', Avatar)
  .component('Dialog', Dialog)
  .component('Card', Card)
  .component('Listbox', Listbox)
  .component('Toast', Toast)
  .use(ToastService)
  .use(router)
  .use(store)
  .mount('#app')
