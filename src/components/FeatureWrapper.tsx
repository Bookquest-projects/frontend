import { Image } from "@nextui-org/image";
import { FC } from "react";

import { flex, grid, title } from "@/components/primitives.ts";

interface Props {
  featureTitle: string;
  description: string;
  image: string;
  reverse?: boolean;
}
export const FeatureWrapper: FC<Props> = ({
  featureTitle,
  description,
  image,
  reverse = false,
}) => (
  <div className={grid()}>
    {reverse ? (
      <>
        <Image alt={featureTitle} src={image} />
        <div
          className={flex({
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          })}
        >
          <h1 className={title()}>{featureTitle}</h1>
          <p className={"text-center"}>{description}</p>
        </div>
      </>
    ) : (
      <>
        <div
          className={flex({
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          })}
        >
          <h1 className={title()}>{featureTitle}</h1>
          <p className={"text-center"}>{description}</p>
        </div>
        <Image alt={featureTitle} src={image} />
      </>
    )}
  </div>
);
