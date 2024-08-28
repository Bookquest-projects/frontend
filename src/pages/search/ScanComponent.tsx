import { CameraIcon, SearchIcon, Upload } from "lucide-react";
import { Input } from "@nextui-org/input";
import { FC, useState } from "react";

import { UploadComponent } from "@/pages/search/UploadComponent.tsx";

interface Props {
  onClick: () => void;
}
export const ScanComponent: FC<Props> = ({ onClick }) => {
  const [value, setValue] = useState("");
  const [openUpload, setOpenUpload] = useState(false);

  return (
    <div className={"flex flex-col flex-grow gap-8"}>
      <div className="flex items-end gap-4">
        <Input
          endContent={
            <div className={"flex justify-center gap-4"}>
              <button type="button" onClick={() => setOpenUpload(false)}>
                <SearchIcon className={"text-default-600"} />
              </button>
              <button type="button" onClick={onClick}>
                <CameraIcon className={"text-secondary"} />
              </button>
              <button className={"text-success"} type="button">
                <Upload onClick={() => setOpenUpload(true)} />
              </button>
            </div>
          }
          label="Scan"
          placeholder="ISBN, title or author"
          value={value}
          onClick={() => setOpenUpload(false)}
          onValueChange={setValue}
        />
      </div>
      {openUpload && <UploadComponent />}
    </div>
  );
};
