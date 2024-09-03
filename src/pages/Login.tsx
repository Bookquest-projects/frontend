import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

import { useAuth } from '@/auth/AuthProvider.tsx';
import { useLoginMutation } from '@/auth/queries/AuthQueryHooks.ts';
import { Form } from '@/pages/Form.tsx';

export const Login = () => {
  const { isAuthenticated, login } = useAuth();

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/');
    }
  }, []);

  const { mutate, isPending } = useLoginMutation();
  const navigate = useNavigate();
  const submit = (usernameValue: string, passwordValue: string) => {
    mutate(
      {
        username: usernameValue,
        password: passwordValue,
      },
      {
        onSuccess: () => {
          login();
          navigate('/');
        },
      }
    );
  };

  return (
    <Form
      isPending={isPending}
      link="/sign-up"
      linkText="Sign up"
      submit={submit}
      text="Need to create an account?"
      title="Login"
    />
  );
};
