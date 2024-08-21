import { Link } from "@nextui-org/link";

import { Navbar } from "@/components/navbar";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col h-screen">
      <Navbar />
      <main className="container mx-auto max-w-7xl px-8 flex-grow py-24">
        {children}
      </main>
      <footer className="w-full flex items-center justify-center p-4">
        <Link
          isExternal
          className="flex items-center gap-1 text-current"
          href="https://nextui-docs-v2.vercel.app?utm_source=next-pages-template"
          title="nextui.org homepage"
        >
          <p className="text-default-600">
            Copyright © 2024. All rights reserved.
          </p>
        </Link>
      </footer>
    </div>
  );
}
