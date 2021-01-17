/**
 * Permission definition
 */

import { ROUTE } from '../src/constants/routePath';

//example role crud
export const Permissions = {
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

export default [
  {
    path: '/auth',
    layout: false,
    routes: [
      {
        path: '/auth',
        routes: [
          {
            name: 'register',
            path: ROUTE.register,
            component: './auth/register',
          },
          {
            name: 'forgot-password',
            path: '/auth/forgot-password',
            component: './auth/forgotPassword',
          },

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
    path: ROUTE.stockManagement,
    name: 'Stock Management',
    icon: 'smile',
    component: './Welcome',
  },
  {
    path: ROUTE.userManagement,
    name: 'User Management',
    icon: 'smile',
    component: './Welcome',
  },
  {
    path: ROUTE.supplierManagement,
    name: 'Supplier Management',
    icon: 'smile',
    component: './Welcome',
  },
  {
    path: ROUTE.accountManagement,
    name: 'Account Management',
    icon: 'smile',
    component: './Welcome',
  },
  {
    path: ROUTE.reportManagement,
    name: 'Report Management',
    icon: 'smile',
    component: './Welcome',
  },

  {
    path: ROUTE.home,
    redirect: ROUTE.stockManagement,
  },
  {
    component: './404',
  },
];
