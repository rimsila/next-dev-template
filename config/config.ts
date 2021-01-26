// https://umijs.org/config/
import { join } from 'path';
import { defineConfig } from 'umi';
import { COMPANY_NAME } from '../src/constants';
import defaultSettings from './defaultSettings';
import { routes } from './routes';

const {
  REACT_APP_ENV,
  REACT_APP_BASE_API_URL,
  REACT_APP_BASE_API_URL_PRE,
  REACT_APP_BASE_API_URL_TEST,
} = process.env;

export default defineConfig({
  //* ---------- all env define here ---------
  define: {
    REACT_APP_ENV,
    REACT_APP_BASE_API_URL,
    REACT_APP_BASE_API_URL_TEST,
    REACT_APP_BASE_API_URL_PRE,
  },
  hash: true,
  antd: {},
  layout: {
    name: COMPANY_NAME,
    locale: true,
    siderWidth: 240,
    ...defaultSettings,
  },
  locale: {
    // default: 'en-US',
    antd: true,
    // default true, when it is true, will use `navigator.language` overwrite default
    baseNavigator: true,
  },
  dynamicImport: {
    loading: '@ant-design/pro-layout/es/PageLoading',
  },
  targets: {
    ie: 11,
  },
  // umi routes: https://umijs.org/docs/routing
  routes,
  // Theme for antd: https://ant.design/docs/react/customize-theme
  theme: {
    'primary-color': defaultSettings.primaryColor,
  },
  esbuild: {},
  title: false,
  ignoreMomentLocale: true,
  // proxy: proxy[REACT_APP_ENV || 'dev'],
  manifest: {
    basePath: '/',
  },
  alias: {
    themes: join(__dirname, '../src/themes'),
    '@config': join(__dirname, '../config'),
    // '@modules': join(__dirname, './src/modules'),
    '@next-core': join(__dirname, '../node_modules/@next-dev/core/es'),
    '@next-hooks': join(__dirname, '../node_modules/@next-dev/hooks/es'),
    '@next-component': join(__dirname, '../node_modules/@next-dev/component/es'),
  },
  lessLoader: {
    javascriptEnabled: true,
  },
});
