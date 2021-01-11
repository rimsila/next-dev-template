import { PageLoading } from '@ant-design/pro-layout';
import ForgotPassword from '@next-component/Auth/ForgotPassword';
import React, { memo, useEffect } from 'react';
import { useHistory, useModel } from 'umi';
import css from './register.less';

type indexProps = any;

const index: React.FC<indexProps> = memo(() => {
  const {
    onResetPassword,
    loadingResetPassword,
    forgotEmailField,
    setState,
    errorResetPassword,
  } = useModel('useAuth', (model) => ({
    onResetPassword: model.onResetPassword,
    loadingResetPassword: model.loadingResetPassword,
    forgotEmailField: model.forgotEmailField,
    errorResetPassword: model.errorResetPassword,
    setState: model.setState,
  }));

  const history = useHistory();
  useEffect(() => {
    if (errorResetPassword) {
      setState({ forgotEmailField: '' });
    }
  }, [errorResetPassword, setState]);

  return (
    <>
      <div className={css['auth_page']}>
        {loadingResetPassword ? (
          <PageLoading />
        ) : (
          <ForgotPassword
            {...{
              onFinish: onResetPassword,
              next: {
                isHasGoBackBtn: true,
                isHideEmail: Boolean(forgotEmailField),
                isHasPasswordField: Boolean(forgotEmailField),
                goBackProps: { onClick: () => history.goBack() },
              },
            }}
          />
        )}
      </div>
    </>
  );
});

export default index;
