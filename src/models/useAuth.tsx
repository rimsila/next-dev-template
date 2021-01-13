import { useRoute } from '@/hooks/useRoute';
import type { IForgotPassword, ILogin } from '@/services/global';
import { usersApi } from '@/services/users';
import { setToken } from '@next-core/authority';
import { useRequest, useSetState } from 'ahooks/es';
import { useModel } from 'umi';

type IState = {
  forgotEmailField: string;
};

export default function useAuthModel() {
  const { initialState } = useModel('@@initialState');

  const { goHomeRedirect, logoutRedirect, goLogin } = useRoute();

  const [state, setState] = useSetState<IState>({
    forgotEmailField: '',
  });

  // * ------------ resetPassword --------------
  /**
   * reset new password by put the email and put new password
   */

  const {
    run: runResetPassword,
    data: resetPasswordData,
    loading: loadingResetPassword,
  } = useRequest(usersApi.forgotPassword, {
    manual: true,
    onSuccess: (res) => {
      if (res?.status === 1) {
        setState({ forgotEmailField: '' }); //* clear forgotEmailField
      }
    },
  });

  // * ------------ onResetPassword --------------

  const onResetPassword = (value: any) => {
    if (value?.email) {
      setState({ forgotEmailField: value?.email || '' });
    }
    if (state?.forgotEmailField && value.password && value['confirm-password']) {
      const formModel: IForgotPassword = {
        email: state?.forgotEmailField,
        newPassword: value?.password,
        confirmNewPassword: value?.['confirm-password'],
      };
      runResetPassword(formModel);
    }
  };

  // * ------------ logOut --------------
  /**
   * Log out and save the current url
   */

  const {
    run: logOut,
    data: LogOutData,
    loading: loadingLogOut,
    refresh: refreshLogOut,
  } = useRequest(usersApi.logout, {
    manual: true,
    onSuccess: (res) => {
      if (res?.status === 1 && initialState) {
        logoutRedirect();
      }
    },
  });

  // * ------------ Login & fetchUserInfo--------------
  /**
   * Log in then redirect to homepage and fetchUserInfo
   */

  const {
    run: runLogin,
    data: LoginData,
    loading: loadingLogin,
    refresh: refreshLogin,
    mutate: setLoginData,
  } = useRequest(usersApi.login, {
    manual: true,
    onSuccess: async (res) => {
      if (res?.status === 1) {
        setToken({ token: LoginData?.data?.accessKey });
        goHomeRedirect();
      }
    },
  });

  // * ------------ onSubmitLogin --------------
  const onSubmitLogin = (value: ILogin) => {
    const loginModel: ILogin = {
      email: value?.email,
      password: value?.password,
    };
    runLogin(loginModel);
  };

  // * ------------ register --------------
  /**
   * register then redirect to login page
   */
  const {
    run: runRegister,
    data: registerData,
    loading: loadingRegister,
    refresh: refreshRegister,
  } = useRequest(usersApi.register, {
    manual: true,
    onSuccess: (res) => {
      if (res?.status === 1) {
        goLogin();
      }
    },
  });

  // * ------------ onSubmitRegister --------------
  const onSubmitRegister = (value: any) => {
    const registerModel = {
      fullName: value?.user,
      email: value?.email,
      password: value?.password,
      confirmPassword: value['confirm-password'],
    };
    runRegister(registerModel);
  };

  // console.log('state');

  return {
    errorResetPassword: resetPasswordData?.response?.data?.message?.description,
    resetPasswordData,
    loadingResetPassword,
    onResetPassword,
    LogOutData,
    loadingLogOut,
    refreshLogOut,
    logOut,
    setLoginData,
    onSubmitLogin,
    LoginData: LoginData?.data,
    loadingLogin,
    refreshLogin,
    registerData: registerData?.data,
    loadingRegister,
    refreshRegister,
    onSubmitRegister,
    setState,
    ...state,
  };
}
