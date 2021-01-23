//* can't alias import here

import { IBestAFSRoute } from '@umijs/plugin-layout';
import { ROUTE } from '../src/constants/routePath';
import { pathAccess } from '../src/utils';

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
    ...pathAccess({
      path: ROUTE.supplierManagement.index,
      isMain: true,
      routes: [
        {
          ...pathAccess({ path: ROUTE.supplierManagement.company.index }),
        },

        pathAccess({
          path: ROUTE.supplierManagement.supplier.index,
        }),
      ],
    }),
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

  pathAccess({ path: ROUTE.accountManagement.index }),

  //* ----------- reportManagement --------------
  {
    ...pathAccess({ path: ROUTE.reportManagement.index }),
  },

  //* ----------- hrManagement --------------
  {
    ...pathAccess({ path: ROUTE.hrManagement.index }),
  },

  //* ----------- Sale Management  --------------
  {
    ...pathAccess({ path: ROUTE.saleManagement.index, isMain: true }),
    routes: [
      pathAccess({ path: ROUTE.saleManagement.pos.index }),
      {
        ...pathAccess({
          path: ROUTE.saleManagement.live.index,
          isMain: true,
        }),
        routes: [
          pathAccess({
            path: ROUTE.saleManagement.live.readLive.index,
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
    ...pathAccess({
      path: ROUTE.setting.index,
      isMain: true,
      routes: [
        pathAccess({ path: ROUTE.setting.country.index }),
        pathAccess({ path: ROUTE.setting.province.index }),
        pathAccess({ path: ROUTE.setting.district.index }),
        pathAccess({ path: ROUTE.setting.commune.index }),
        pathAccess({ path: ROUTE.setting.village.index }),
      ],
    }),
  },

  //* ----------- @auth --------------
  {
    ...pathAccess({
      path: ROUTE.auth.index,
      layout: false,
      isCommon: false,
      routes: [
        {
          path: ROUTE.auth.index,
          routes: [
            pathAccess({ path: ROUTE.auth.register }),
            pathAccess({ path: ROUTE.auth.forgotPassword }),
            pathAccess({ path: ROUTE.auth.login }),
          ],
        },
      ],
    }),
  },
  {
    path: ROUTE.home,
    redirect: ROUTE.dashboard.index,
  },
  {
    component: './404',
  },
];
