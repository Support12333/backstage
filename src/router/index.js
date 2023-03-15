import Vue from 'vue'
import VueRouter from "vue-router";

Vue.use(VueRouter)

export const routes = [
    {
        path: '/',
        component: () => import('@views/login/index.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            return { top: 0 };
        }
    },
    routes
})

export default router