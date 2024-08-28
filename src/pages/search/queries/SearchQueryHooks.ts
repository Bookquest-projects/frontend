import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { toast } from "react-toastify";

import BookApi from "./BookApi.ts";
import BookQueryKeys from "./SearchQueryKeys";

import { Book } from "@/pages/search/models/Book.ts";

export const useBook = (isbn: number) => {
  return useQuery<Book, AxiosError, Book | null>({
    queryKey: BookQueryKeys.book(isbn),
    queryFn: () => BookApi.getBookByIsbn(isbn),
  });
};

export const useScanMutation = () => {
  const queryClient = useQueryClient();

  return useMutation<Book, AxiosError, FormData>({
    mutationFn: (formData) => BookApi.postScan(formData),
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
