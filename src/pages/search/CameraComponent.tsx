import { FC, useCallback, useRef, useState } from "react";
import Webcam from "react-webcam";
import { Button } from "@nextui-org/button";
import { CameraIcon, RotateCw, Send } from "lucide-react";
import { Skeleton } from "@nextui-org/react";

import { useScanMutation } from "@/pages/search/queries/SearchQueryHooks.ts";
const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: "user",
};

interface Props {
  onClose: () => void;
}

export const CameraComponent: FC<Props> = ({ onClose }) => {
  const [image, setImage] = useState<string | null>(null);

  const { mutate: uploadImage, isPending } = useScanMutation();

  const webcamRef = useRef<Webcam>(null);

  const capture = useCallback(() => {
    if (!webcamRef.current) return;
    setImage(webcamRef.current.getScreenshot());
  }, [webcamRef, image]);

  const onSend = async () => {
    if (image) {
      const blob = await fetch(image).then((r) => r.blob());

      if (blob) {
        const file = new File([blob], "image.jpeg", { type: "image/jpeg" });
        const formData = new FormData();

        formData.append("image", file);
        uploadImage(formData);
      }
    }
    setTimeout(() => {
      onClose();
    }, 1000);
  };

  return (
    <div className={"flex flex-col gap-8 justify-center flex-grow"}>
      <Skeleton className={"flex rounded-full"} isLoaded={!webcamRef} />
      {image ? (
        <img alt="webcam" className={"rounded-lg w-full h-full"} src={image} />
      ) : (
        <Webcam
          ref={webcamRef}
          audio={false}
          screenshotFormat="image/jpeg"
          videoConstraints={videoConstraints}
        />
      )}
      <div className={"flex justify-center gap-8 flex-grow"}>
        {image ? (
          <>
            <Button
              color={"primary"}
              endContent={<Send />}
              isLoading={isPending}
              onClick={onSend}
            >
              Send
            </Button>
            <Button
              color={"secondary"}
              endContent={<RotateCw />}
              onClick={() => setImage(null)}
            >
              Retake
            </Button>
          </>
        ) : (
          <Button
            color={"secondary"}
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
