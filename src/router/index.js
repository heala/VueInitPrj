import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Login = () => import('../view/Login')
const Home = () => import("../view/Home")
const Editor = () => import("../view/article/Editor")
const ArticleDetail = () => import('../view/article/ArticleDetail')
const SearchResult = () => import('../view/article/SearchResult')
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
        path: '/edit',
        component: Editor
    }, {
        path: '/detail',
        component: ArticleDetail
    }, {
        path: '/result',
        component: SearchResult
    }
]

const router = new VueRouter({
    routes,
    linkActiveClass: 'active',
})
export default router
