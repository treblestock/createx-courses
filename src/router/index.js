import { createRouter, createWebHistory } from 'vue-router'


function propsParser(route) {
  return Object.entries(route.params).reduce((props, [key, value]) =>
     // required to ignore params auto fitted by router,
     // which were not provided by developer passing params: {}
     value  ? (props[key] = JSON.parse(value), props) : props 
  , {})
}


const routes = [
  {
    path: '/',
    component: () => import('@/components/view/InitialLayout.vue'),
    children: [
      {
        path: '/UI',
        name: 'UI',
        props: propsParser,
        component: () => import('@/components/view/UI.vue'),
      },
      {
        path: '/Main', alias: '',
        name: 'main',
        props: propsParser,
        component: () => import('@/components/view/Main.vue'),
      },
      {
        path: 'courses',
        props: propsParser,
        name: 'courses',
        component: () => import('@/components/view/Courses.vue'),
      },
      {
        path: 'courses/:courseId',
        name: 'course',
        props: propsParser,
        component: () => import('@/components/view/Course.vue'),
      },
      {
        path: 'events',
        name: 'events',
        props: propsParser,
        component: () => import('@/components/view/Events.vue'),
      },
      {
        path: 'events/:eventId',
        name: 'event',
        props: propsParser,
        component: () => import('@/components/view/Event.vue'),
      },
      {
        path: 'blogPosts',
        name: 'blogPosts',
        props: propsParser,
        component: () => import('@/components/view/BlogPosts.vue'),
      },
      {
        path: 'blogPosts/:blogPostId',
        name: 'blogPost',
        props: propsParser,
        component: () => import('@/components/view/BlogPost.vue'),
      },
      {
        path: 'contacts',
        name: 'contacts',
        props: propsParser,
        component: () => import('@/components/view/Contacts.vue'),
      },
      {
        path: 'about',
        name: 'about',
        props: propsParser,
        component: () => import('@/components/view/About.vue'),
      },
    ],
  },
  
  // NotFound
  {
    path: '/:pathMatch(.*)*',
    name: 'notFound',
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

