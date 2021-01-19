import RightContent from '@/components/RightContent';
import type { BasicLayoutProps } from '@ant-design/pro-layout';
import { PageLoading } from '@ant-design/pro-layout';
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import React from 'react';
import type { RunTimeLayoutConfig } from 'umi';
import { history } from 'umi';
import defaultSettings from '../config/defaultSettings';
import { ROUTE } from './constants/routePath';
import { usersApi } from './services/users';
import theme from './themes';
import { getToken } from './utils/authority';

export const initialStateConfig = {
  loading: <PageLoading />,
};

/**
 * init core/hook
 */
(function init() {})();

export function render(oldRender) {
  oldRender();
}

// provider here
export function rootContainer(container: React.ReactNode) {
  return React.createElement(
    ThemeProvider,
    // @ts-ignore
    {
      theme,
    },
    React.createElement(CssBaseline, null),
    container,
  );
}

export async function getInitialState(): Promise<{
  settings?: BasicLayoutProps;
  currentUser?: API.IUser;
  fetchUserInfo?: () => Promise<API.IUser | undefined>;
}> {
  const fetchUserInfo = async () => {
    try {
      const currentUser = await usersApi.getProfile();
      return currentUser;
    } catch (error) {
      history.push(ROUTE.login);
      return undefined;
    }
  };

  // If it is a login page, do not execute

  if (getToken()?.token && history.location.pathname !== ROUTE.login) {
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

export const layout: RunTimeLayoutConfig = ({ initialState }) => {
  return {
    rightContentRender: () => <RightContent />,
    disableContentMargin: true,
    // footerRender: () => <Footer />,
    onPageChange: () => {
      //* If not log in, redirect to login
      if (
        !getToken()?.token &&
        history.location.pathname !== ROUTE.login &&
        history.location.pathname !== ROUTE.register &&
        history.location.pathname !== ROUTE.forgotPassword
      ) {
        history.push(ROUTE.login);
      }
      //* these page it protected after logged in,
      if (
        getToken()?.token &&
        (history.location.pathname === ROUTE.login ||
          history.location.pathname === ROUTE.register ||
          history.location.pathname === ROUTE.forgotPassword)
      ) {
        history.push('/');
      }
    },
    menuHeaderRender: undefined,
    // Custom 403 page
    unAccessible: <div>unAccessible</div>,
    ...initialState?.settings,
  };
};
