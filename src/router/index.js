import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Test',
      component: Home
    },
    {
      path: '/helloworld',
      name: 'Hello',
      component: HelloWorld
    }
  ]
})