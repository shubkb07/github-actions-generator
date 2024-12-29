import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ContactView from '../views/ContactView.vue'
import ServicesView from '../views/ServicesView.vue'
import DashboardView from '../views/DashboardView.vue'
import LoginView from '../views/LoginView.vue'
import LogoutView from '../views/LogoutView.vue'
import DashboardAppView from '../views/DashboardAppView.vue'
import DashboardAppInView from '../views/DashboardAppInView.vue'
import DashboardAppEditView from '../views/DashboardAppEditView.vue'
import GuideView from '../views/GuideView.vue'
import NotFoundView from '../views/NotFoundView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView,
  },
  {
    path: '/services',
    name: 'services',
    component: ServicesView,
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardView,
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginView,
  },
  {
    path: '/logout',
    name: 'Logout',
    component: LogoutView,
  },
  {
    path: '/dashboard/app',
    name: 'Dashboard App',
    component: DashboardAppView,
  },
  {
    path: '/dashboard/app/:add_id',
    name: 'Dashboard App View',
    component: DashboardAppInView,
    props: true, // Allows route params to be passed as props
  },
  {
    path: '/dashboard/app/:add_id/edit',
    name: 'Dashboard App Edit',
    component: DashboardAppEditView,
  },
  {
    path: '/guide',
    name: 'guide',
    component: GuideView,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: NotFoundView.vue,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
