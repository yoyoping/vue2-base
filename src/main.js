import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'view-design/dist/styles/iview.css'
import fetch from './fetch/fly'

Vue.config.productionTip = false
Vue.prototype.$fetch = fetch

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
