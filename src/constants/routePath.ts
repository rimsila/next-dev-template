/**
 * all @route will be use for path name, route and permission
 */

const stockManagement = '/stock-management';
const settings = '/settings';
const auth = '/auth';
const dashboard = '/dashboard';

export const ROUTE = {
  dashboard: {
    index: dashboard,
  },
  settings: {
    index: settings,
    role: {
      index: `${settings}/role`,
    },
  },
  auth: {
    register: `${auth}/register`,
    login: `${auth}/login`,
    forgotPassword: `${auth}/forgot-password`,
  },

  home: '/',

  userManagement: {
    index: '/user-management',
  },
  supplierManagement: {
    index: '/supplier-management',
  },
  stockManagement: {
    index: stockManagement,
    stockList: `${stockManagement}/stock-list`,
    stockListSecond: `${stockManagement}/stock-list-second`,
  },
};

type INewRoute = Partial<typeof ROUTE>;
const newRoute: INewRoute = { ...ROUTE };

export const getPermissions = (exclude: boolean = true) => {
  if (exclude) {
    delete newRoute.home;
    delete newRoute.auth;
  }
  return newRoute || {};
};

export const PERMISSIONS = getPermissions();
