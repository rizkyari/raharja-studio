import { createRouter, createWebHistory } from 'vue-router'
import content from '@/pages/layouts/content/_index.vue'


const routes = [
    {
        path: '/',
        component: content,
        children : [
            {
                path: '',
                name: 'Home',
                component: () => import('@/modules/home/page/_index.vue')
            },
            {
                path: '',
                name: 'List Studio',
                component: () => import('@/modules/list-studio/page/_index.vue')
            },
            {
                path: '/faq',
                name: 'FAQ',
                component: () => import('@/modules/faq/page/_index.vue')
            },
            {
                path: '/about-us',
                name: 'About Us',
                component: () => import('@/modules/about-us/page/_index.vue')
            },
            {
                path: '/terms-and-services',
                name: 'Terms',
                component: () => import('@/modules/terms-service/page/_index.vue')
            },
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;