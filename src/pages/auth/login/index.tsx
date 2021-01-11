import NextLayout from '@/components/NextLayout';
import { ROUTE } from '@/constants/routePath';
import NextSignIn from '@next-component/Auth/SignIn';
import React, { memo } from 'react';
import { useModel } from 'umi';

type logInProps = any;

const LogIn: React.FC<logInProps> = memo(() => {
  const model = useModel('useAuth', (m) => ({
    onSubmitLogin: m.onSubmitLogin,
    loadingLogin: m.loadingLogin,
  }));

  return (
    <NextLayout>
      <NextSignIn
        {...{
          onFinish: model.onSubmitLogin,
          next: {
            forgotPassPath: ROUTE.forgotPassword,
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
    </NextLayout>
  );
});

export default LogIn;
