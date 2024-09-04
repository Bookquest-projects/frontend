import { useRouteError } from 'react-router-dom';
import { Button } from '@nextui-org/button';

import { DefaultLayout } from '@/layouts/default.tsx';

export const ErrorPage = () => {
  const error: any = useRouteError();

  return (
    <DefaultLayout>
      <div className="flex flex-col py-8 justify-center" id="error-page">
        <h1 className="text-2xl">Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p className="text-danger">
          {error?.message || 'An unexpected error occurred.'}
          {error?.status ? ` (Status: ${error.status})` : ''}
          {error?.statusText ? ` - ${error.statusText}` : ''}
        </p>
        <div className="flex justify-center py-24">
          <Button>
            <a href="/">Go back to the homepage</a>
          </Button>
        </div>
      </div>
    </DefaultLayout>
  );
};
