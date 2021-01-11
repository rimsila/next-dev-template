import axios, { AxiosRequestConfig, Method, AxiosResponse } from 'axios';
import { CryptoType, IKeyValue } from './core';
export interface IRequestOption extends AxiosRequestConfig {
    successTip?: boolean;
    method?: Method;
    crypto?: CryptoType;
}
declare let instance: import("axios").AxiosInstance;
export declare const configInstance: (config: AxiosRequestConfig) => void;
declare let globalHeaders: () => IKeyValue<string>;
export declare const configGlobalHeader: (func: () => IKeyValue<string>) => void;
export declare const configRefreshToken: (func: () => Promise<any>) => void;
declare const commonRequestInterceptor: ((option: any) => IRequestOption)[];
declare const commonResponseInterceptor: (((response: AxiosResponse) => any) | (({ response }: {
    response: AxiosResponse;
}) => Promise<never>))[];
declare const commonResponseWithRefreshTokenInterceptor: (((response: AxiosResponse) => any) | (({ response }: {
    response: AxiosResponse;
}) => Promise<unknown>))[];
export declare function request<TResult = any>(opt: IRequestOption): Promise<TResult>;
export declare function get<TResult = any>(url: string, opt?: IRequestOption): Promise<TResult>;
export declare function post<TResult = any>(url: string, opt?: IRequestOption): Promise<TResult>;
export declare function put<TResult = any>(url: string, opt?: IRequestOption): Promise<TResult>;
export declare function patch<TResult = any>(url: string, opt?: IRequestOption): Promise<TResult>;
export declare function del<TResult = any>(url: string, opt?: IRequestOption): Promise<TResult>;
export declare function head<TResult = any>(url: string, opt?: IRequestOption): Promise<TResult>;
export declare function options<TResult = any>(url: string, opt?: IRequestOption): Promise<TResult>;
declare function addRequestInterceptor(onFulfilled?: (value: any) => any | Promise<any>, onRejected?: (error: any) => any): number;
declare function ejectRequestInterceptor(interceptorId: number): void;
declare function addResponseInterceptor(onFulfilled?: (value: any) => any | Promise<any>, onRejected?: (error: any) => any): number;
declare function ejectResponseInterceptor(interceptorId: number): void;
export { axios, instance, globalHeaders, commonRequestInterceptor, commonResponseInterceptor, commonResponseWithRefreshTokenInterceptor, addRequestInterceptor, ejectRequestInterceptor, addResponseInterceptor, ejectResponseInterceptor, };
