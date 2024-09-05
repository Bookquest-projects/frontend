import { useNavigate } from 'react-router-dom';

import { useAuth } from '@/auth/AuthProvider.tsx';
import { useRegisterMutation } from '@/auth/queries/AuthQueryHooks.ts';
import { Form } from '@/pages/Form.tsx';

export const SignUp = () => {
  const { login } = useAuth();
  const { mutate, isPending } = useRegisterMutation();

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
          navigate('/search');
        },
      }
    );
  };

  return (
    <Form
      color="primary"
      isPending={isPending}
      isSignup={true}
      link="/login"
      linkColor="secondary"
      linkText="Login"
      submit={submit}
      text="Already have an account?"
      title="Sign Up"
    />
  );
};
