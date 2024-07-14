export default [
  {
    component: 'CNavItem',
    name: 'پروفایل',
    to: '/user/profile',
    icon: 'cil-user',
  },
  {
    component: 'CNavItem',
    name: 'موجودی ها',
    to: '/user/balances',
    icon: 'cil-dollar',
  },
  {
    component: 'CNavItem',
    name: 'پلن ها',
    icon: 'cil-list',
    items: [
      {
        component: 'CNavItem',
        name: ' اضافه کردن پلن',
        to: '/user/plan',
      },
      {
        component: 'CNavItem',
        name: 'پلن های من',
        to: '/user/plans',
      },
    ],
  },
  {
    component: 'CNavItem',
    name: 'ماینر ها',
    icon: 'cil-star',
    items: [
      {
        component: 'CNavItem',
        name: 'اضافه کردن ماینر',
        to: '/user/miner',
      },
      {
        component: 'CNavItem',
        name: 'ماینر های من',
        to: '/user/miners',
      },
    ],
  },
  {
    component: 'CNavGroup',
    name: 'تاریخچه',
    to: '/user/base',
    icon: 'cil-calendar',
    items: [
      {
        component: 'CNavItem',
        name: 'پرداخت و واریز',
        to: '/user/transactions',
      },

    ],
  },
  {
    component: 'CNavGroup',
    name: 'موجودی ها',
    to: '/user/buttons',
    icon: 'cil-cursor',
  },

  /*  {
      component: 'CNavItem',
      name: 'شارژ حساب',
      to: '/user/charge',
      icon: 'cil-chart-pie',
    },
    {
      component: 'CNavItem',
      name: 'برداشت',
      to: '/user/withdraw',
      icon: 'cil-chart-pie',
    },
  */
  {
    component: 'CNavItem',
    name: 'تیکت',
    to: '/user/ticket',
    icon: 'cil-envelope-open',
  },
  {
    component: 'CNavItem',
    name: 'خروج',
    to: '/',
    icon: 'cil-calculator',
  },
]
