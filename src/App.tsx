import { Route, Routes } from 'react-router-dom';

<<<<<<< HEAD
import { IndexPage } from '@/pages/index';
import { SearchPage } from '@/pages/search/SearchPage.tsx';
=======
import { IndexPage } from '@/pages';
>>>>>>> e69e9d893d3e1ebf0137d70f265c6b8777333fee
import { Login } from '@/pages/Login.tsx';
import AuthProvider from '@/auth/AuthProvider.tsx';

const App = () => {
  return (
    <AuthProvider>
      <Routes>
<<<<<<< HEAD
        <Route element={<IndexPage />} path="/bookquest" />
        <Route element={<Login />} path="/bookquest/login" />
        <Route element={<SearchPage />} path="/bookquest/search" />
=======
        <Route element={<IndexPage />} path="/frontend/" />
        <Route element={<Login />} path="/frontend/login" />
>>>>>>> e69e9d893d3e1ebf0137d70f265c6b8777333fee
      </Routes>
    </AuthProvider>
  );
};

export default App;
