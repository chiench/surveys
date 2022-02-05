import { createRouter, createWebHistory } from "vue-router";

import Dashboard from '../view/Dashboard.vue';
import Login from '../view/Login.vue';
import Register from '../view/Register.vue';

const routes = [

    {
        path: '/',
        name: 'Dashboard',
        component: Dashboard
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },

    {
        path: '/register',
        name: 'Register',
        component: Register
    }


];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;