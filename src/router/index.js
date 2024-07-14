import { createRouter, createWebHistory } from 'vue-router'

import DefaultLayout from '@/layouts/DefaultLayout'
import UserLayout from '@/layouts/UserLayout'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: DefaultLayout,
    children: [

      {
        path: 'chats',
        name: 's',
        component: () => import('@/views/pages/chats.vue'),
      },

      {
        path: 'chats/:uri',
        name: 'chats',
        component: () => import('@/views/pages/adminchats.vue'),
      },
      {
        path: 'usertoken/:id',
        name: 'usertoken',
        component: () => import('@/views/pages/UserToken.vue'),
      },
      {
        path: '/dashboard',
        name: 'Dashboard',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(
            /* webpackChunkName: "dashboard" */ '@/views/dashboard/Dashboard.vue'
          ),
      },
      {
        path: '/theme',
        name: 'Theme',
        redirect: '/theme/typography',
      },
      {
        path: '/add-currency',
        name: 'AddCurrency',
        component: () => import('@/views/pages/AddCurrency.vue'),
      },
      {
        path: '/manage-currency',
        name: 'ManageCurrency',
        component: () => import('@/views/pages/ManageCurrency.vue'),
      },
      {
        path: '/edit-currency/:id',
        name: 'EditCurrency',
        component: () => import('@/views/pages/EditCurrency.vue'),
      },

      {
        path: '/add-product',
        name: 'AddProduct',
        component: () => import('@/views/pages/AddProduct.vue'),
      },
      {
        path: '/manage-product',
        name: 'ManageProduct',
        component: () => import('@/views/pages/ManageProduct.vue'),
      },
      {
        path: '/edit-product/:id',
        name: 'EditProduct',
        component: () => import('@/views/pages/EditProduct.vue'),
      },
      {
        path: '/transactions',
        name: 'transactions',
        component: () => import('@/views/pages/Transactions.vue'),
      },

      {
        path: '/add-plan',
        name: 'AddPlan',
        component: () => import('@/views/pages/AddPlan.vue'),
      },
      {
        path: '/manage-plan',
        name: 'ManagePlan',
        component: () => import('@/views/pages/ManagePlan.vue'),
      },
      {
        path: '/edit-plan/:id',
        name: 'EditPlan',
        component: () => import('@/views/pages/EditPlan.vue'),
      },

      {
        path: '/add-miner',
        name: 'AddMiner',
        component: () => import('@/views/pages/AddMiner.vue'),
      },
      {
        path: '/manage-miner',
        name: 'ManageMiner',
        component: () => import('@/views/pages/ManageMiner.vue'),
      },
      {
        path: '/edit-miner/:id',
        name: 'EditMiner',
        component: () => import('@/views/pages/EditMiner.vue'),
      },

      {
        path: '/add-post',
        name: 'AddPost',
        component: () => import('@/views/pages/AddPost.vue'),
      },
      {
        path: '/manage-post',
        name: 'ManagePost',
        component: () => import('@/views/pages/ManagePost.vue'),
      },
      {
        path: '/edit-post/:id',
        name: 'EditPost',
        component: () => import('@/views/pages/EditPost.vue'),
      },
      {
        path: '/edit-page/:id',
        name: 'EditPage',
        component: () => import('@/views/pages/EditPage.vue'),
      },
      {
        path: '/manage-page',
        name: 'ManagePage',
        component: () => import('@/views/pages/ManagePage.vue'),
      },
      {
        path: '/plans',
        name: 'plans',
        component: () => import('@/views/pages/Plans.vue'),
      },

      {
        path: '/plan',
        name: 'plan',
        component: () => import('@/views/pages/Plan.vue'),
      },
      {
        path: '/miners',
        name: 'miners',
        component: () => import('@/views/pages/miners.vue'),
      },
      {
        path: '/miner',
        name: 'miner',
        component: () => import('@/views/pages/miner.vue'),
      },
      {
        path: '/verify-melli',
        name: 'VerifyMelli',
        component: () => import('@/views/pages/VerifyMelli.vue'),
      },
      {
        path: '/verify-bank',
        name: 'VerifyBank',
        component: () => import('@/views/pages/VerifyBank.vue'),
      },
      {
        path: '/deposit',
        name: 'deposit',
        component: () => import('@/views/pages/Deposit.vue'),
      },
      {
        path: '/withdraw',
        name: 'with',
        component: () => import('@/views/pages/Withdraw.vue'),
      },

      {
        path: '/profits',
        name: 'profits',
        component: () => import('@/views/pages/Profits.vue'),
      },
      {
        path: '/users',
        name: 'Users',
        component: () => import('@/views/pages/ManageUser.vue'),
      },
      {
        path: '/jobs',
        name: 'jobs',
        component: () => import('@/views/pages/Jobs.vue'),
      },
      {
        path: '/charge/:id',
        name: 'charge',
        component: () => import('@/views/pages/Charge.vue'),
      },

      {
        path: '/cw/:id',
        name: 'cw',
        component: () => import('@/views/pages/ChargeWithdraw.vue'),
      },
      {
        path: '/ticket',
        name: 'ticket',
        component: () => import('@/views/pages/Ticket.vue'),
      },
      {
        path: '/balances',
        name: 'balances',
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
      {
        path: '/tickets',

        component: () => import('@/views/pages/Tickets.vue'),
      },
      {
        path: '/tickets/:id',

        component: () => import('@/views/pages/Ticket.vue'),
      },
    ],
  },
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
        path: 'logout',
        name: 'logout',
        component: () => import('@/views/pages/Logout'),
      },
    ],
  },

  {
    path: '/user/',
    component: UserLayout,
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(
            /* webpackChunkName: "dashboard" */ '@/views/dashboard/Dashboard.vue'
          ),
      },
      {
        path: 'theme',
        name: 'Theme',
        redirect: 'theme/typography',
      },
      {
        path: 'profile',
        name: 'Profile',
        component: () => import('@/views/userpages/Profile.vue'),
      },
      {
        path: 'plans',
        name: 'plans',
        component: () => import('@/views/userpages/Plans.vue'),
      },
      {
        path: 'plan',
        name: 'plan',
        component: () => import('@/views/userpages/Plan.vue'),
      },
      {
        path: 'miners',
        name: 'miners',
        component: () => import('@/views/userpages/miners.vue'),
      },
      {
        path: 'miner',
        name: 'miner',
        component: () => import('@/views/userpages/miner.vue'),
      },
      {
        path: 'transactions',
        name: 'transactions',
        component: () => import('@/views/userpages/Transactions.vue'),
      },
      {
        path: 'profits',
        name: 'profits',
        component: () => import('@/views/userpages/Profits.vue'),
      },
      {
        path: 'jobs',
        name: 'jobs',
        component: () => import('@/views/userpages/Jobs.vue'),
      },
      {
        path: 'charge/:id',
        name: 'charge',
        component: () => import('@/views/userpages/Charge.vue'),
      },
      {
        path: 'withdraw/:id',
        name: 'withdraw',
        component: () => import('@/views/userpages/Withdraw.vue'),
      },
      {
        path: 'cw/:id',
        name: 'cw',
        component: () => import('@/views/userpages/ChargeWithdraw.vue'),
      },
      {
        path: 'ticket',
        name: 'ticket',
        component: () => import('@/views/userpages/Ticket.vue'),
      },
      {
        path: 'balances',
        name: 'balances',
        component: () => import('@/views/userpages/Balances.vue'),
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
