import { Card, CardBody, CardHeader } from "@nextui-org/react";
import { FC, ReactNode } from "react";

interface Props {
  cardTitle?: string;
  icon: ReactNode;
  body: string;
}

export const CardWrapper: FC<Props> = ({ cardTitle, icon, body }) => (
  <Card className="p-4">
    <CardHeader className="flex gap-4">
      {icon}
      <div className="flex flex-col">
        <p className="font-bold">{cardTitle}</p>
      </div>
    </CardHeader>
    <CardBody>
      <p className="text-default-500">{body}</p>
    </CardBody>
  </Card>
);
