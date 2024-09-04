import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { toast } from 'react-toastify';

import BooksApi from './BooksApi.ts';
import BooksQueryKeys from './BooksQueryKeys.ts';

import { Book } from '@/pages/search/models/Book.ts';
import { Review } from '@/pages/search/models/Reviews.ts';

export const useBookMutation = () => {
  return useMutation<Book, AxiosError, string>({
    mutationFn: (isbn: string) => BooksApi.getBookByIsbn(isbn),
    onError: (e) => {
      if (e.response?.status === 404) {
        toast.error('Book not found', {
          position: 'top-right',
        });
      } else if (e.response?.status === 400) {
        toast.error('Not a valid ISBN', {
          position: 'top-right',
        });
      }
    },
  });
};

export const useBookRecommendationsQuery = (isbn: string, language: string) => {
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

export const useBookshelfQuery = (name: string) => {
  return useQuery<Book[], AxiosError>({
    queryKey: BooksQueryKeys.bookshelf(name),
    queryFn: () => BooksApi.getBookshelf(name),
  });
};

export const useAddToFavoritesMutation = () => {
  const queryClient = useQueryClient();

  return useMutation<void, AxiosError, string>({
    mutationFn: (isbn: string) => BooksApi.addToFavorites(isbn),
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: BooksQueryKeys.books(),
      });
      toast.success('Added to favorites', {
        position: 'top-right',
      });
    },
    onError: () => {
      toast.error('Failed to add to favorites', {
        position: 'top-right',
      });
    },
  });
};

export const useAddToBookshelfMutation = () => {
  const queryClient = useQueryClient();

  return useMutation<void, AxiosError, { isbn: string; name: string }>({
    mutationFn: ({ isbn, name }) => BooksApi.addToBookshelf(isbn, name),
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: BooksQueryKeys.books(),
      });
      toast.success(`Added to bookshelf`, {
        position: 'top-right',
      });
    },
    onError: () => {
      toast.error('Failed to add to bookshelf', {
        position: 'top-right',
      });
    },
  });
};
