/**
 * all @route will be use for path name, route and permission
 * please test and inform before change any value of it
 */

const stockManagement = '/stock-management';
const settings = '/settings';
const auth = '/auth';
const dashboard = '/dashboard';
const userManagement = '/user-management';
const supplierManagement = '/supplier-management';
const productManagement = '/product-management';
const accountManagement = '/account-management';
const reportManagement = '/report-management';
const hrManagement = '/hr-management';
const saleManagement = '/sale-management';
const pos = '/online-pos';
const live = '/live';
const readLive = '/read-live';
const readComment = '/read-comment';
const printInvoice = '/print-invoice';
const report = '/report';
const setting = '/setting';
const country = '/country';
const province = '/province';
const district = '/district';
const commune = '/commune';
const village = '/village';
const user = '/user';

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

  //* ----------- supplierManagement --------------
  userManagement: {
    index: userManagement,
    user: {
      index: userManagement + user,
    },
    permission: `${userManagement}/permission`,
  },

  //* ----------- supplierManagement --------------
  supplierManagement: {
    index: supplierManagement,
    supplier: {
      index: `${supplierManagement}/supplier`,
    },
    company: {
      index: `${supplierManagement}/company`,
    },
  },

  //* ----------- stockManagement --------------
  stockManagement: {
    index: stockManagement,
    stockList: `${stockManagement}/stock-list`,
    stockListSecond: `${stockManagement}/stock-list-second`,
  },

  //* ----------- productManagement --------------
  productManagement: {
    index: productManagement,
    product: {
      index: `${productManagement}/product`,
    },
    category: {
      index: `${productManagement}/category`,
    },
  },

  //* ----------- accountManagement --------------
  accountManagement: {
    index: accountManagement,
  },

  //* ----------- reportManagement --------------
  reportManagement: {
    index: reportManagement,
  },

  //* ----------- hrManagement --------------
  hrManagement: {
    index: hrManagement,
  },

  //* ----------- saleManagement --------------
  saleManagement: {
    index: saleManagement,
    pos: {
      index: saleManagement + pos,
    },
    live: {
      index: saleManagement + live,
      readLive: {
        index: saleManagement + live + readLive,
      },
      readComment: {
        index: saleManagement + live + readComment,
      },
      printInvoice: {
        index: saleManagement + live + printInvoice,
      },
      report: {
        index: saleManagement + live + report,
      },
      setting: {
        index: saleManagement + live + setting,
      },
    },
  },

  //* ----------- setting --------------
  setting: {
    index: setting,
    country: {
      index: setting + country,
    },
    province: {
      index: setting + province,
    },
    district: {
      index: setting + district,
    },
    commune: {
      index: setting + commune,
    },
    village: {
      index: setting + village,
    },
  },
};

type INewRoute = Partial<typeof ROUTE>;
const newRoute: INewRoute = { ...ROUTE };
/**
 *
 * @param exclude
 * getPermissions with exclude props not used
 */
export const getPermissions = (exclude: boolean = true) => {
  if (exclude) {
    delete newRoute.home;
    delete newRoute.auth;
  }
  return newRoute || {};
};

export const PERMISSIONS = getPermissions();
