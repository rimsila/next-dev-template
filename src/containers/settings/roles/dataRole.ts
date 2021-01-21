import { ROUTE } from '@/constants/routePath';

const mergeValues = (param: { v?: string; children?: any[] }) => {
  const { v, children } = param || {};
  return {
    title: v,
    value: v,
    key: v,
    children,
  };
};
export const roles = [
  {
    ...mergeValues({
      v: 'admin',
      children: [
        mergeValues({ v: ROUTE.supplierManagement.index }),
        mergeValues({ v: ROUTE.userManagement.index }),

        mergeValues({
          v: ROUTE.stockManagement.index,
          children: [
            mergeValues({ v: ROUTE.stockManagement.stockList }),
            mergeValues({ v: ROUTE.stockManagement.stockListSecond }),
          ],
        }),
      ],
    }),
  },
];
