import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: () => import('../pages/HomeView.vue') },
    { path: '/sign-in', component: () => import('../pages/GoogleSignIn.vue') },
    { path: '/about', component: () => import('../pages/About.vue') },
    { path: '/settings', component: () => import('../pages/Settings.vue') },
  ]
});
export default router;