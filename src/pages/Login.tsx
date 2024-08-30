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
<<<<<<< HEAD
            navigate('/bookquest', { replace: true });
=======
            navigate('/frontend/', { replace: true });
>>>>>>> e69e9d893d3e1ebf0137d70f265c6b8777333fee
          }}
        >
          Login
        </Button>
      </div>
    </DefaultLayout>
  );
};
