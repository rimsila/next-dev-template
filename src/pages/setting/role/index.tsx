import NextLayout from '@/components/NextLayout';
import Roles from '@/containers/settings/roles';
import React from 'react';

export default () => {
  return (
    <NextLayout
      {...{
        contentInnerStyle: {},
        cardProps: {
          layout: 'default',
        },
      }}
    >
      <Roles />
    </NextLayout>
  );
};
