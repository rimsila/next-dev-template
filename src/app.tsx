import Footer from '@/components/Footer';
import RightContent from '@/components/RightContent';
import type { Settings as LayoutSettings } from '@ant-design/pro-layout';
import { PageLoading } from '@ant-design/pro-layout';
import { message } from 'antd';
import React from 'react';
import type { RunTimeLayoutConfig } from 'umi';
import { history } from 'umi';
import defaultSettings from '../config/defaultSettings';
import { ROUTE } from './constants/routePath';
import { usersApi } from './services/users';
import { getToken } from './utils/auth';

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
      message.error('Incorrect user please login again!', 8);
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
      //* If logged in, redirect to home

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
    // 自定义 403 页面
    unAccessible: <div>unAccessible</div>,
    ...initialState?.settings,
  };
};
