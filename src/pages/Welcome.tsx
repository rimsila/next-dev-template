import { ROUTE } from '@/constants/routePath';
import { PageContainer } from '@ant-design/pro-layout';
import { Button, Card } from 'antd';
import React from 'react';
import { Access, useAccess } from 'umi';

export default (): React.ReactNode => {
  const access = useAccess();
  console.log('access', access[ROUTE?.settings?.role?.index]);

  return (
    <PageContainer>
      <Card>
        <Access accessible={access[ROUTE?.settings?.role?.index]}>
          <Button size="small" type="primary">
            Your Are Admin Role
          </Button>
        </Access>
        {!access[ROUTE?.settings?.role?.index] && (
          <Button size="small" type="primary">
            Your Are User Role1
          </Button>
        )}
      </Card>
    </PageContainer>
  );
};
