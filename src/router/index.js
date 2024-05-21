import { createRouter, createWebHistory } from 'vue-router'

import DefaultLayout from '@/layouts/DefaultLayout'
import UserLayout from '@/layouts/UserLayout'
const routes = [
  {
    path: '/',
    name: 'Pages',
    children: [

      {
        path: '404',
        name: 'Page404',
        component: () => import('@/views/pages/Page404'),
      },

      {
        path: '500',
        name: 'Page500',
        component: () => import('@/views/pages/Page500'),
      },
      {
        path: 'login',
        name: 'Login',
        component: () => import('@/views/pages/Login'),
      },
      {
        path: 'register',
        name: 'Register',
        component: () => import('@/views/pages/Register'),
      },
      {
        path: '',
        name: 'index',
        component: () => import('@/views/pages/Index'),
      },
      {
        path: 'logout',
        name: 'logout',
        component: () => import('@/views/pages/Logout'),
      },
    ],
  },
  {
    path: '/',
    name: 'Home',
    component: DefaultLayout,
    redirect: '/',
    children: [
      {
        path: '/dashboard',

        component: () => import('@/views/dashboard/Dashboard.vue'),
      },
      {
        path: '/profile',
        name: 'Profile',
        component: () => import('@/views/pages/Profile.vue'),
      },
      {
        path: '/plans',

        component: () => import('@/views/pages/Plans.vue'),
      },

      {
        path: '/plan',

        component: () => import('@/views/pages/Plan.vue'),
      },
      {
        path: '/miners',

        component: () => import('@/views/pages/miners.vue'),
      },
      {
        path: '/miner',

        component: () => import('@/views/pages/miner.vue'),
      },
      {
        path: '/transactions',
        name: 'transactions',
        component: () => import('@/views/pages/Transactions.vue'),
      },

      {
        path: '/profits',

        component: () => import('@/views/pages/Profits.vue'),
      },
      {
        path: '/users',
        name: 'Users',
        component: () => import('@/views/pages/ManageUser.vue'),
      },
      {
        path: '/jobs',

        component: () => import('@/views/pages/Jobs.vue'),
      },
      {
        path: '/charge/:id',

        component: () => import('@/views/pages/Charge.vue'),
      },
      {
        path: '/withdraw/:id',
        name: 'withdraw',
        component: () => import('@/views/pages/Withdraw.vue'),
      },
      {
        path: '/cw/:id',

        component: () => import('@/views/pages/ChargeWithdraw.vue'),
      },
      {
        path: '/ticket',

        component: () => import('@/views/pages/Ticket.vue'),
      },
      {
        path: '/balances',

        component: () => import('@/views/pages/Balances.vue'),
      },
      {
        path: '/transactions',
        name: 'Transactions',
        component: () => import('@/views/pages/Transactions.vue'),
      },
      {
        path: '/miners',
        name: 'Miners',
        component: () => import('@/views/pages/miners.vue'),
      },
      {
        path: '/minersdone',
        name: 'minersdone',
        component: () => import('@/views/pages/minersdone.vue'),
      },
    ],
  },

]

const router = createRouter({
  // eslint-disable-next-line no-undef
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    // always scroll to top
    return { top: 0 }
  },
})

export default router
