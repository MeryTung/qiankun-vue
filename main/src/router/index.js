import { createRouter,createWebHistory }  from 'vue-router';
const Home = () => import(/*WebpackChunkName*/'@/views/Home.vue')
const About = () => import(/*WebpackChunkName*/'@/views/About.vue')
const routes = [
    {path:'/',name:'home',component: Home},
    {path:'/about',name:'about',component: About},
    {path:'/sub:catchAll(.*)',name:'Child',component:()=>import(/*webpackChunkName:'Empty.vue'*/'@/views/Empty.vue')}
];
const router = createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: createWebHistory(),
    routes, // `routes: routes` 的缩写
  })

  export default router

// const Home = () => import(/*WebpackChunkName:Home*/'@/views/Home.vue')
// const About = () => import(/*WebpackChunkName:About*/'@/views/About.vue')

// const routes = [
//     {path:'/',name:'Home',component: Home},
//     {path:'/about',name:'About',component:About}
// ]

// export default routes