import NextSignIn from '@next-component/Auth/SignIn';
import React, { memo } from 'react';
import { useModel } from 'umi';
import css from './login.less';

type logInProps = any;

const LogIn: React.FC<logInProps> = memo(() => {
  const model = useModel('useAuth', (m) => ({
    onSubmitLogin: m.onSubmitLogin,
    loadingLogin: m.loadingLogin,
  }));

  return (
    <div className={css['auth_page']}>
      <NextSignIn
        {...{
          onFinish: model.onSubmitLogin,
          next: {
            submitBtnProps: {
              loading: model.loadingLogin,
            },
          },
        }}
      />
    </div>
  );
});

export default LogIn;
