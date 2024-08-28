import { useDropzone } from "react-dropzone";
import { UploadIcon } from "lucide-react";
import { Button } from "@nextui-org/button";
import { useEffect, useState } from "react";

import { useScanMutation } from "@/pages/search/queries/SearchQueryHooks.ts";
export const UploadComponent = () => {
  const [file, setFile] = useState<File | null>(null);
  const { acceptedFiles, getRootProps, getInputProps, fileRejections } =
    useDropzone({
      accept: {
        "image/jpeg": [],
        "image/png": [],
      },
      maxFiles: 1,
      // TODO define max file size
    });

  const { mutate: uploadImage } = useScanMutation();

  const onSend = () => {
    if (file) {
      const formData = new FormData();

      formData.append("image", file);
      uploadImage(formData);
    }
  };

  useEffect(() => {
    if (acceptedFiles.length > 0) {
      setFile(acceptedFiles[0]);
      fileRejections.slice(0, fileRejections.length - 1);
    }
  }, [acceptedFiles]);

  const preview = file && (
    <img
      key={file.name}
      alt={file.name}
      className={"mx-auto"}
      src={URL.createObjectURL(file)}
      style={{ width: "50%", height: "50%", borderRadius: "0.5rem" }}
    />
  );

  return (
    <div className="flex flex-col gap-8">
      {file ? (
        <>
          {preview}
          <div className={"flex justify-center gap-4"}>
            <Button color={"primary"} onClick={onSend}>
              Send
            </Button>
            <Button onClick={() => setFile(null)}>Re-Select</Button>
          </div>
        </>
      ) : (
        <div className="flex flex-col gap-4">
          <div className="flex justify-center w-full h-64 px-4 transition bg-default-100 border-2 border-default-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none">
            <div className="flex items-center space-x-2">
              <div {...getRootProps({ className: "dropzone" })}>
                <input {...getInputProps()} />
                <span className="flex items-center space-x-2">
                  <UploadIcon className={"text-default-500"} />
                  <span className="font-medium text-default-500">
                    Drop or click to upload
                  </span>
                  <span className={"text-danger"}>(png, jpeg)</span>
                </span>
              </div>
            </div>
          </div>
          {fileRejections.length > 0 && (
            <p className="text-danger text-center">File type not accepted</p>
          )}
        </div>
      )}
    </div>
  );
};
