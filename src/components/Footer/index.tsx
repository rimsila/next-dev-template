import { COMPANY_NAME } from '@/constants';
import { DefaultFooter } from '@ant-design/pro-layout';
import React from 'react';

export default () => <DefaultFooter copyright={`2021 ${COMPANY_NAME}`} links={[]} />;
// {
//   key: 'Ant Design Pro',
//   title: 'Ant Design Pro',
//   href: 'https://pro.ant.design',
//   blankTarget: true,
// },
// {
//   key: 'github',
//   title: <GithubOutlined />,
//   href: 'https://github.com/ant-design/ant-design-pro',
//   blankTarget: true,
// },
// {
//   key: 'Ant Design',
//   title: 'Ant Design',
//   href: 'https://ant.design',
//   blankTarget: true,
// },
