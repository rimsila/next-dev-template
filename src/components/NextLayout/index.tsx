import ProCard from '@ant-design/pro-card';
import type { PageContainerProps } from '@ant-design/pro-layout';
import { PageContainer } from '@ant-design/pro-layout';
import type { CSSProperties, ReactNode } from 'react';
import React from 'react';
import css from './index.less';

type ILayout = {
  children?: ReactNode;
  contentInnerStyle?: CSSProperties;
} & PageContainerProps;

export default (props: ILayout) => {
  const { children, contentInnerStyle, ...rest } = props;
  return (
    <PageContainer
      {...{
        className: css.next_layout,
        title: false,
        pageHeaderRender: false,
        ...rest,
      }}
    >
      <ProCard direction="column" ghost gutter={[0]}>
        <ProCard
          layout="center"
          style={{
            height: '100vh',
            ...contentInnerStyle,
          }}
        >
          {children}
        </ProCard>
      </ProCard>
    </PageContainer>
  );
};
