import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'

// 全局css
import './styles/index.css'
// 引入mint-ui
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

// 引入vue-preview 图片缩略图
import VuePreview from 'vue-preview'
Vue.use(VuePreview)

// 设置全局过滤器
// 引入moment
import moment from 'moment'

Vue.filter('dateFormat',function(dateStr,pattern='YYYY-MM-DD HH:mm:ss'){
  if(dateStr.length === 10){
    dateStr = parseInt(dateStr) * 1000;
  }
  else{
    dateStr = parseInt(dateStr);
  }

  return moment(new Date(dateStr)).format(pattern)
})

// 引入mui
import '../libs/mui/css/mui.min.css'
import '../libs/mui/css/icons-extra.css'

// 配置router的守卫对象
router.afterEach((to, from, next) => {
  // window.scrollTo(0, 0)
});


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
