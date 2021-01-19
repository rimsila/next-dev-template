import { IBestAFSRoute } from '@umijs/plugin-layout';
/**
 * Permission definition
 */
import { ROUTE } from '../src/constants/routePath';

//example role crud
export const Permissions = {
  stockManagement: {
    index: ROUTE.stockManagement.substring(1),
  },
  template: {
    dashboard: {
      // index: 'template.dashboard',
    },
    sample: {
      index: 'template.sample',
      list: {
        index: 'template.sample.list',
        edit: 'template.sample.list.edit',
        delete: 'template.sample.list.delete',
      },
    },
  },
};

export const routes: IBestAFSRoute[] = [
  {
    path: ROUTE.stockManagement,
    name: 'Stock Management',
    icon: 'smile',
    component: './Welcome',
  },
  {
    path: '/auth',
    layout: false,
    routes: [
      {
        path: '/auth',
        routes: [
          // {
          //   name: 'register',
          //   path: ROUTE.register,
          //   component: './auth/register',
          // },
          // {
          //   name: 'forgot-password',
          //   path: '/auth/forgot-password',
          //   component: './auth/forgotPassword',
          // },

          {
            name: 'login',
            path: '/auth/login',
            component: './auth/login',
          },
          {
            component: './404',
          },
        ],
      },
    ],
  },
  {
    path: ROUTE.home,
    redirect: ROUTE.stockManagement,
  },
  {
    component: './404',
  },
];
