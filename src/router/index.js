import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import Admin from '@/components/Admin'
import Normal from '@/components/Normal'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'Login',
        component: Login
    }, {
        path: '/admin',
        name: 'Admin',
        component: Admin
    }, {
        path: '/user',
        name: 'Normal',
        component: Normal
    }]
})