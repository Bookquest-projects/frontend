import { NextUIProvider } from '@nextui-org/system';
import { useNavigate } from 'react-router-dom';
import { ReactNode } from 'react';

export const Provider = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate();

  return <NextUIProvider navigate={navigate}>{children}</NextUIProvider>;
};
