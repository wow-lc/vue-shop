import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 全局css
import './styles/index.css'
// 引入mint-ui
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

// 引入mui
import '../libs/mui/css/mui.min.css'




Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
