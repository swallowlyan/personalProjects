import Vue from 'vue'
import Router from 'vue-router'
import Cart from '@/components/Cart'
import Address from '../components/Address.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Cart',
      component: Cart
    },
    {
      path:'/address',
      name:'Address',
      component:Address
    }
  ]
})
