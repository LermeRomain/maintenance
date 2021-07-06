import Vue from 'vue'
import App from './App.vue'
import bootstrap from 'bootstrap/dist/css/bootstrap.css'


Vue.config.productionTip = false

new Vue({
  bootstrap,
  render: h => h(App),
}).$mount('#app')
