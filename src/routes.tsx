import { createBrowserRouter } from 'react-router-dom';

import { SearchPage } from '@/pages/search/SearchPage.tsx';
import { IndexPage } from '@/pages/IndexPage.tsx';
import { Login } from '@/pages/Login.tsx';
import { ErrorPage } from '@/pages/ErrorPage.tsx';
import { SignUp } from '@/pages/SignUp.tsx';
import { BookshelfPage } from '@/pages/bookshelf/BookshelfPage.tsx';

export const routes = createBrowserRouter([
  {
    path: '',
    element: <IndexPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/login',
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/sign-up',
    element: <SignUp />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/search',
    element: <SearchPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/bookshelf',
    element: <BookshelfPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '*',
    element: <ErrorPage />,
  },
]);
