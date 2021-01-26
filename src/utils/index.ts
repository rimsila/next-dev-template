/* eslint-disable prefer-const */
import type { IBestAFSRoute } from '@umijs/plugin-layout';
import { CURRENCY_TYPE } from '../constants/currency';
import { getLastUrl } from './stringRegex';

/**
 *
 * @param param
 * @param param.isKh2usd toggle convert usd and kh default usd2kh
 * @param param.khEx default exchange usd2kh 1 usd = 4000
 * @param param.usd usd amount input
 * @param param.kh kh amount input
 *
 */
type ConCurrency = {
  isKh2usd?: boolean;
  usd?: number;
  khEx?: number;
  kh?: number | undefined;
};
export const conCurrency = (param: ConCurrency) => {
  const { isKh2usd, usd = 0, khEx = 4000, kh = 0 } = param;
  const usd2khFormula = usd * khEx;
  const kh2usdFormula = kh / khEx;
  return isKh2usd ? kh2usdFormula : usd2khFormula;
};

/**
 * get total amount base on currency type usd and khr
 * @param param
 *   @param currencyType currency type ex: USD
 *   @param usd amount usd
 *  @param kh amount khr
 */
export const getMoneyBaseCurrency = (param: {
  currencyType: string;
  usd?: number;
  kh?: number;
}) => {
  const { currencyType, usd = 0, kh = 0 } = param;

  let finalCurrency: number = 0;
  if (CURRENCY_TYPE.usd === currencyType) {
    finalCurrency = conCurrency({ isKh2usd: true, kh: Number(kh) }) + Number(usd);
  }

  if (CURRENCY_TYPE.kh === currencyType) {
    finalCurrency = conCurrency({ usd: Number(usd) }) + Number(kh);
  }

  return finalCurrency;
};

type IPathAccess = {
  path: string;
  isCom?: boolean;
  isName?: boolean;
  isCommon?: boolean;
  isMain?: boolean;
  icon?: string;
  is404?: boolean;
  routes?: any[];
  redirect?: string;
} & IBestAFSRoute;
/**
 *
 * @param path is pathname string
 * merge access ,component and path has the same path to get short code
 */
export const pathAccess = (params: IPathAccess) => {
  let {
    path,
    isMain,
    isCommon = true,
    isCom,
    isName,
    icon,
    is404,
    routes = [],
    redirect,
    ...rest
  } = params || {};

  //* isCommon all are include
  if (isCommon || isMain) {
    isCom = !isMain;
    isName = true;
  }

  const getName = { name: getLastUrl(path)?.finalRouteName };

  const com404 = is404 ? { component: './404' } : {};
  const component = isCom ? { component: `.${path}` } : {};
  const name = isName ? getName : {};
  const neRoutes = routes.length > 0 ? { routes } : {};

  const normalRoute = {
    access: path,
    path,
    icon: icon || 'smile',
    ...component,
    ...name,
    ...com404,
    ...neRoutes,
    ...rest,
  };

  const redirectRoute = {
    path,
    redirect,
  };

  if (isMain && redirect) {
    return [redirectRoute, normalRoute];
  }
  return normalRoute;
};
/**
 *
 * @param path func map subRoute
 */
export const mapPathAccess = (path: any[] = []) => {
  if (path.length > 0) {
    return path?.map((v) => pathAccess({ path: v.path }));
  }
  return [];
};

export const getOnlyValue = (values: any) => {
  // eslint-disable-next-line no-empty-pattern
  Object.keys(values).reduce(({}, key) => {
    if (
      values[key] === undefined ||
      values[key] === '' ||
      values[key] === null ||
      values[key] === 'undefined'
    ) {
      delete values[key];
    }
    return values;
  });

  return values;
};
export const getOnlyArrValue = (arr: any) => arr.filter((el: null) => el != null);
