import { useAuth } from '@/auth/AuthProvider.tsx';
import { useLoginMutation } from '@/auth/queries/AuthQueryHooks.ts';
import { Form } from '@/pages/Form.tsx';

export const Login = () => {
  const { login } = useAuth();

  const { mutate } = useLoginMutation();

  const submit = (usernameValue: string, passwordValue: string) => {
    mutate(
      {
        username: usernameValue,
        password: passwordValue,
      },
      {
        onSuccess: () => {
          login();
        },
      },
    );
  };

  return (
    <Form
      link="/sign-up"
      linkText="Sign up"
      submit={submit}
      text="Need to create an account?"
      title="Login"
    />
  );
};
