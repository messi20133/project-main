import Vue from 'vue'
import App from './App.vue'

import { add, minus, Text } from 'commons'
console.log(add(1,3))
console.log(minus(3,1))
console.log(Text)
// console.log(Text)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
