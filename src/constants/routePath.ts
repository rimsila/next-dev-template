const stockManagement = '/stock-management';
type IRoute = {
  login?: any;
  home?: any;
  forgotPassword?: any;
  register?: any;
  userManagement?: any;
  supplierManagement?: any;
  stockManagement: {
    index?: any;
    stockList?: any;
    stockListSecond?: any;
  };
};

export const ROUTE: IRoute = {
  login: '/auth/login',
  home: '/',
  forgotPassword: '/auth/forgot-password',
  register: '/auth/register',
  userManagement: '/user-management',
  supplierManagement: '/supplier-management',
  stockManagement: {
    index: stockManagement,
    stockList: `${stockManagement}/stock-list`,
    stockListSecond: `${stockManagement}/stock-list-second`,
  },
};
