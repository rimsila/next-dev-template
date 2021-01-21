export * from '@next-core/constants';

export const IS_NODE_PROD = process.env.node === 'production';
export const IS_NODE_DEV = process.env.node === 'development';

export const IS_DEV = REACT_APP_ENV === 'dev';
export const IS_TEST = REACT_APP_ENV === 'test';
export const IS_PROD = !IS_DEV && !IS_TEST && IS_NODE_PROD;

export const BASE_API_URL = IS_PROD ? REACT_APP_BASE_API_URL : REACT_APP_BASE_API_URL_TEST;

export const COMPANY_NAME = 'Next Dev';
export const ICON_FONT_URL = '//at.alicdn.com/t/font_2221049_8szkpgxzd38.js';
