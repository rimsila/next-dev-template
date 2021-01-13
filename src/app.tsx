import Footer from '@/components/Footer';
import RightContent from '@/components/RightContent';
import type { Settings as LayoutSettings } from '@ant-design/pro-layout';
import { PageLoading } from '@ant-design/pro-layout';
import '@next-dev/component/es/style/index.less';
import React from 'react';
import type { RunTimeLayoutConfig } from 'umi';
import { history } from 'umi';
import defaultSettings from '../config/defaultSettings';
import { ROUTE } from './constants/routePath';
import { usersApi } from './services/users';
import { getToken } from './utils/authority';

export const initialStateConfig = {
  loading: <PageLoading />,
};

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
    footerRender: () => <Footer />,
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
