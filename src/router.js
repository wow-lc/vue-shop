import Vue from 'vue'
import Router from 'vue-router'
import home from './views/tabbar/home/home'
import member from './views/tabbar/member/member'
import shopcar from './views/tabbar/shopcar/shopcar'
import search from './views/tabbar/search/search'
import newsList from './views/news/list'
import newsInfo from './views/news/info'
import picshow from './views/exhibition/picshow'
import product from './views/product/product'

import notFound from './views/sys/notFound'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      redirect: "/home"
    },
    {
      path: '/home',
      component: home,
      meta: { showTabbar: true }
    },
    {
      path: '/member',
      component: member,
      meta: { showTabbar: true }
    },
    {
      path: '/shopcar',
      component: shopcar,
      meta: { showTabbar: true }
    },
    {
      path: '/search',
      component: search,
      meta: { showTabbar: true }
    },
    {
      path: '/news/list',
      component: newsList
    },
    {
      path: '/news/info/:id',
      component: newsInfo
    },
    {
      path:'/exhibition/list',
      component: picshow
    },
    {
      path:'/product/:id',
      component: product,
      meta: { showTabbar: true }
    },
    {
      path:'*',
      component: notFound
    }
  ],
  linkActiveClass: 'mui-active'
})
