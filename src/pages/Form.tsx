import { Button } from '@nextui-org/button';
import { Card, CardBody, CardHeader } from '@nextui-org/react';
import { Input } from '@nextui-org/input';
import { Link } from '@nextui-org/link';
import { FC, useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

import { DefaultLayout } from '@/layouts/default.tsx';

interface Props {
  title: string;
  link: string;
  linkText: string;
  text: string;
  // eslint-disable-next-line no-unused-vars
  submit: (usernameValue: string, passwordValue: string) => void;
  isPending?: boolean;
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  linkColor: 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  isSignup?: boolean;
}

export const Form: FC<Props> = ({
  title,
  link,
  linkText,
  text,
  submit,
  isPending,
  color,
  linkColor,
  isSignup = false,
}) => {
  const [usernameValue, setUsernameValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [confirmPasswordValue, setConfirmPasswordValue] = useState('');

  const [isNameInvalid, setIsNameInvalid] = useState(false);
  const [isPasswordInvalid, setIsPasswordInvalid] = useState(false);
  const [isConfirmPasswordInvalid, setIsConfirmPasswordInvalid] =
    useState(false);

  const [isVisible, setIsVisible] = useState(false);
  const [isConfirmVisible, setIsConfirmVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);
  const toggleConfirmVisibility = () => setIsConfirmVisible(!isConfirmVisible);

  const validateUsername = (value: string) =>
    value.match(/^[a-zA-Z0-9!@#$%^&*(),.?":{}|<>]{3,45}$/);

  const validatePassword = (value: string) =>
    value.match(/^[a-zA-Z0-9!@#$%^&*(),.?":{}|<>]{8,45}$/);

  const passwordErrorMessage = () => {
    let msg1 = '';
    let msg2 = '';

    if (passwordValue.match(/^.{0,7}$|^.{46,}$/))
      msg1 += 'must be between 8 and 45 characters';
    if (!passwordValue.match(/^[a-zA-Z0-9!@#$%^&*(),.?":{}|<>]*$/))
      msg2 += 'only alphanumeric and characters !@#$%^&*(),.?":{}|<>';

    return (
      <>
        {msg1}
        {msg2 !== '' ? <br /> : null}
        {msg2}
      </>
    );
  };

  return (
    <DefaultLayout>
      <section className="flex justify-center py-16">
        <div className="flex flex-col">
          <Card className="max-w-full sm:w-[400px] px-4">
            <CardBody className="overflow-hidden">
              <CardHeader className="flex justify-center font-semibold text-default-700">
                {title}
              </CardHeader>
              <form className="flex flex-col gap-8">
                <div className="flex flex-col gap-4 py-2">
                  <Input
                    isRequired
                    color={isNameInvalid ? 'danger' : 'default'}
                    errorMessage={() => {
                      let msg1 = '';
                      let msg2 = '';

                      if (usernameValue.match(/^.{0,2}$|^.{46,}$/))
                        msg1 += 'must be between 3 and 45 characters';
                      if (
                        !usernameValue.match(
                          /^[a-zA-Z0-9!@#$%^&*(),.?":{}|<>]*$/
                        )
                      )
                        msg2 +=
                          'only alphanumeric and characters !@#$%^&*(),.?":{}|<>';

                      return (
                        <>
                          {msg1}
                          {msg2 !== '' ? <br /> : null}
                          {msg2}
                        </>
                      );
                    }}
                    isInvalid={isNameInvalid}
                    label="Username"
                    placeholder="Enter your username"
                    type="text"
                    value={usernameValue}
                    onValueChange={(value) => {
                      setUsernameValue(value);
                      setIsNameInvalid(validateUsername(value) === null);
                    }}
                  />
                  <Input
                    isRequired
                    color={isPasswordInvalid ? 'danger' : 'default'}
                    endContent={
                      <button
                        aria-label="toggle password visibility"
                        className="focus:outline-none"
                        type="button"
                        onClick={toggleVisibility}
                      >
                        {isVisible ? (
                          <EyeOff className="text-2xl text-default-400 pointer-events-none" />
                        ) : (
                          <Eye className="text-2xl text-default-400 pointer-events-none" />
                        )}
                      </button>
                    }
                    errorMessage={passwordErrorMessage}
                    isInvalid={isPasswordInvalid}
                    label="Password"
                    placeholder="Enter your password"
                    type={isVisible ? 'text' : 'password'}
                    value={passwordValue}
                    onValueChange={(value) => {
                      setPasswordValue(value);
                      setIsPasswordInvalid(validatePassword(value) === null);
                      setIsConfirmPasswordInvalid(
                        confirmPasswordValue !== value
                      );
                    }}
                  />
                  {isSignup ? (
                    <Input
                      isRequired
                      color={isConfirmPasswordInvalid ? 'danger' : 'default'}
                      endContent={
                        <button
                          aria-label="toggle password visibility"
                          className="focus:outline-none"
                          type="button"
                          onClick={toggleConfirmVisibility}
                        >
                          {isConfirmVisible ? (
                            <EyeOff className="text-2xl text-default-400 pointer-events-none" />
                          ) : (
                            <Eye className="text-2xl text-default-400 pointer-events-none" />
                          )}
                        </button>
                      }
                      errorMessage="Password does not match"
                      isInvalid={isConfirmPasswordInvalid}
                      label="Password"
                      placeholder="Confirm your password"
                      type={isVisible ? 'text' : 'password'}
                      value={confirmPasswordValue}
                      onValueChange={(value) => {
                        setConfirmPasswordValue(value);
                        setIsConfirmPasswordInvalid(value !== passwordValue);
                      }}
                    />
                  ) : null}
                  <p className="text-center text-small">
                    {text}{' '}
                    <Link color={linkColor} href={link} size="sm">
                      {linkText}
                    </Link>
                  </p>
                </div>
                <div className="flex gap-2 justify-end">
                  <Button
                    fullWidth
                    color={color}
                    isDisabled={
                      isNameInvalid ||
                      isPasswordInvalid ||
                      (isSignup && isConfirmPasswordInvalid) ||
                      usernameValue === '' ||
                      passwordValue === ''
                    }
                    isLoading={isPending}
                    onPress={() => {
                      submit(usernameValue, passwordValue);
                    }}
                  >
                    {title}
                  </Button>
                </div>
              </form>
            </CardBody>
          </Card>
        </div>
      </section>
    </DefaultLayout>
  );
};
