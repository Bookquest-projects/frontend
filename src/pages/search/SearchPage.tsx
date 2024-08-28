import { useState } from "react";

import { DefaultLayout } from "@/layouts/default.tsx";
import { CameraComponent } from "@/pages/search/CameraComponent.tsx";
import { ScanComponent } from "@/pages/search/ScanComponent.tsx";

export const SearchPage = () => {
  const [open, setOpen] = useState(false);

  const onCameraClick = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <DefaultLayout>
      <section className="flex md:p-24">
        {open ? (
          <CameraComponent onClose={onClose} />
        ) : (
          <ScanComponent onClick={onCameraClick} />
        )}
      </section>
    </DefaultLayout>
  );
};
