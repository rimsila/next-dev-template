import Error403 from '@/components/exception/403';
import NextLayout from '@/components/NextLayout';
import { COMPANY_NAME } from '@/constants';
import { ROUTE } from '@/constants/routePath';
import { HeartTwoTone, SmileTwoTone } from '@ant-design/icons';
import { PageLoading } from '@ant-design/pro-layout';
import { Typography } from 'antd';
import React from 'react';
import { Access, useAccess, useModel } from 'umi';

export default (): React.ReactNode => {
  const access = useAccess();
  const { loading } = useModel('@@initialState');
  if (loading) return <PageLoading />;
  return (
    <Access accessible={access[ROUTE.dashboard.index]} fallback={<Error403 />}>
      <NextLayout>
        <Typography.Title level={2} style={{ textAlign: 'center' }}>
          <SmileTwoTone /> Welcome {COMPANY_NAME}
          &nbsp;
          <HeartTwoTone twoToneColor="#eb2f96" /> You
        </Typography.Title>
      </NextLayout>
    </Access>
  );
};
