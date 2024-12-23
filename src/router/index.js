// src/router/index.js

import { createRouter, createWebHistory } from 'vue-router';
import WelcomeComponent from './../views/Welcome.vue';
import DashboardComponent from './../views/Dashboard.vue';
import DashboardAppComponent from './../views/DashboardApp.vue';

const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: WelcomeComponent,
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardComponent,
  },
  {
    path: '/dashboard/app/:add_id',
    name: 'DashboardApp',
    component: DashboardAppComponent,
    props: true, // Allows route params to be passed as props
  },
  // Optional: Redirect unknown routes to Welcome page
  {
    path: '/:pathMatch(.*)*',
    redirect: '/',
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
