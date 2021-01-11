import { UserInfo } from '@/components';
import { PageContainer } from '@ant-design/pro-layout';
import { Button } from 'antd';
import React from 'react';

export default () => {
  return (
    <>
      <PageContainer
        style={{ padding: 20 }}
        tabProps={{
          tabPosition: 'left',
        }}
        tabList={[
          {
            tab: 'User Info',
            key: 'userInfo',
            children: <UserInfo />,
            style: { padding: 25 },
          },
        ]}
        extra={[<Button key="3">sss</Button>, <Button key="2">ff</Button>]}
      />
    </>
  );
};
