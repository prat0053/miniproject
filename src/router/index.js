import Vue from 'vue'
import Router from 'vue-router'
import home from '@/view/home'
import product from '@/view/product'
import mens from '@/view/mens'
import womens from '@/view/womens'
import brand from '@/view/brand'
import localstores from '@/view/localstores'
import lookbook from '@/view/lookbook'
import contact from '@/view/contact'
import header from '@/components/header'
import footer from '@/components/footer'
import popular from '@/components/popular'
import fontawesome from '@font-awesome/css/font-awesome.min.css'
import Veevalidate from 'vee-validate'

Vue.use(Router)
Vue.use(fontawesome)
Vue.use(Veevalidate)

export default new Router({
  routes: [
    { path: '/', name: 'home', component: home },
    { path: '/mens', name: 'mens', component: mens },
    { path: '/womens', name: 'womens', component: womens },
    { path: '/brand', name: 'brand', component: brand },
    { path: '/localstores', name: 'localstores', component: localstores },
    { path: '/lookbook', name: 'lookbook', component: lookbook },
    { path: '/product', name: 'product', component: product },
    { path: '/contact', name: 'contact', component: contact },
    { path: '/header', name: 'header', component: header },
    { path: '/footer', name: 'footer', component: footer },
    { path: '/footer', name: 'popular', component: popular }
  ]
})
