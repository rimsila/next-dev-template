import { httpCommon } from '@/constants/http';
import { useRoute } from '@/hooks/useRoute';
import { getToken } from '@next-dev/core/es/authority';
import { Button, message, Result } from 'antd';
import React, { useEffect } from 'react';
import { useModel } from 'umi';

const NoFoundPage: React.FC = () => {
  const { initialState } = useModel('@@initialState');
  const { goHome } = useRoute();
  useEffect(() => {
    if (!getToken()?.token && !initialState?.currentUser) {
      goHome();
      message.warn(httpCommon.protected, 3);
    }
  }, [goHome, initialState?.currentUser]);

  return (
    <Result
      status="404"
      title="404"
      subTitle={httpCommon.page404}
      extra={
        <Button type="primary" onClick={() => goHome()}>
          Back Home
        </Button>
      }
    />
  );
};

export default NoFoundPage;
