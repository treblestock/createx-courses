import { createRouter, createWebHistory } from 'vue-router'





const routes = [
  {
    path: '/',
    component: () => import('@/components/view/InitialLayout.vue'),
    children: [
      {
        path: '/Main', alias: '',
        name: 'Main',
        props: true,
        component: () => import('@/components/view/Main.vue'),
        children: [
          
        ],
      },
    ],
  },
  
  // NotFound
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/components/view/NotFound.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || {top: 0}
  },
})



export { router }

