import { CURRENCY_TYPE } from '@/constants/currency';

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
