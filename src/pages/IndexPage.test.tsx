import { render, screen } from '@testing-library/react';
import { expect, test, vi } from 'vitest';
import { ReactNode } from 'react';

import { IndexPage } from '@/pages/IndexPage.tsx';

vi.mock('react-router-dom', () => ({
  AuthProvider: ({ children }: { children: ReactNode }) => children,
  Route: ({ element }: { element: ReactNode }) => element,
  Routes: ({ children }: { children: ReactNode }) => children,
  Link: ({ children }: { children: string }) => (
    <a href="/public">{children}</a>
  ),
  useNavigate: () => vi.fn(),
}));

test('renders App component', () => {
  render(<IndexPage />);
  expect(
    screen.getByText('Your Quest for the Perfect Book Begins Here')
  ).toBeDefined();
});
