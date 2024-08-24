import { Button } from "@nextui-org/button";
import { ChartLine, Rotate3DIcon, SparklesIcon } from "lucide-react";

import { subtitle, grid, title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { FeatureWrapper } from "@/components/FeatureWrapper.tsx";
import { RocketIcon } from "@/components/icons.tsx";
import { CardWrapper } from "@/components/CardWrapper.tsx";
export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col gap-16 ">
        <div className={"flex flex-col py-8 gap-8"}>
          <div className="inline-block max-w-lg">
            <h1 className={title({ size: "lg" })}>
              Your Quest for the Perfect Book Begins Here
            </h1>
            <h2 className={subtitle({ class: "mt-4" })}>
              Beautiful, fast and modern book scanner app.
            </h2>
          </div>
          <div className={"flex gap-8"}>
            <Button color="primary" variant="shadow">
              Get Started
            </Button>
            <Button
              variant="shadow"
              onClick={() => {
                window.location.href = "#about";
              }}
            >
              Learn more
            </Button>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className={grid()}>
            <CardWrapper
              body={"Get instant recommendations for your next read"}
              cardTitle={"Fast"}
              icon={<RocketIcon />}
            />
            <CardWrapper
              body={"Tweak the recommendations to your liking"}
              cardTitle={"Customize"}
              icon={<SparklesIcon />}
            />
            <CardWrapper
              body={"Find all the books you need in one place"}
              cardTitle={"All-in-One"}
              icon={<Rotate3DIcon />}
            />
            <CardWrapper
              body={"Easily find your reading progress"}
              cardTitle={"Track"}
              icon={<ChartLine />}
            />
          </div>
        </div>

        <div className="flex flex-col gap-32 py-16">
          <FeatureWrapper
            description={
              "Quickly scan the barcode of any book by using your phone's camera"
            }
            featureTitle={"Scan"}
            image="https://img.freepik.com/premium-vector/scan-barcode-with-phone-flat-design_601298-3426.jpg"
          />

          <FeatureWrapper
            description={
              "Not sure what to read next? Find new books with our recommendation engine"
            }
            featureTitle={"Discover"}
            image="https://miro.medium.com/v2/resize:fit:1100/format:webp/0*ElMa2Z9RvpHFssam.png"
            reverse={true}
          />
          <FeatureWrapper
            description={
              "Dive into your next read and begin your new adventure"
            }
            featureTitle={"Enjoy"}
            image="https://images.ctfassets.net/gc0d9ikt3p7m/3l36hjq8yYSkSqQyrqm4Af/bd635fb19aeda09b81bed9eb279388df/lucrative-genres-for-authors.png?w=2048&q=75&fm=jpg&fl=progressive"
          />
        </div>
      </section>
    </DefaultLayout>
  );
}
