
import { createRouter,  createWebHashHistory } from 'vue-router'
import layout from '@/view/layout/layout.vue'
import mapContent1 from '@/view/map1.vue'
import mapContent2 from '@/view/map2.vue'
import mapContent3 from '@/view/map3.vue'


import setupEmit from '@/view/setupEmit.vue'




const routes: any = [
    {
        path: '/',
        redirect:'/map1'
    },{
        path: '/layout',
        component: layout,
        meta: {
            keepAlive: true
        },
        children: [{
            path: '/map1',
            component: mapContent1,
            meta: {
                keepAlive: true
            },
        }, {
            path: '/map2',
            component: mapContent2,
            meta: {
                keepAlive: true
            },

        }, {
            path: '/map3',
            component: mapContent3,
            meta: {
                keepAlive: true
            },
        }]
    },{
        path:'/emit',
        component:setupEmit
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router