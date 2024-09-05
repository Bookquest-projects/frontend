import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ToastContainer } from 'react-toastify';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { CookiesProvider } from 'react-cookie';

import { routes } from './routes.tsx';

import '@/styles/globals.css';
import 'react-toastify/dist/ReactToastify.css';
import AuthProvider from '@/auth/AuthProvider.tsx';

const REACT_QUERY_DEVTOOLS = import.meta.env.VITE_API_ENDPOINT;

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={REACT_QUERY_DEVTOOLS} />
      <CookiesProvider>
        <AuthProvider>
          <RouterProvider router={routes} />
        </AuthProvider>
      </CookiesProvider>
    </QueryClientProvider>
    <ToastContainer hideProgressBar autoClose={2000} theme="colored" />
  </React.StrictMode>
);
