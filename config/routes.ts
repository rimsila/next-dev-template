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
  routes?: any[];
};

const pathAccess = (params: IPathAccess) => {
  const { path, isCom, isName, subStringName = 1, routes = [] } = params || {};
  const component = isCom ? { component: `.${path}` } : {};
  const name = isName ? { name: path.substring(subStringName) } : {};
  const newRoutes = { routes: routes?.length > 0 ? [...routes] : [] };

  return { access: path, path, ...component, ...name, ...newRoutes?.routes };
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
    ...pathAccess({ path: ROUTE.userManagement.index }),
    routes: [
      {
        name: 'User',
        ...pathAccess({ path: ROUTE.userManagement.user.index, isCom: true }),
      },
      {
        ...pathAccess({ path: ROUTE.userManagement.permission, isCom: true }),
        name: 'Permission',
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
    routes: [
      {
        ...pathAccess({ path: ROUTE.supplierManagement.company.index, isCom: true }),
        name: 'company',
      },
      {
        ...pathAccess({
          path: ROUTE.supplierManagement.supplier.index,
          isCom: true,
          routes: [
            {
              ...pathAccess({ path: ROUTE.saleManagement.live.readLive.index, isName: true }),
            },
            {
              ...pathAccess({ path: ROUTE.saleManagement.live.readComment.index, isName: true }),
            },
          ],
        }),
        name: 'supplier',
      },
    ],
  },
  //* ----------- productManagement --------------
  {
    ...pathAccess({ path: ROUTE.productManagement.index }),
    name: 'product Management',
    icon: 'smile',
    routes: [
      {
        ...pathAccess({ path: ROUTE.productManagement.product.index, isCom: true }),
        name: 'product',
      },
      {
        ...pathAccess({ path: ROUTE.productManagement.category.index, isCom: true }),
        name: 'category',
      },
    ],
  },
  //* ----------- accountManagement --------------
  {
    ...pathAccess({ path: ROUTE.accountManagement.index }),
    name: 'account Management',
    icon: 'smile',
  },

  //* ----------- reportManagement --------------
  {
    ...pathAccess({ path: ROUTE.reportManagement.index }),
    name: 'report Management',
    icon: 'smile',
  },

  //* ----------- hrManagement --------------
  {
    ...pathAccess({ path: ROUTE.hrManagement.index }),
    name: 'hr Management',
    icon: 'smile',
  },
  // //* ----------- stockManagement --------------
  // {
  //   name: 'Stock Management',
  //   ...pathAccess({ path: ROUTE.stockManagement.index }),
  //   icon: 'smile',
  //   routes: [
  //     {
  //       ...pathAccess({ path: ROUTE.stockManagement.stockList }),
  //       name: 'Stock List',
  //       component: './Welcome',
  //     },
  //     {
  //       ...pathAccess({ path: ROUTE.stockManagement.stockListSecond }),
  //       name: 'Stock List1',
  //       component: './Welcome',
  //     },
  //     {
  //       component: './404',
  //     },
  //   ],
  // },
  //* ----------- Sale Management  --------------
  {
    path: ROUTE.saleManagement.index,
    name: 'Sale Management',
    icon: 'smile',
    access: ROUTE.saleManagement.index,
    routes: [
      {
        name: 'POS Management',
        ...pathAccess({ path: ROUTE.saleManagement.pos.index }),
      },
      {
        name: 'Live Management',
        ...pathAccess({
          path: ROUTE.saleManagement.live.index,
        }),
        routes: [
          {
            ...pathAccess({
              path: ROUTE.saleManagement.live.readLive.index,
              isCom: true,
            }),
            name: 'readLive',
          },
          {
            ...pathAccess({ path: ROUTE.saleManagement.live.readComment.index }),
            name: 'readComment',
          },
          {
            ...pathAccess({ path: ROUTE.saleManagement.live.printInvoice.index }),
            name: 'printInvoice',
          },
          {
            ...pathAccess({ path: ROUTE.saleManagement.live.report.index }),
            name: 'report',
          },
          {
            ...pathAccess({ path: ROUTE.saleManagement.live.setting.index }),
            name: 'setting',
          },
        ],
      },

      {
        component: './404',
      },
    ],
  },
  //* ----------- Settings --------------
  {
    path: ROUTE.setting.index,
    name: 'Settings',
    icon: 'smile',
    access: ROUTE.setting.index,
    routes: [
      {
        ...pathAccess({ path: ROUTE.setting.country.index, isCom: true, isName: true }),
      },
      {
        ...pathAccess({ path: ROUTE.setting.province.index, isCom: true, isName: true }),
      },
      {
        ...pathAccess({ path: ROUTE.setting.district.index, isCom: true, isName: true }),
      },
      {
        ...pathAccess({ path: ROUTE.setting.commune.index, isCom: true, isName: true }),
      },
      {
        ...pathAccess({ path: ROUTE.setting.village.index, isCom: true, isName: true }),
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
