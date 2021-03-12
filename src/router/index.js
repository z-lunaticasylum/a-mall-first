import Vue from "vue"
import Router from "vue-router"

// 路由懒加载
const Home = () => import("views/home/Home")
const Category = () => import("views/category/Category")
const Car = () => import("views/car/Car")
const Profile = () => import("views/profile/Profile")

const Details = () => import("views/details/Details")

Vue.use(Router)

const routes = [
    {
        path: "",
        redirect: "/home",
    },
    {
        path: "/home",
        component: Home
    },
    {
        path: "/category",
        component: Category
    },
    {
        path: "/car",
        component: Car
    },
    {
        path: "/profile",
        component: Profile
    },
    {
        path: "/details/:iid",
        component: Details
    },
]

const router = new Router({
    routes,
    mode: "history"
})

const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error=> error)
}

export default router