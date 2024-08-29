import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { toast } from "react-toastify";

import AuthApi from "./AuthApi.ts";
import BookQueryKeys from "./SearchQueryKeys.ts";

import { Book } from "@/pages/search/models/Book.ts";
import { LoginResponse } from "@/auth/models/LoginResponse.ts";

export const useLoginQuery = () => {
  return useQuery<LoginResponse, AxiosError>({
    queryKey: BookQueryKeys.book(isbn),
    queryFn: () => AuthApi.login(),
  });
};

export const useScanMutation = () => {
  const queryClient = useQueryClient();

  return useMutation<Book, AxiosError, FormData>({
    mutationFn: (formData) => AuthApi.postScan(formData),
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: BookQueryKeys.books(),
      });
    },
    onError: () => {
      toast.error("Failed to scan book", {
        position: "top-right",
      });
    },
  });
};
