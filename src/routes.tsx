import { createBrowserRouter } from 'react-router-dom';

import { SearchPage } from '@/pages/search/SearchPage.tsx';
import { IndexPage } from '@/pages/IndexPage.tsx';
import { Login } from '@/pages/Login.tsx';
import { ErrorPage } from '@/pages/ErrorPage.tsx';

export const routes = createBrowserRouter([
  {
    path: '',
    element: <IndexPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/search',
    element: <SearchPage />,
  },
]);
