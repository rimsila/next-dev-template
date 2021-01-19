import { Result } from 'antd';
import React from 'react';

const Error403 = () => {
  return (
    <Result
      status="403"
      title="403"
      subTitle="Sorry, you do not have permission to access this page."
    />
  );
};
export default Error403;
