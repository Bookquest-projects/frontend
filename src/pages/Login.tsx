import { Button } from '@nextui-org/button';
import { useNavigate } from 'react-router-dom';

import { useAuth } from '@/auth/AuthProvider.tsx';
import { DefaultLayout } from '@/layouts/default.tsx';

export const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  return (
    <DefaultLayout>
      <div>
        <Button
          onClick={() => {
            login();
            navigate('/bookquest', { replace: true });
          }}
        >
          Login
        </Button>
      </div>
    </DefaultLayout>
  );
};
