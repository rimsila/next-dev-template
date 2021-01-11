import NextSignUp from '@next-component/Auth/SignUp';
import React, { memo } from 'react';
import { useModel } from 'umi';
import css from './register.less';

type indexProps = any;

const index: React.FC<indexProps> = memo(() => {
  const { onSubmitRegister, loadingRegister } = useModel('useAuth', (model) => ({
    onSubmitRegister: model.onSubmitRegister,
    loadingRegister: model.loadingRegister,
  }));
  return (
    <>
      <div className={css.auth_page}>
        <NextSignUp
          {...{
            onFinish: onSubmitRegister,
            next: {
              isHasSocial: false,
              signUpBtnProps: {
                loading: loadingRegister,
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
      </div>
    </>
  );
});

export default index;
