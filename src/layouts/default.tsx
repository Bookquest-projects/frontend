import { ReactNode } from "react";

import { Navbar } from "@/components/navbar";

export default function DefaultLayout({ children }: { children: ReactNode }) {
  return (
    <div
      className={
        "relative flex flex-col bg-[radial-gradient(circle_400px_at_90%_200px,#fdd94f,transparent)]"
      }
    >
      <Navbar />
      <main className="container mx-auto max-w-7xl px-8 flex-grow py-24">
        {children}
      </main>

      <footer className="w-full flex flex-col p-4 items-center justify-center">
        <div className={"flex items-center justify-center"}>
          <p className="text-default-400">
            Copyright © 2024. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
