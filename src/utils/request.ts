import { BASE_API_TEST, BASE_API_URL } from '@/constants';
import type { IRequestOption } from '@next-core/nextRequest';
import {
  addRequestInterceptor,
  commonRequestInterceptor,
  configGlobalHeader,
  configInstance,
  request,
} from '@next-core/nextRequest';
import { getToken } from './authority';
import { handlerGlobalErr } from './globalHttpError';

export async function nextRequest<TResult = any>(
  method: MethodType,
  url: string,
  opt?: IRequestOption,
) {
  const { hasParam, hasParamData, hasPassByParam } = opt || {};
  const defaultParam = hasParam ? { accessKey: getToken()?.token } : {};
  const dfPramData = hasParamData ? { accessKey: getToken()?.token } : {};

  /**
   * @hasPassByParam if true url will have default
   */
  url = hasPassByParam ? `${url}/${getToken()?.token}` : url;

  /**
   * @configInstance
   */

  configInstance({
    baseURL: BASE_API_URL || BASE_API_TEST,
    params: defaultParam,
  });

  /**
   * @configGlobalHeader set header default id Bearer auth
   */
  configGlobalHeader(() => {
    return {
      Authorization: '', //  remove Bearer auth
    };
  });

  /**
   * @axiosInterceptor handle global res and req
   */
  addRequestInterceptor(...commonRequestInterceptor);
  // addResponseInterceptor(...commonResponseInterceptor); // not yet use it

  /**
   * @return_data to client ui
   */
  try {
    const response: any = await request<TResult>({
      url,
      fullTip: method !== 'GET',
      ...opt,
      data: { ...dfPramData, ...opt?.data }, // has default data
      method,
    });

    /**
     * @handlerGlobalError show msg success/err/redirect
     */

    //* set success
    handlerGlobalErr({ ...response, method });
    return response?.data;
  } catch (catchAxiosError) {
    //* catchError error
    handlerGlobalErr({
      ...catchAxiosError,
      isErr: true,
    });
    return catchAxiosError;
  }
}
