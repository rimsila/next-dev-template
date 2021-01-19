import { IBestAFSRoute } from '@umijs/plugin-layout';
import { ROUTE } from '../src/constants/routePath';

/**
 * Permission definition
 */

//example role crud
export const permissions = {
  stockManagement: {
    index: ROUTE.stockManagement.index.substring(1),
    stockList: ROUTE.stockManagement.stockList.substring(1),
    stockListSecond: ROUTE.stockManagement.stockListSecond.substring(1),
  },
  userManagement: {
    index: ROUTE.userManagement.substring(1),
  },
  supplierManagement: {
    index: ROUTE.supplierManagement.substring(1),
  },
};

export const routes: IBestAFSRoute[] = [
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
    path: ROUTE.stockManagement.index,
    name: 'Stock Management',
    icon: 'smile',
    access: permissions.stockManagement.index,
    routes: [
      {
        name: 'stock List',
        path: ROUTE.stockManagement.stockList,
        component: './Welcome',
        access: permissions.stockManagement.stockList,
      },
      {
        name: 'stock List1',
        path: ROUTE.stockManagement.stockListSecond,
        component: './Welcome',
        access: permissions.stockManagement.stockListSecond,
      },
      {
        component: './404',
      },
    ],
  },
  {
    path: ROUTE.userManagement,
    name: 'User Management',
    icon: 'smile',
    component: './Welcome',
    access: permissions.userManagement.index,
  },
  {
    path: ROUTE.supplierManagement,
    name: 'Supplier Management',
    icon: 'smile',
    component: './Welcome',
    access: permissions.supplierManagement.index,
  },

  {
    path: ROUTE.home,
    redirect: ROUTE.stockManagement.stockList,
  },
  {
    component: './404',
  },
];
