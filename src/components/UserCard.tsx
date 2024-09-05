import {
  Avatar,
  Button,
  Card,
  CardFooter,
  CardHeader,
} from '@nextui-org/react';

import { useAuth } from '@/auth/AuthProvider.tsx';
import { useLogoutMutation } from '@/auth/queries/AuthQueryHooks.ts';

export const UserCard = () => {
  const { logout } = useAuth();
  const { mutate: logoutMutate } = useLogoutMutation();

  return (
    <Card className="max-w-[300px] border-none bg-transparent" shadow="none">
      <CardHeader className="justify-between gap-8">
        <div className="flex gap-4">
          <Avatar isBordered radius="full" size="md" />
          <div className="flex flex-col items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600">
              {localStorage.getItem('username')}
            </h4>
          </div>
        </div>
      </CardHeader>
      <CardFooter className="gap-3 justify-end">
        <Button isDisabled color="primary" size="sm">
          See Profile
        </Button>
        <Button
          color="secondary"
          size="sm"
          onPress={() => {
            logoutMutate();
            logout();
          }}
        >
          Log out
        </Button>
      </CardFooter>
    </Card>
  );
};
