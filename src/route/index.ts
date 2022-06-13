import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: () => import('../pages/HomeView.vue') },
    { path: '/sign-in', component: () => import('../pages/GoogleSignIn.vue') }
  ]
});
export default router;