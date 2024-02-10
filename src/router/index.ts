import { createRouter, createWebHistory } from 'vue-router'
import home from '@/views/homeView.vue'
import team from '@/views/teamView.vue'
import user from '@/views/userView.vue'
import search from '@/views/searchView.vue'
import userEidt from '@/views/UserEidtView.vue'
import searchResult from '../views/searchResultView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/team',
      name: 'team',
      component: team
    },
    {
      path: '/user',
      name: 'user',
      component: user
    },
    {
      path: '/user/eidt',
      name: 'userEidt',
      component: userEidt
    },
    {
      path: '/search',
      name: 'search',
      component: search
    },
    {
      path: '/searchResult',
      name: 'searchResult',
      component: searchResult
    }
  ]
})

export default router
