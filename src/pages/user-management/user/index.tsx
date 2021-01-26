import NextLayout from '@/components/NextLayout';
import { httpCommon } from '@/constants/http';
import { Button, Result } from 'antd';
import React from 'react';

export default () => {
  return (
    <NextLayout>
      <Result
        status="404"
        title="404"
        subTitle={httpCommon.page404}
        extra={<Button type="primary">hello user page</Button>}
      />
    </NextLayout>
  );
};
