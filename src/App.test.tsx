import { expect, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";

import App from "./App";

vi.mock("react-router-dom", () => ({
  Route: ({ element }: { element: JSX.Element }) => element,
  Routes: ({ children }: { children: JSX.Element }) => children,
  Link: ({ children }: { children: string }) => <a href="/">{children}</a>,
}));

test("renders App component", () => {
  render(<App />);
  expect(screen.getByText("Scan and Discover new books")).toBeDefined();
});
