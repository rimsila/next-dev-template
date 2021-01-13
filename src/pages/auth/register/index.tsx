import NextLayout from '@/components/NextLayout';
import NextSignUp from '@next-component/Auth/SignUp';
import React, { memo } from 'react';
import { useModel } from 'umi';

type indexProps = any;

const index: React.FC<indexProps> = memo(() => {
  const { onSubmitRegister, loadingRegister } = useModel('useAuth', (model) => ({
    onSubmitRegister: model.onSubmitRegister,
    loadingRegister: model.loadingRegister,
  }));
  return (
    <>
      <NextLayout>
        <NextSignUp
          {...{
            onFinish: onSubmitRegister,
            next: {
              isHasSocial: false,
              signUpBtnProps: {
                loading: loadingRegister,
              },
            },
          }}
        />
      </NextLayout>
    </>
  );
});

export default index;
