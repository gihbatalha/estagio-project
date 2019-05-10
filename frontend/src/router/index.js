import Vue from 'vue'
import Router from 'vue-router'
import Categories from '@/components/Categories'
import Introduction from '@/components/Introduction'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Introduction',
      component: Introduction
    },

    {
      path: '/category',
      name: 'Category',
      component: Categories
    }
  ]
})
