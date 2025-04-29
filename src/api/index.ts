import { ApiClient } from './apiClient';

export const apiClient = new ApiClient({
  baseURL: 'http://192.168.0.106:3333',
  timeout: 8000,
});