import { Button } from '@nextui-org/button';
import { Image, Skeleton } from '@nextui-org/react';
import { CameraIcon, RotateCw, Send } from 'lucide-react';
import { FC, useCallback, useRef, useState } from 'react';
import Webcam from 'react-webcam';
import { isMobile } from 'react-device-detect';

import { useScanMutation } from '@/pages/search/books/queries/BooksQueryHooks.ts';

interface Props {
  onClose: () => void;
}

export const CameraComponent: FC<Props> = ({ onClose }) => {
  const [image, setImage] = useState<string | null>(null);

  const { mutate: uploadImage, isPending } = useScanMutation();

  const webcamRef = useRef<Webcam>(null);

  const videoConstraints = {
    width: 1920,
    height: 1080,
    facingMode: isMobile ? 'environment' : 'user',
  };
  const capture = useCallback(() => {
    if (!webcamRef.current) return;
    setImage(webcamRef.current.getScreenshot());
  }, [webcamRef, image]);

  const onSend = async () => {
    if (image) {
      const blob = await fetch(image).then((r) => r.blob());

      if (blob) {
        const file = new File([blob], 'image.jpeg', { type: 'image/jpeg' });
        const formData = new FormData();

        formData.append('image', file);
        uploadImage(formData);
      }
    }
    setTimeout(() => {
      onClose();
    }, 1000);
  };

  return (
    <div className="flex flex-col gap-8 justify-center flex-grow">
      <Skeleton className="flex rounded-full" isLoaded={!webcamRef} />
      {image ? (
        <div className="flex justify-center">
          <Image className="rounded-lg max-h-[calc(100dvh-8rem)]" src={image} />
        </div>
      ) : (
        <div className="flex max-h-[calc(100dvh-8rem)] justify-center">
          <Webcam
            ref={webcamRef}
            audio={false}
            screenshotFormat="image/jpeg"
            videoConstraints={videoConstraints}
          />
        </div>
      )}
      <div className="flex justify-center gap-8 flex-grow">
        {image ? (
          <>
            <Button
              color="primary"
              endContent={<Send />}
              isLoading={isPending}
              onClick={onSend}
            >
              Send
            </Button>
            <Button
              color="secondary"
              endContent={<RotateCw />}
              onClick={() => setImage(null)}
            >
              Retake
            </Button>
          </>
        ) : (
          <Button
            color="secondary"
            endContent={<CameraIcon />}
            onClick={capture}
          >
            Capture
          </Button>
        )}
        <Button onClick={onClose}>Close</Button>
      </div>
    </div>
  );
};
