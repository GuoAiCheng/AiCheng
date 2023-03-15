import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/user/login.vue'
import Home from '../components/user/home.vue'

// 子组件
import One_a from '../components/menu/right/one_a.vue'
import One_b from '../components/menu/right/one_b.vue'
import One_c from '../components/menu/right/one_c.vue'
import Two_a from '../components/menu/right/two_a.vue'
import Two_b from '../components/menu/right/two_b.vue'
import Two_c from '../components/menu/right/two_c.vue'
import Two_d from '../components/menu/right/two_d.vue'
import Two_e from '../components/menu/right/two_e.vue'
import Three_a from '../components/menu/right/three_a.vue'
import Three_b from '../components/menu/right/three_b.vue'
import Four_a from '../components/menu/right/four_a.vue'
import Four_b from '../components/menu/right/four_b.vue'
import Four_c from '../components/menu/right/four_c.vue'
import Five_a from '../components/menu/right/five_a.vue'
import Five_b from '../components/menu/right/five_b.vue'
import Five_c from '../components/menu/right/five_c.vue'
import Five_d from '../components/menu/right/five_d.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes:[
    {path:'/',redirect:'/login'},
    {path:'/login',component:Login},
    {path:'/home',component:Home,
    redirect:'/home/one_c',
    children:[
      {path:'one_a',component:One_a},
      {path:'one_b',component:One_b,},
      {path:'one_c',component:One_c,},
      {path:'two_a',component:Two_a},
      {path:'two_b',component:Two_b},
      {path:'two_c',component:Two_c},
      {path:'two_d',component:Two_d},
      {path:'two_e',component:Two_e},
      {path:'three_a',component:Three_a},
      {path:'three_b',component:Three_b},
      {path:'four_a',component:Four_a},
      {path:'four_b',component:Four_b},
      {path:'four_c',component:Four_c},
      {path:'five_a',component:Five_a},
      {path:'five_b',component:Five_b},
      {path:'five_c',component:Five_c},
      {path:'five_d',component:Five_d},
     ]
    },
  ]
})

// 全局前置守卫
router.beforeEach(function(to,from,next){
  if(to.path==='/home/one_c' && to.path==='/home/one_a'){
      const token = localStorage.getItem('token')
      if(token){
          next()
      }else{
          next('/login')
      }
  }else{
      next()
  }
})

export default router
