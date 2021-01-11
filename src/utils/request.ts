import { BASE_API_URL } from '@/constants';
import type { IRequestOption } from '@next-core/nextRequest';
import {
  addRequestInterceptor,
  addResponseInterceptor,
  commonRequestInterceptor,
  commonResponseInterceptor,
  configGlobalHeader,
  configInstance,
  request,
} from '@next-dev/core/es/nextRequest';

export async function nextRequest<TResult = any>(
  method: MethodType,
  url: string,
  opt?: IRequestOption,
) {
  configInstance({
    baseURL: BASE_API_URL,
  });

  configGlobalHeader(() => {
    return {
      Authorization: '', // set to not use Bearer  auth
    };
  });

  //* axios Interceptor
  addRequestInterceptor(...commonRequestInterceptor);
  addResponseInterceptor(...commonResponseInterceptor);

  return await request<TResult>({
    url,
    successTip: true,
    ...opt,
    method,
  });
}
