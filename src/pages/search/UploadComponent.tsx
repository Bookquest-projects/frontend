import { Button } from '@nextui-org/button';
import { UploadIcon, XIcon } from 'lucide-react';
import { Dispatch, FC, SetStateAction, useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';

import { useScanMutation } from '@/pages/search/books/queries/BooksQueryHooks.ts';
import { Book } from '@/pages/search/models/Book.ts';

interface Props {
  setBook: Dispatch<SetStateAction<Book | null>>;
  onClose: () => void;
}

export const UploadComponent: FC<Props> = ({ setBook, onClose }) => {
  const [file, setFile] = useState<File | null>(null);
  const { acceptedFiles, getRootProps, getInputProps, fileRejections } =
    useDropzone({
      accept: {
        'image/jpeg': [],
        'image/png': [],
      },
      maxFiles: 1,
      // TODO define max file size
    });

  const { mutate: uploadImage } = useScanMutation();

  const onSend = () => {
    if (file) {
      const formData = new FormData();

      formData.append('image', file);
      uploadImage(formData, {
        onSuccess: (data) => {
          setBook(data);
          onClose();
          setFile(null);
        },
        onError: () => {
          setBook(null);
        },
      });
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
      className="mx-auto"
      src={URL.createObjectURL(file)}
      style={{
        width: '50%',
        height: '50%',
        borderRadius: '0.5rem',
        objectFit: 'contain',
        maxHeight: '300px',
      }}
    />
  );

  return (
    <div className="flex flex-col gap-8">
      {file ? (
        <>
          {preview}
          <div className="flex justify-center gap-4">
            <Button color="primary" onClick={onSend}>
              Send
            </Button>
            <Button onClick={() => setFile(null)}>Re-Select</Button>
            <Button color="danger" onClick={onClose}>
              Cancel
            </Button>
          </div>
        </>
      ) : (
        <div className="flex gap-2">
          <div className="flex flex-col flex-grow-0 justify-center w-full h-64 transition bg-default-100 border-2 border-default-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none">
            <div className="flex flex-grow-0 p-2 justify-end">
              <Button
                isIconOnly
                className="w-6 h-6 p-0 m-0 flex flex-grow-0 gap-0 min-w-4"
                color="danger"
                radius="full"
                size="sm"
                onClick={onClose}
              >
                <XIcon className="w-4 h-4" />
              </Button>
            </div>
            <div className="flex flex-grow">
              <div className="flex justify-center flex-grow items-center space-x-2">
                <div {...getRootProps({ className: 'dropzone' })}>
                  <input {...getInputProps()} />
                  <span className="flex items-center justify-center space-x-2 flex-wrap">
                    <UploadIcon className="text-default-500" />
                    <span className="font-medium text-default-500">
                      Drop or click to upload
                    </span>
                    <span className="text-danger">(png, jpeg)</span>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {fileRejections.length > 0 ? (
            <p className="text-danger text-center">File type not accepted</p>
          ) : null}
        </div>
      )}
    </div>
  );
};
