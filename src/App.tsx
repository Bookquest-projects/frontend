import { Route, Routes } from 'react-router-dom';

import IndexPage from '@/pages/index';
import { Login } from '@/pages/Login.tsx';
import AuthProvider from '@/auth/AuthProvider.tsx';

const App = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route element={<IndexPage />} path="/frontend/" />
        <Route element={<Login />} path="/frontend/login" />
      </Routes>
    </AuthProvider>
  );
};

export default App;
