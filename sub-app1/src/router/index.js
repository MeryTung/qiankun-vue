

const Cat = () => import(/*webpackChunkName*/'@/views/Cat.vue')
const Dog = () => import(/*webpackChunkName*/'@/views/Dog.vue')
const routes = [
    {path:'/',name:'cat',component:Cat},
    {path:'/dog',name:'dog',component:Dog}
];

export default routes