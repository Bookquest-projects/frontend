import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/react";

import DefaultLayout from "@/layouts/default";
import { title, subtitle } from "@/components/primitives.ts";

export default function LoginPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col">
        <div className="flex flex-col gap-16 w-1/4">
          <h1 className={title()}>My profile</h1>
          <div>
            <h2 className={subtitle()}>Change username</h2>
            <form className="flex flex-col gap-2">
              <Input label="New Username" type="text" />
              <Button color="primary" type="submit">
                Submit
              </Button>
            </form>
          </div>
          <div>
            <h2 className={subtitle()}>Change email</h2>
            <form className="flex flex-col gap-2">
              <Input label="Current email" type="email" />
              <Input label="New email" type="email" />
              <Button color="primary" type="submit">
                Submit
              </Button>
            </form>
          </div>
          <div>
            <h2 className={subtitle()}>Change password</h2>
            <form className="flex flex-col gap-2">
              <Input label="Current password" type="password" />
              <Input label="New password" type="password" />
              <Button color="primary" type="submit">
                Submit
              </Button>
            </form>
          </div>
          <div />
        </div>
      </section>
    </DefaultLayout>
  );
}
