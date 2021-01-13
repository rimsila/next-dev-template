import { ROUTE } from '@/constants/routePath';
import { clearToken } from '@next-dev/core/es/authority';
import { stringify } from 'qs';
import { history, useHistory, useModel } from 'umi';

export const useRoute = () => {
  const { query, pathname } = history.location || {};
  const { redirect } = query as { redirect: string };
  const { initialState, setInitialState } = useModel('@@initialState');

  const { push } = useHistory() || {};

  const goLogin = () => push(ROUTE.login);
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
    if (pathname !== ROUTE.login && !redirect) {
      history.replace({
        pathname: ROUTE.login,
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
  };
};
