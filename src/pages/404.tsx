import { httpCommon } from '@/constants/http';
import { ROUTE } from '@/constants/routePath';
import { getToken } from '@next-dev/core/es/authority';
import { Button, message, Result } from 'antd';
import React, { useEffect } from 'react';
import { history, useModel } from 'umi';

const NoFoundPage: React.FC = () => {
  const { initialState } = useModel('@@initialState');
  useEffect(() => {
    if (!getToken()?.token && !initialState?.currentUser) {
      history.push(ROUTE.login);
      message.warn(httpCommon.protected, 3);
    }
  }, [initialState?.currentUser]);

  return (
    <Result
      status="404"
      title="404"
      subTitle={httpCommon.page404}
      extra={
        <Button type="primary" onClick={() => history.push('/')}>
          Back Home
        </Button>
      }
    />
  );
};

export default NoFoundPage;
