import { httpCommon } from '@/constants/http';
import { Button, Result } from 'antd';
import React from 'react';

export default () => {
  return (
    <Result
      status="404"
      title="404"
      subTitle={httpCommon.page404}
      extra={<Button type="primary">hello permission page</Button>}
    />
  );
};
