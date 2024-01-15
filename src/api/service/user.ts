import { commonRequest } from './axios';
import { LoginFieldType, RegisterFieldType } from '@/types/user';

export async function login(data: LoginFieldType) {
  const response = await commonRequest.post(`/auth/login`, data);

  return response.data;
}

export async function register(data: RegisterFieldType) {
  const response = await commonRequest.post(`/auth/register`, data);

  return response.data;
}
export async function profile() {
  const response = await commonRequest.get(`/user/profile`);

  return response.data;
}
