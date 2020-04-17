import Vue from 'vue'
import VueRouter from 'vue-router'
import Video from '../views/Video.vue'
import View from '../views/View.vue'
import yy from '../views/yy.vue'
import list from '../components/list.vue'
import my from '../views/my.vue'

Vue.use(VueRouter)

  const routes = [
    {
      path:'/video',
      component:Video,
    },
    {
      path:'/',
      redirect:'/video',
    },
    {
      path:'/view/:filmId',
      name:'View',
      component:View
    },
    {
      path:'/yy/:cityId/:name',
      name:'yy',
      component:yy
    },
    {
      path:'/list',
      name:'list',
      component:list
    },
    {
      path:'/my',
      name:'my',
      component:my
    },
]

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
})

export default router
