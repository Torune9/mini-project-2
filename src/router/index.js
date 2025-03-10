import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PortofolioView from '@/views/PortofolioView.vue'
import ExperienceView from '@/views/ExperienceView.vue'
import AboutMeView from '@/views/AboutMeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about-me',
      component: AboutMeView,
    },
    {
      path : '/list-portofolio',
      name : 'list',
      component : PortofolioView
    },
    {
      path : '/experience',
      name : 'experience',
      component : ExperienceView
    }
  ],
})

export default router
