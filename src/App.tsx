import { Route, Routes } from 'react-router-dom';

import { IndexPage } from '@/pages';
import { SearchPage } from '@/pages/search/SearchPage.tsx';
import { Login } from '@/pages/Login.tsx';
import AuthProvider from '@/auth/AuthProvider.tsx';
import { BooksPage } from '@/pages/bookshelf/BooksPage.tsx';
import { SignUp } from '@/pages/SignUp.tsx';

const App = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route element={<IndexPage />} path="/" />
        <Route element={<BooksPage />} path="/bookshelf" />
        <Route element={<SignUp />} path="/sign-up" />
        <Route element={<Login />} path="/bookquest/login" />
        <Route element={<SearchPage />} path="/bookquest/search" />
      </Routes>
    </AuthProvider>
  );
};

export default App;
