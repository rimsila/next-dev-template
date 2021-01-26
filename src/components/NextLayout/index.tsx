import type { ProCardProps } from '@ant-design/pro-card';
import ProCard from '@ant-design/pro-card';
import type { PageContainerProps } from '@ant-design/pro-layout';
import { PageContainer } from '@ant-design/pro-layout';
import type { CSSProperties, ReactNode } from 'react';
import React from 'react';
import css from './index.less';

type ILayout = {
  children?: ReactNode;
  contentInnerStyle?: CSSProperties;
  cardProps?: ProCardProps;
  isEmptyLayout?: boolean;
  isShowBreadcrumb?: boolean;
} & PageContainerProps;

export default (props: ILayout) => {
  const {
    children,
    contentInnerStyle,
    cardProps,
    isEmptyLayout,
    isShowBreadcrumb,
    ...rest
  } = props;
  const breadcrumb = isShowBreadcrumb ? {} : { breadcrumb: undefined };

  return (
    <PageContainer
      {...{
        ...breadcrumb,
        className: isEmptyLayout ? css.next_layout : '',
        title: isEmptyLayout,
        ...rest,
      }}
    >
      <ProCard direction="column" ghost gutter={[0]}>
        <ProCard
          layout="center"
          style={{
            minHeight: '60vh',
            ...contentInnerStyle,
          }}
          {...cardProps}
        >
          {children}
        </ProCard>
      </ProCard>
    </PageContainer>
  );
};
