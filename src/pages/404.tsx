// import { Button, message, Result } from 'antd';
import React from 'react';

const NoFoundPage: React.FC = () => {
  // useEffect(() => {
  //   if (!getToken()?.token && !initialState?.currentUser) {
  //     goHome();
  //     message.warn(httpCommon.protected, 3);
  //   }
  // }, [goHome, initialState?.currentUser]);

  return <h1 style={{ color: 'red' }}>Back Home</h1>;
};

export default NoFoundPage;
