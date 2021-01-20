import { ROUTE } from '@/constants/routePath';

const mergeValues = (v: string, children?: any[]) => {
  return {
    title: v,
    value: v,
    key: v,
    children,
  };
};
export const roles = [
  {
    ...mergeValues('admin'),
    children: [
      mergeValues(ROUTE.supplierManagement.index),
      mergeValues(ROUTE.userManagement.index),
      mergeValues(ROUTE.stockManagement.index, [
        mergeValues(ROUTE.stockManagement.stockList),
        mergeValues(ROUTE.stockManagement.stockListSecond),
      ]),
    ],
  },
];
