import axios from 'axios';

import { UserRequest, UserResponse } from '@/auth/models/AuthModels.ts';
import { getCookie } from '@/shared/cookies.ts';

const BASE_API = import.meta.env.VITE_API_ENDPOINT + '/auth';

axios.defaults.withCredentials = true;
const baseAxios = axios.create({
  baseURL: BASE_API,
});

const login = (userRequest: UserRequest): Promise<UserResponse> =>
  baseAxios
    .post<UserResponse>(`/login`, userRequest, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });

const logout = (): Promise<any> =>
  baseAxios
    .post(
      `/logout`,
      {},
      {
        headers: {
          'Content-Type': 'application/json',
          'X-CSRF-TOKEN': getCookie('csrf_access_token'),
        },
      }
    )
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });

const register = (userRequest: UserRequest): Promise<UserResponse> =>
  baseAxios
    .post<UserResponse>(`/register`, userRequest)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });

const AuthApi = {
  login,
  logout,
  register,
};

export default AuthApi;
