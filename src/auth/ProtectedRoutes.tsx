import { Navigate } from 'react-router-dom';
import { FC, ReactNode } from 'react';

import { useAuth } from '@/auth/AuthProvider.tsx';

interface Props {
  children: ReactNode;
}

const ProtectedRoutes: FC<Props> = ({ children }) => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? (
    children
  ) : (
    <Navigate replace to="/bookquest/login" />
  );
};

export default ProtectedRoutes;
