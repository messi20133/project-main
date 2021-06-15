import Vue from 'vue'
import App from './App.vue'

import { add, minus, day, Text1 } from 'commons'
console.log(add(1,3))
console.log(minus(3,1))
console.log(Text1)
console.log(day())

// import Common from '../commons/utils/index.js'
// console.log(Common)


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
