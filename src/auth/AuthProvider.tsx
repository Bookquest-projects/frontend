import {
  createContext,
  FC,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { toast } from 'react-toastify';

import { getCookie } from '@/shared/cookies.ts';

const AuthContext = createContext<{
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
}>({
  isAuthenticated: false,
  login: () => {},
  logout: () => {},
});

interface Props {
  children: ReactNode;
}

const AuthProvider: FC<Props> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
    getCookie('access_token_cookie') !== null &&
      getCookie('access_token_cookie') !== ''
  );

  const login = () => {
    setIsAuthenticated(true);
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  const value = useMemo(
    () => ({ isAuthenticated, login, logout }),
    [isAuthenticated]
  );

  useEffect(() => {
    if (
      getCookie('access_token_cookie') === null ||
      getCookie('access_token_cookie') === ''
    ) {
      if (isAuthenticated) {
        toast.warning('You have been logged out');
      }
      logout();
    } else {
      login();
    }
  }, [getCookie('access_token_cookie')]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
export default AuthProvider;
