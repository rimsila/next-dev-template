import { API_ROUTE } from '@/constants/apiRoute';
import { nextRequest } from '@/utils/request';

export const usersApi = {
  // * ------ register ------
  register: (data: any) => nextRequest('POST', API_ROUTE.register, data),

  // * ------ login ------
  login: (data: any) =>
    nextRequest('POST', API_ROUTE.login, {
      data,
    }),

  // * ------ getProfile ------
  getProfile: () => nextRequest('GET', API_ROUTE.getProfile, { hasPassByParam: true }),

  // * ------ logout ------
  logout: () => nextRequest('POST', '/user/logout', { hasParamData: true }),

  // * ------ forgotPassword ------
  forgotPassword: (data: any) => {
    return nextRequest('POST', API_ROUTE.forgotPassword, data);
  },

  // * ------ uploadAvatar ------
  uploadAvatar: (data: any) => {
    return nextRequest('POST', API_ROUTE.uploadAvatar, {
      data,
    });
  },
};
