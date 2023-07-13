import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,

  },
  {
    path: '/about',
    name: 'about',
    redirect:"/about/ni/中国",
    component: () => import('../views/AboutView.vue'),

    children: [
      {
        path: 'ni/:name',
        component: () => import('../views/NewView.vue'),
      },
      {
        path: 'n1i',
        component: () => import('../views/New1View.vue'),
      }

    ]

  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
