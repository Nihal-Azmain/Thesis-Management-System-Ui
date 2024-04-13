import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
      children: [
        {
          path: 'login',
          name: 'login',
          component: () => import('../views/LoginView.vue'),
        },
        {
          path: 'register',
          name: 'register',
          component: () => import('../views/RegisterView.vue'),
        },
        {
          path: 'activate_account',
          name: 'activate-account',
          component: () => import('../views/ActivateAccountView.vue'),
        },
        {
          path: 'reset_password',
          name: 'reset-password',
          component: () => import('../views/ResetPasswordView.vue'),
        },
        {
          path: 'notice',
          name: 'notice',
          component: () => import('../views/NoticeBoardView.vue'),
        },
        {
          path: '',
          name: 'home-page',
          component: () => import('../views/HomePageView.vue'),
        },
        {
          path: '',
          name: 'admin',
          component: () => import('../views/HomePageView.vue'),
        },
      ],
    },
    {
      path: '/:pathMatch(.*)',
      redirect: { name: 'home' },
    },
  ],
})

export default router
