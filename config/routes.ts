//* can't alias import here only use src
// https://github.com/wetrial/wetrial-template/blob/master/config/routes.ts
import type { IBestAFSRoute } from '@umijs/plugin-layout';
import { ROUTE } from '../src/constants/routePath';
import { mapPathAccess, pathAccess } from '../src/utils';

/**
 * I use pathAccess for short code if u want to see full in src/.umi/core/routes.ts
 */

export const routes: IBestAFSRoute[] = [
  //* ----------- UserManagement --------------
  {
    path: ROUTE.home,
    flatMenu: true,
    routes: [
      {
        path: ROUTE.home,
        redirect: ROUTE.dashboard.index,
      },
      //* ----------- dashboard --------------
      pathAccess({ path: ROUTE.dashboard.index }),

      ...(pathAccess({
        isMain: true,
        path: ROUTE.userManagement.index,
        redirect: ROUTE.userManagement.user.index,
        routes: [
          pathAccess({ path: ROUTE.userManagement.user.index }),
          pathAccess({ path: ROUTE.userManagement.permission.index }),
        ],
      }) as []),

      //* ----------- supplierManagement --------------
      ...(pathAccess({
        isMain: true,
        path: ROUTE.supplierManagement.index,
        redirect: ROUTE.supplierManagement.company.index,
        routes: [
          pathAccess({ path: ROUTE.supplierManagement.company.index }),
          pathAccess({
            path: ROUTE.supplierManagement.supplier.index,
          }),
        ],
      }) as []),

      //* ----------- productManagement --------------
      ...(pathAccess({
        path: ROUTE.productManagement.index,
        isMain: true,
        redirect: ROUTE.productManagement.product.index,
        routes: [
          pathAccess({ path: ROUTE.productManagement.product.index }),
          pathAccess({ path: ROUTE.productManagement.category.index }),
        ],
      }) as []),

      //* ----------- accountManagement --------------
      pathAccess({ path: ROUTE.accountManagement.index }),

      //* ----------- reportManagement --------------

      pathAccess({ path: ROUTE.reportManagement.index }),

      //* ----------- hrManagement --------------

      pathAccess({ path: ROUTE.hrManagement.index }),

      //* ----------- Sale Management  --------------
      ...(pathAccess({
        path: ROUTE.saleManagement.index,
        isMain: true,
        redirect: ROUTE.saleManagement.pos.index,
        routes: [
          pathAccess({ path: ROUTE.saleManagement.pos.index }),
          ...(pathAccess({
            path: ROUTE.saleManagement.live.index,
            isMain: true,
            redirect: ROUTE.saleManagement.live.readLive.index,
            routes: [
              pathAccess({
                path: ROUTE.saleManagement.live.readLive.index,
              }),
              ...mapPathAccess([
                {
                  path: ROUTE.saleManagement.live.readComment.index,
                },
                { path: ROUTE.saleManagement.live.printInvoice.index },
                { path: ROUTE.saleManagement.live.report.index },
                { path: ROUTE.saleManagement.live.setting.index },
              ]),
            ],
          }) as []),
        ],
      }) as []),
      //* ----------- Settings --------------
      {
        ...pathAccess({
          path: ROUTE.setting.index,
          isMain: true,
          routes: [
            ...mapPathAccess([
              { path: ROUTE.setting.country.index },
              { path: ROUTE.setting.province.index },
              { path: ROUTE.setting.district.index },
              { path: ROUTE.setting.commune.index },
              { path: ROUTE.setting.village.index },
            ]),
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
                ...mapPathAccess([
                  { path: ROUTE.auth.register },
                  { path: ROUTE.auth.forgotPassword },
                  { path: ROUTE.auth.login },
                ]),
              ],
            },
          ],
        }),
      },

      {
        component: './404',
      },
    ],
  },
];
