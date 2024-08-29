import { Route, Routes } from 'react-router-dom';

import { IndexPage } from '@/pages/index';
import { SearchPage } from '@/pages/search/SearchPage.tsx';

import { Login } from '@/pages/Login.tsx';
import AuthProvider from '@/auth/AuthProvider.tsx';

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route element={<IndexPage />} path="/frontend/" />
        <Route element={<Login />} path="/frontend/login" />
        <Route element={<SearchPage />} path="/bookquest/search" />

      </Routes>
    </AuthProvider>
  );
}

export default App;
