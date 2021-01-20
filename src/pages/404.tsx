import { httpCommon } from '@/constants/http';
import { useRoute } from '@/hooks/useRoute';
import { Button, message, Result } from 'antd';
import React, { useEffect } from 'react';
import { useModel } from 'umi';

const NoFoundPage: React.FC = () => {
  const { initialState } = useModel('@@initialState');
  const { goBack, goHome } = useRoute();
  useEffect(() => {
    goBack();
    setTimeout(() => {
      message.warn(httpCommon.protected, 3);
    }, 500);
  }, [goBack, initialState?.currentUser]);

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
