import { Input } from '@nextui-org/input';
import { CameraIcon, SearchIcon, Upload } from 'lucide-react';
import { Dispatch, FC, SetStateAction, useState } from 'react';
import { useSubmit } from 'react-router-dom';

import { UploadComponent } from '@/pages/search/UploadComponent.tsx';
import { useBookMutation } from '@/pages/search/books/queries/BooksQueryHooks.ts';
import { Book } from '@/pages/search/models/Book.ts';

interface Props {
  onCameraClick: () => void;
  setBook: Dispatch<SetStateAction<Book | null>>;
}

export const ScanComponent: FC<Props> = ({ onCameraClick, setBook }) => {
  const [value, setValue] = useState(
    new URLSearchParams(window.location.search).get('q') || ''
  );
  const [openUpload, setOpenUpload] = useState(false);
  const submit = useSubmit();
  const { mutate: bookMutation } = useBookMutation();
  const onClick = () => {
    const searchParams = new URLSearchParams('q=' + value);

    submit(searchParams.toString(), {
      replace: true,
    });

    bookMutation(value, {
      onSuccess: (data) => {
        // @ts-ignore
        setBook(data);
      },
      onError: () => {
        setBook(null);
      },
    });
  };

  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-end gap-4">
        <Input
          endContent={
            <div className="flex justify-center gap-4">
              <button type="button" onClick={() => setOpenUpload(false)}>
                <SearchIcon className="text-default-600" onClick={onClick} />
              </button>
              <button type="button" onClick={onCameraClick}>
                <CameraIcon className="text-secondary" />
              </button>
              <button className="text-success" type="button">
                <Upload onClick={() => setOpenUpload(true)} />
              </button>
            </div>
          }
          isClearable={false}
          label="Scan"
          labelPlacement="outside"
          name="q"
          placeholder="ISBN"
          type="search"
          value={value}
          onClick={() => setOpenUpload(false)}
          onKeyUp={(e) => {
            if (e.key === 'Enter') {
              onClick();
              setOpenUpload(false);
            }
          }}
          onSubmit={() => {
            onClick();
            setOpenUpload(false);
          }}
          onValueChange={setValue}
        />
      </div>
      {openUpload ? (
        <UploadComponent
          setBook={setBook}
          onClose={() => setOpenUpload(false)}
        />
      ) : null}
    </div>
  );
};
