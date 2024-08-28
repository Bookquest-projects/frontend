import { render, screen } from "@testing-library/react";
import { expect, test, vi } from "vitest";

import App from "./App";

vi.mock("react-router-dom", () => ({
  Route: ({ element }: { element: JSX.Element }) => element,
  Routes: ({ children }: { children: JSX.Element }) => children,
  Link: ({ children }: { children: string }) => <a href="/">{children}</a>,
  useNavigate: () => vi.fn(),
}));

test("renders App component", () => {
  render(<App />);
  expect(
    screen.getByText("Your Quest for the Perfect Book Begins Here"),
  ).toBeDefined();
});
