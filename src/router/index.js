import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Services from '@/views/Services.vue'
import Album from '@/views/Album.vue'
import About from '@/views/About.vue'
import Contact from '@/views/Contact.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: { index: 0 } 
    },
    {
      path: '/services',
      name: 'services',
      component: Services,
      meta: { index: 1 } 
    },
    {
      path: '/album',
      name: 'album',
      component: Album,
      meta: { index: 2 } 
    },
    {
      path: '/about',
      name: 'about',
      component: About,
      meta: { index: 3 } 
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact,
      meta: { index: 4 } 
    },
  ]
})

export default router
 