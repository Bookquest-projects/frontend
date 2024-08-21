import { FC, ReactNode } from "react";
import { Card, CardHeader, CardBody } from "@nextui-org/react";

interface Props {
  cardTitle?: string;
  icon: ReactNode;
  body: string;
}

export const CardWrapper: FC<Props> = ({ cardTitle, icon, body }) => (
  <Card className={"p-4"}>
    <CardHeader className="flex gap-4">
      {icon}
      <div className="flex flex-col">
        <p>{cardTitle}</p>
      </div>
    </CardHeader>
    <CardBody>
      <p>{body}</p>
    </CardBody>
  </Card>
);
