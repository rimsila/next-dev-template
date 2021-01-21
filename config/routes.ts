import { IBestAFSRoute } from '@umijs/plugin-layout';
import { ROUTE } from '../src/constants/routePath';

/**
 *
 * @param path is pathname string
 * merge access ,component and path has the same path to get short code
 */
type IPathAccess = {
  path: string;
  isCom?: boolean;
  isName?: boolean;
  subStringName?: number;
};

const pathAccess = (params: IPathAccess) => {
  const { path, isCom, isName, subStringName = 1 } = params || {};
  const component = isCom ? { component: `.${path}` } : {};
  const name = isName ? { name: path.substring(subStringName) } : {};
  return { access: path, path, ...component, ...name };
};

export const routes: IBestAFSRoute[] = [
  //* ----------- dashboard --------------
  {
    ...pathAccess({ path: ROUTE.dashboard.index, isCom: true, isName: true }),
    icon: 'smile',
  },
  //* ----------- UserManagement --------------
  {
    name: 'User Management',
    icon: 'smile',
    component: './Welcome',
    ...pathAccess({ path: ROUTE.userManagement.index }),
    routes: [
      {
        ...pathAccess({ path: ROUTE.stockManagement.stockList }),
        name: 'Stock List',
        component: './Welcome',
      },
      {
        ...pathAccess({ path: ROUTE.stockManagement.stockListSecond }),
        name: 'Stock List1',
        component: './Welcome',
      },
      {
        component: './404',
      },
    ],
  },

  //* ----------- stockManagement --------------
  {
    name: 'Stock Management',
    ...pathAccess({ path: ROUTE.stockManagement.index }),
    icon: 'smile',
    routes: [
      {
        ...pathAccess({ path: ROUTE.stockManagement.stockList }),
        name: 'Stock List',
        component: './Welcome',
      },
      {
        ...pathAccess({ path: ROUTE.stockManagement.stockListSecond }),
        name: 'Stock List1',
        component: './Welcome',
      },
      {
        component: './404',
      },
    ],
  },

  //* ----------- supplierManagement --------------
  {
    ...pathAccess({ path: ROUTE.supplierManagement.index }),
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
        ...pathAccess({ path: ROUTE.settings.role.index }),
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
