import { Input } from "@nextui-org/input";
import { Button, Link } from "@nextui-org/react";

import DefaultLayout from "@/layouts/default";
import { title } from "@/components/primitives.ts";

export default function LoginPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center">
        <div className="inline-block text-center justify-center">
          <div className="flex flex-col items-center gap-16">
            <h1 className={title()}>Login</h1>
            <form className="flex flex-col gap-8">
              <div className="flex flex-col gap-4">
                <Input label="Username" type="text" />
                <Input label="Password" type="password" />
              </div>
              <div className="flex flex-col gap-4">
                <Link href="/frontend/signup" size="sm" underline="always">
                  Ready to begin your quest? Make the first step and sign up!
                </Link>
                <Button color="primary" type="submit">
                  Submit
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
