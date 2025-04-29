import axios, { 
  AxiosInstance, 
  AxiosRequestConfig,
} from 'axios';

interface ApiConfig {
  baseURL: string;
  timeout?: number;
  headers?: Record<string, string>;
}

export class ApiClient {
  private axios: AxiosInstance;

  constructor(config: ApiConfig) {
    this.axios = axios.create({
      baseURL: config.baseURL,
      timeout: config.timeout || 10000,
      headers: {
        'Content-Type': 'application/json',
        ...config.headers
      }
    });
  }

  public async get<T>(url: string, config?: AxiosRequestConfig) {
    try {
      const response = await this.axios.get<T>(url, config);
      return response.data;
    } 
    catch (error) {
      this.handleError(error);
      throw error;
    }
  }

  public async post<T, D = any>(url: string, data?: D, config?: AxiosRequestConfig) {
    try {
      const response = await this.axios.post<T>(url, data, config);
      return response.data;
    } 
    catch (error) {
      this.handleError(error);
      throw error;
    }
  }

  public async put<T, D = any>(url: string, data?: D, config?: AxiosRequestConfig) {
    try {
      const response = await this.axios.put<T>(url, data, config);
      return response.data;
    } 
    catch (error) {
      this.handleError(error);
      throw error;
    }
  }

  public async delete<T>(url: string, config?: AxiosRequestConfig) {
    try {
      const response = await this.axios.delete<T>(url, config);
      return response.data;
    } 
    catch (error) {
      this.handleError(error);
      throw error;
    }
  }

  private handleError(error: any) {
    if (axios.isAxiosError(error)) {
      console.log('Erro na chamada de api:', {
        message: error.message,
        status: error.response?.status,
        data: error.response?.data,
        url: error.config?.url
      });
    } 
    else {
      console.error('Erro desconhecido:', error);
    }
  }
}

