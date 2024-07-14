export default [
  {
    component: 'CNavItem',
    name: 'داشبورد',
    to: '/',
    icon: 'cil-speedometer',
  },
  {
    component: 'CNavTitle',
    name: 'مدیریت محتوا',
  },
  {
    component: 'CNavItem',
    name: 'محصولات',
    icon: 'cil-list',
    items: [
      {
        component: 'CNavItem',
        name: 'اضافه کردن',
        to: '/add-product',
      },
      {
        component: 'CNavItem',
        name: 'مدیریت',
        to: '/manage-product',
      },
    ],
  },
  {
    component: 'CNavItem',
    name: 'ارز ها',
    icon: 'cil-list',
    items: [
      {
        component: 'CNavItem',
        name: 'اضافه کردن',
        to: '/add-currency',
      },
      {
        component: 'CNavItem',
        name: 'مدیریت',
        to: '/manage-currency',
      },
    ],
  },
  {
    component: 'CNavItem',
    name: 'پلن ها',
    icon: 'cil-list',
    items: [
      {
        component: 'CNavItem',
        name: 'اضافه کردن',
        to: '/add-plan',
      },
      {
        component: 'CNavItem',
        name: 'مدیریت',
        to: '/manage-plan',
      },
    ],
  },
  {
    component: 'CNavItem',
    name: 'ماینر ها',
    icon: 'cil-list',
    items: [
      {
        component: 'CNavItem',
        name: 'اضافه کردن',
        to: '/add-miner',
      },
      {
        component: 'CNavItem',
        name: 'مدیریت',
        to: '/manage-miner',
      },
    ],
  },
  {
    component: 'CNavItem',
    name: 'پست ها',
    icon: 'cil-list',
    items: [
      {
        component: 'CNavItem',
        name: 'اضافه کردن',
        to: '/add-post',
      },
      {
        component: 'CNavItem',
        name: 'مدیریت',
        to: '/manage-post',
      },
    ],
  },
  {
    component: 'CNavItem',
    name: 'مدیریت صفحه ها',
    icon: 'cil-list',
    to: '/manage-page',
  },
  {
    component: 'CNavTitle',
    name: 'گزارشات',
  },
  {
    component: 'CNavItem',
    name: 'تراکنش ها',
    icon: 'cil-list',
    to: '/transactions',
  },
  {
    component: 'CNavItem',
    name: 'ماینر های فعال',
    icon: 'cil-list',
    to: '/miners',
  },
  {
    component: 'CNavItem',
    name: 'ماینر های قبلی',
    icon: 'cil-list',
    to: '/minersdone',
  },

  {
    component: 'CNavTitle',
    name: 'مدیریت امور مشتریان',
  },
  {
    component: 'CNavItem',
    name: 'تیکت ها',
    icon: 'cil-list',
    to: '/tickets',
  },
  {
    component: 'CNavItem',
    name: 'چت ها',
    icon: 'cil-list',
    to: '/chats',
  },
  {
    component: 'CNavItem',
    name: 'کاربران',
    icon: 'cil-list',
    to: '/users',
  },
  {
    component: 'CNavItem',
    name: 'تایید مدارک',
    icon: 'cil-list',
    items: [
      {
        component: 'CNavItem',
        name: 'کارت ملی',
        to: '/verify-melli',
      },
      {
        component: 'CNavItem',
        name: 'کارت بانکی',
        to: '/verify-bank',
      },
    ],
  },
  {
    component: 'CNavGroup',
    name: 'تایید های مالی',
    to: '/base',
    icon: 'cil-calendar',
    items: [
      {
        component: 'CNavItem',
        name: '  واریز',
        to: '/deposit',
      },
      {
        component: 'CNavItem',
        name: ' برداشت',
        to: '/withdraw',
      },
    ],
  },
  {
    component: 'CNavGroup',
    name: 'تاریخچه',
    to: '/base',
    icon: 'cil-calendar',
    items: [
      {
        component: 'CNavItem',
        name: ' برداشت و واریز',
        to: '/transactions',
      },
      {
        component: 'CNavItem',
        name: ' سود',
        to: '/profits',
      },
    ],
  },


  {
    component: 'CNavItem',
    name: 'خروج',
    to: '/logout',
    icon: 'cil-calculator',
  },
]
