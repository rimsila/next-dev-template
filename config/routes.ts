//* can't alias import here

import { IBestAFSRoute } from '@umijs/plugin-layout';
import { ROUTE } from '../src/constants/routePath';
import { getLastUrl, toCapitalize } from '../src/utils/stringRegex';

type IPathAccess = {
  path: string;
  isCom?: boolean;
  isName?: boolean;
  isCommon?: boolean;
  isMain?: boolean;
  isMainCom?: boolean;
  icon?: string;
  is404?: boolean;
  routes?: any[];
};
/**
 *
 * @param path is pathname string
 * merge access ,component and path has the same path to get short code
 */
const pathAccess = (params: IPathAccess) => {
  let { path, isMain, isMainCom, isCommon = true, isCom, isName, icon, is404, routes = [] } =
    params || {};

  //* isCommon all are include
  if (isCommon || isMain || isMainCom) {
    isCom = isMain || isMainCom ? false : true;
    isName = true;
    is404 = isMainCom;
  }

  const getName = { name: toCapitalize(getLastUrl(path).lastUrlName) };

  const com404 = is404 ? { component: './404' } : {};
  const component = isCom ? { component: `.${path}` } : {};
  const name = isName ? getName : {};
  const neRoutes = routes.length > 0 ? { routes } : {};

  return {
    access: path,
    path,
    icon: icon || 'smile',
    ...component,
    ...name,
    ...com404,
    ...neRoutes,
  };
};

export const routes: IBestAFSRoute[] = [
  //* ----------- dashboard --------------
  pathAccess({ path: ROUTE.dashboard.index }),

  //* ----------- UserManagement --------------
  {
    ...pathAccess({
      path: ROUTE.userManagement.index,
      isMain: true,
      routes: [
        pathAccess({ path: ROUTE.userManagement.user.index }),
        pathAccess({ path: ROUTE.userManagement.permission }),
      ],
    }),
  },
  //* ----------- supplierManagement --------------
  {
    ...pathAccess({ path: ROUTE.supplierManagement.index, isMain: true }),

    routes: [
      {
        ...pathAccess({ path: ROUTE.supplierManagement.company.index }),
        name: 'company',
      },
      {
        ...pathAccess({
          path: ROUTE.supplierManagement.supplier.index,
          isCom: true,
        }),
        name: 'supplier',
      },
    ],
  },
  //* ----------- productManagement --------------
  {
    ...pathAccess({ path: ROUTE.productManagement.index, isMain: true }),
    routes: [
      pathAccess({ path: ROUTE.productManagement.product.index }),
      pathAccess({ path: ROUTE.productManagement.category.index }),
    ],
  },
  //* ----------- accountManagement --------------

  pathAccess({ path: ROUTE.accountManagement.index, isMain: true }),

  //* ----------- reportManagement --------------
  {
    ...pathAccess({ path: ROUTE.reportManagement.index, isMain: true }),
  },

  //* ----------- hrManagement --------------
  {
    ...pathAccess({ path: ROUTE.hrManagement.index, isMain: true }),
  },
  //* ----------- Sale Management  --------------
  {
    ...pathAccess({ path: ROUTE.saleManagement.index, isMain: true }),
    routes: [
      pathAccess({ path: ROUTE.saleManagement.pos.index, isMain: true }),
      {
        ...pathAccess({
          path: ROUTE.saleManagement.live.index,
          isMain: true,
        }),
        routes: [
          pathAccess({
            path: ROUTE.saleManagement.live.readLive.index,
            isCom: true,
          }),
          pathAccess({ path: ROUTE.saleManagement.live.readComment.index }),
          pathAccess({ path: ROUTE.saleManagement.live.printInvoice.index }),
          pathAccess({ path: ROUTE.saleManagement.live.report.index }),
          pathAccess({ path: ROUTE.saleManagement.live.setting.index }),
        ],
      },
    ],
  },
  //* ----------- Settings --------------
  {
    ...pathAccess({ path: ROUTE.setting.index, isMain: true }),
    routes: [
      pathAccess({ path: ROUTE.setting.country.index }),
      pathAccess({ path: ROUTE.setting.province.index }),
      pathAccess({ path: ROUTE.setting.district.index }),
      pathAccess({ path: ROUTE.setting.commune.index }),
      pathAccess({ path: ROUTE.setting.village.index }),
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
    redirect: ROUTE.dashboard.index,
  },

  {
    component: './404',
  },
];
