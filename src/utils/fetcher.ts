import axios, {
  AxiosInstance,
  AxiosInterceptorManager,
  AxiosRequestConfig,
  AxiosResponse,
} from "axios";
import { apiBaseUrl } from "./url";

type CustomResponseFormat<T = any> = {
  response: T;
  refreshedToken?: string;
};
// https://velog.io/@bang9dev/axios-interceptor-with-ts
interface CustomInstance extends AxiosInstance {
  interceptors: {
    request: AxiosInterceptorManager<AxiosRequestConfig>;
    response: AxiosInterceptorManager<AxiosResponse<CustomResponseFormat>>;
  };
  getUri(config?: AxiosRequestConfig): string;
  request<T>(config: AxiosRequestConfig): Promise<T>;
  get<T>(url: string, config?: AxiosRequestConfig): Promise<T>;
  delete<T>(url: string, config?: AxiosRequestConfig): Promise<T>;
  head<T>(url: string, config?: AxiosRequestConfig): Promise<T>;
  options<T>(url: string, config?: AxiosRequestConfig): Promise<T>;
  post<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>;
  put<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>;
  patch<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>;
}

const onssAxios: CustomInstance = axios.create({
  baseURL: apiBaseUrl,
  headers: {
    "Content-Type": "application/json;charset=utf-8",
  },
});

// 요청 인터셉터 추가
onssAxios.interceptors.request.use(
  (config) => {
    // 요청을 보내기 전에 수행할 로직
    return config;
  },
  (error) => {
    // 요청 에러가 발생했을 때 수행할 로직
    return Promise.reject(error);
  }
);

// 응답 인터셉터 추가
onssAxios.interceptors.response.use(
  (response) => {
    // 응답에 대한 로직 작성
    return response.data;
  },
  (error) => {
    // 응답 에러가 발생했을 때 수행할 로직
    return Promise.reject(error);
  }
);

export default onssAxios;
