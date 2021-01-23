import Footer from '@/components/Footer';
import RightContent from '@/components/RightContent';
import type { Settings as LayoutSettings } from '@ant-design/pro-layout';
import { PageLoading } from '@ant-design/pro-layout';
import validateMessages from '@next-core/validation';
import '@next-dev/component/es/style/index.less';
import { ConfigProvider } from 'antd';
import React from 'react';
import type { RunTimeLayoutConfig } from 'umi';
import { history } from 'umi';
import defaultSettings from '../config/defaultSettings';
import Error403 from './components/exception/403';
import { ROUTE } from './constants/routePath';
import { usersApi } from './services/users';
import { getToken } from './utils/authority';

export const initialStateConfig = {
  loading: <PageLoading />,
};

(function init() {})();

export function render(oldRender) {
  oldRender();
}

export async function getInitialState(): Promise<{
  settings?: LayoutSettings;
  currentUser?: API.IUser;
  fetchUserInfo?: () => Promise<API.IUser | undefined>;
}> {
  const fetchUserInfo = async () => {
    try {
      const currentUser = await usersApi.getProfile();
      return currentUser;
    } catch (error) {
      history.push(ROUTE.auth.login);
      return undefined;
    }
  };

  // If it is a login page, do not execute

  if (getToken()?.token && history.location.pathname !== ROUTE.auth.login) {
    const currentUser = await fetchUserInfo();
    return {
      fetchUserInfo,
      currentUser,
      settings: defaultSettings,
    };
  }

  return {
    fetchUserInfo,
    settings: defaultSettings,
  };
}

const appRoot = (props: any) => {
  const { routes } = props;
  return React.createElement(ConfigProvider, {
    form: { validateMessages },
    input: {
      autoComplete: 'off',
    },
    children: React.cloneElement(props.children, {
      ...props.children.props,
      routes,
    }),
  });
};

export function rootContainer(container: any) {
  return React.createElement(appRoot, {}, container);
}

export const layout: RunTimeLayoutConfig = ({ initialState, loading }) => {
  return {
    rightContentRender: () => <RightContent />,
    disableContentMargin: true,
    loading,
    footerRender: () => <Footer />,
    onPageChange: () => {
      //* If not log in, redirect to login
      if (
        !getToken()?.token &&
        history.location.pathname !== ROUTE.auth.login &&
        history.location.pathname !== ROUTE.auth.register &&
        history.location.pathname !== ROUTE.auth.forgotPassword
      ) {
        history.push(ROUTE.auth.login);
      }
      //* these page it protected after logged in,
      if (
        getToken()?.token &&
        (history.location.pathname === ROUTE.auth.login ||
          history.location.pathname === ROUTE.auth.register ||
          history.location.pathname === ROUTE.auth.forgotPassword)
      ) {
        history.push('/');
      }
    },
    menuHeaderRender: undefined,
    // Custom 403 page for unAccessible
    unAccessible: <Error403 />,
    ...initialState?.settings,
  };
};
