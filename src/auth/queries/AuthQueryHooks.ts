import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { toast } from "react-toastify";

import AuthApi from "./AuthApi.ts";

import { UserRequest, UserResponse } from "@/auth/models/AuthModels.ts";

export const useLoginMutation = () => {
  return useMutation<UserResponse, AxiosError, UserRequest>({
    mutationFn: (userRequest: UserRequest) => AuthApi.login(userRequest),
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
    onError: () => {
      toast.error("Failed to register", {
        position: "top-right",
      });
    },
  });
};
