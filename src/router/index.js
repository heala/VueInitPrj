import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Login = () => import('../view/Login')
const Home = () => import("../view/Home")
const My = () => import("../view/My")
const routes = [
    {
        path: '',
        redirect: '/home'
    }, {
        path: '/login',
        component: Login
    }, {
        path: '/home',
        component: Home
    }, {
        path: '/my',
        component: My
    }
]

const router = new VueRouter({
    routes,
    linkActiveClass: 'active'
})

export default router
