import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',  // 输入的地址
    // redirect:'/login' // 重定向的地址
    redirect:'/home' // 重定向的地址
    // redirect:{
    //   name:'home' // 路线
    // }
  },
  { // 路线配置
    path: '/login',
    name: 'login', // 路线名称
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path: '/home',
    name: 'home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue'),
    children:[ // 二级路由
      { // 账号添加
        path: '',
        name: 'dashbroad',
        component: () => import(/* webpackChunkName: "about" */ '../views/Dashbroad.vue')
      },
      { // 账号添加
        path: 'accountadd', // 相对地址,自定带上父级地址
        name: 'accountadd',
        component: () => import(/* webpackChunkName: "about" */ '../views/account/AccountAdd.vue')
      },
      { // 账号列表
        path: 'accountlist',
        name: 'accountlist',
        component: () => import(/* webpackChunkName: "about" */ '../views/account/AccountList.vue')
      },
      { // 密码修改
        path: 'passwordchange',
        name: 'passwordchange',
        component: () => import(/* webpackChunkName: "about" */ '../views/account/PasswordChange.vue')
      },
      { // 商品添加
        path: 'productadd',
        name: 'productadd',
        component: () => import(/* webpackChunkName: "about" */ '../views/product/ProductAdd.vue')
      },
      { // 商品列表
        path: 'productlist',
        name: 'productlist',
        component: () => import(/* webpackChunkName: "about" */ '../views/product/ProductList.vue')
      },
    ]
  },
  // 错误地址的重定向-->根路径
  { path: '*', redirect: '/' }

]

const router = new VueRouter({
  routes
})

export default router
