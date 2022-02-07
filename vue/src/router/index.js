import { createRouter, createWebHistory } from "vue-router";

import Dashboard from '../view/Dashboard.vue';
import Login from '../view/Login.vue';
import Register from '../view/Register.vue';
import Layout from '../components/Layout.vue';
import AuthLayout from '../components/AuthLayout.vue';
import Surveys from '../view/Surveys.vue';
import store from '../store';

const routes = [

    {
        path: '/',
        name: 'Home',
        redirect: '/dashboard',
        component: Layout,
        meta: { requiresAuth: true },
        children: [{
                path: '/dashboard',
                name: 'dashboard',
                component: Dashboard,
            },
            {
                path: '/surveys',
                name: 'Surveys',
                component: Surveys,

            },

        ]
    },
    {
        path: "/auth",
        redirect: "/login",
        name: "Auth",
        component: AuthLayout,
        meta: { isGuest: true },
        children: [{
                path: '/login',
                name: 'Login',
                component: Login
            },

            {
                path: '/register',
                name: 'Register',
                component: Register
            }
        ],
    },



];

const router = createRouter({
    history: createWebHistory(),
    routes
});


router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth && !store.state.user.token) {
        next({ name: 'Login' })
    } else if (store.state.user.token && to.meta.isGuest) {
        next({ name: 'dashboard' })
    } else {
        next();
    }
});

export default router;
