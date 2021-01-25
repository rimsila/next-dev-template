import { ROUTE } from '@/constants/routePath';
import { clearToken } from '@next-dev/core/es/authority';
import { stringify } from 'qs';
import { history, useHistory, useModel } from 'umi';

export const useRoute = () => {
  const { query, pathname } = history.location || {};
  const { redirect } = query as { redirect: string };
  const { initialState, setInitialState } = useModel('@@initialState');

  const { push, goBack } = useHistory() || {};

  const goLogin = () => push(ROUTE.auth.login);
  const goHome = () => push(ROUTE.home);

  /**
   * This method will jump to the location of the redirect parameter
   */
  const goHomeRedirect = () => {
    if (!history) return;
    setTimeout(() => {
      history.push(redirect || ROUTE.home);
    }, 10);
  };
  /**
   * logoutRedirect then jump to the location of the redirect parameter
   */
  const logoutRedirect = () => {
    setInitialState({ ...initialState, currentUser: undefined });
    clearToken();
    if (pathname !== ROUTE.auth.login && !redirect) {
      history.replace({
        pathname: ROUTE.auth.login,
        search: stringify({
          redirect: pathname,
        }),
      });
    }
  };

  return {
    logoutRedirect,
    goHomeRedirect,
    goLogin,
    goHome,
    goBack,
    push,
  };
};
