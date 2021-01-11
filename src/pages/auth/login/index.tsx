import Layout from '@/components/Layout';
import NextSignIn from '@next-component/Auth/SignIn';
import { clearToken } from '@next-dev/core/es/authority';
import React, { memo, useEffect } from 'react';
import { useModel } from 'umi';

type logInProps = any;

const LogIn: React.FC<logInProps> = memo(() => {
  const model = useModel('useAuth', (m) => ({
    onSubmitLogin: m.onSubmitLogin,
    loadingLogin: m.loadingLogin,
  }));

  useEffect(() => {
    clearToken();
  }, []);

  return (
    <Layout>
      <NextSignIn
        {...{
          onFinish: model.onSubmitLogin,
          next: {
            submitBtnProps: {
              loading: model.loadingLogin,
            },
            colProps: {
              xs: 24,
              sm: 16,
              md: 16,
              lg: 7,
              xl: 7,
              xxl: 8,
            },
          },
        }}
      />
    </Layout>
  );
});

export default LogIn;
