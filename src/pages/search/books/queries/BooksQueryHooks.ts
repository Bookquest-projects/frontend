import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { toast } from 'react-toastify';

import BooksApi from './BooksApi.ts';
import BooksQueryKeys from './BooksQueryKeys.ts';

import { Book } from '@/pages/search/models/Book.ts';
import { Review } from '@/pages/search/models/Reviews.ts';

export const useBookMutation = () => {
  return useMutation<Book | AxiosError, AxiosError, string>({
    mutationFn: (isbn: string) => BooksApi.getBookByIsbn(isbn),
    onError: (e) => {
      if (e.status === 404) {
        toast.error('Book not found', {
          position: 'top-right',
        });
      }
    },
  });
};

export const useBookRecommendationsQuery = (isbn: string) => {
  return useQuery<Book[], AxiosError>({
    queryKey: BooksQueryKeys.bookRecommendations(isbn),
    queryFn: () => BooksApi.getBookRecommendations(isbn),
  });
};

export const useBookByAuthorQuery = (author: string) => {
  return useQuery<Book[], AxiosError>({
    queryKey: BooksQueryKeys.bookByAuthor(author),
    queryFn: () => BooksApi.getBookByAuthor(author),
  });
};

export const useBookBySeriesQuery = (isbn: string) => {
  return useQuery<Book[], AxiosError>({
    queryKey: BooksQueryKeys.booksBySeries(isbn),
    queryFn: () => BooksApi.getBooksBySeries(isbn),
  });
};

export const useScanMutation = () => {
  const queryClient = useQueryClient();

  return useMutation<Book, AxiosError, FormData>({
    mutationFn: (formData) => BooksApi.postScan(formData),
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: BooksQueryKeys.books(),
      });
    },
    onError: () => {
      toast.error('Failed to scan book', {
        position: 'top-right',
      });
    },
  });
};

export const useReviewsQuery = (isbn: string) => {
  return useQuery<Review[], AxiosError>({
    queryKey: BooksQueryKeys.reviews(isbn),
    queryFn: () => BooksApi.getReviews(isbn),
  });
};
