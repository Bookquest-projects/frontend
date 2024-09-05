import { useNavigate } from 'react-router-dom';

import { useAuth } from '@/auth/AuthProvider.tsx';
import { useLoginMutation } from '@/auth/queries/AuthQueryHooks.ts';
import { Form } from '@/pages/Form.tsx';

export const Login = () => {
  const { login } = useAuth();

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
          localStorage.setItem('username', usernameValue);
          navigate('/search');
        },
      }
    );
  };

  return (
    <Form
      color="secondary"
      isPending={isPending}
      link="/sign-up"
      linkColor="primary"
      linkText="Sign up"
      submit={submit}
      text="Need to create an account?"
      title="Login"
    />
  );
};
