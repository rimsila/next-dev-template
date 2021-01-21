import { IBestAFSRoute } from '@umijs/plugin-layout';
import { ROUTE } from '../src/constants/routePath';

/**
 *
 * @param path is pathname string
 * merge access and path to get short code
 */

const pathAccess = (path: string) => {
  return { access: path, path };
};

export const routes: IBestAFSRoute[] = [
  //* ----------- stockManagement --------------
  {
    name: 'Stock Management',
    ...pathAccess(ROUTE.stockManagement.index),
    icon: 'smile',
    routes: [
      {
        ...pathAccess(ROUTE.stockManagement.stockList),
        name: 'Stock List',
        component: './Welcome',
      },
      {
        ...pathAccess(ROUTE.stockManagement.stockListSecond),
        name: 'Stock List1',
        component: './Welcome',
      },
      {
        component: './404',
      },
    ],
  },

  //* ----------- UserManagement --------------
  {
    name: 'User Management',
    icon: 'smile',
    component: './Welcome',
    ...pathAccess(ROUTE.userManagement.index),
  },

  //* ----------- supplierManagement --------------
  {
    ...pathAccess(ROUTE.supplierManagement.index),
    name: 'Supplier Management',
    icon: 'smile',
    component: './Welcome',
  },

  //* ----------- Settings --------------
  {
    path: ROUTE.settings.index,
    name: 'Settings',
    icon: 'smile',
    access: ROUTE.settings.index,
    routes: [
      {
        ...pathAccess(ROUTE.settings.role.index),
        name: 'Roles Management',
        component: './settings/role',
      },

      {
        component: './404',
      },
    ],
  },

  //* ----------- @auth --------------
  {
    path: '/auth',
    layout: false,
    routes: [
      {
        path: '/auth',
        routes: [
          {
            name: 'register',
            path: ROUTE.auth.register,
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
    path: ROUTE.home,
    redirect: ROUTE.stockManagement.stockList,
  },

  {
    component: './404',
  },
];
