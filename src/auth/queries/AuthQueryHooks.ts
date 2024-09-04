import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { toast } from 'react-toastify';

import AuthApi from './AuthApi.ts';

import { UserRequest, UserResponse } from '@/auth/models/AuthModels.ts';

export const useLoginMutation = () => {
  return useMutation<UserResponse, AxiosError, UserRequest>({
    mutationFn: (userRequest: UserRequest) => AuthApi.login(userRequest),
    onError: (error) => {
      if (error.response?.status === 401) {
        toast.error('Failed to login', {
          position: 'top-right',
        });
      } else if (error.response?.status === 403) {
        toast.error('Account not found', {
          position: 'top-right',
        });
      } else {
        toast.error('Failed to login', {
          position: 'top-right',
        });
      }
    },
  });
};

export const useLogoutMutation = () => {
  const queryClient = useQueryClient();

  return useMutation<UserResponse, AxiosError>({
    mutationFn: () => AuthApi.logout(),
    onSuccess: () => {
      queryClient.clear();
    },
  });
};

export const useRegisterMutation = () => {
  const queryClient = useQueryClient();

  return useMutation<UserResponse, AxiosError, UserRequest>({
    mutationFn: (userRequest: UserRequest) => AuthApi.register(userRequest),
    onSuccess: async () => {
      queryClient.clear();
    },
    onError: (error) => {
      if (error.response?.status === 409) {
        toast.error('User already exists', {
          position: 'top-right',
        });
      } else {
        toast.error('Failed to register', {
          position: 'top-right',
        });
      }
    },
  });
};
