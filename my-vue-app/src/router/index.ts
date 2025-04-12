import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AppForm from '../components/AppForm.vue'
import AppForm1 from '../components/AppForm1.vue'
import AppForm2 from '../components/AppForm2.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/contact',
    name:'Form',
    component: AppForm
  },
  {
    path: '/login',
    name:'Form1',
    component: AppForm1
  },
  {
    path: '/register',
    name:'Form2',
    component: AppForm2
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router