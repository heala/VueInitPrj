import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Login = () => import('../Login')
const Home = () => import("../view/Home")
const Pannel = () => import("../view/Pannel")
const Category = () => import("../view/Category")
const Cart = () => import("../view/Cart")
const My = () => import("../view/My")

const routes = [
    {
        path: '',
        redirect: '/login'
    }, {
        path: '/login',
        component: Login
    }, {
        path: '/home',
        component: Home,
        children: [
            {
                path: '',
                redirect: '/pannel'
            },
            {
                path: '/pannel',
                component: Pannel
            }, {
                path: '/category',
                component: Category
            }
            , {
                path: '/cart',
                component: Cart
            }
            , {
                path: '/my',
                component: My
            }
        ]
    }
]

const router = new VueRouter({
    routes,
    linkActiveClass: 'active'
})

export default router