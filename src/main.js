import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/vant'
import './plugins/scroller'

Vue.config.productionTip = false

Vue.filter('isEmpty', function(value) {
  if (value === undefined) {
    return '0'
  } else {
    return value
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
