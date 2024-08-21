import { Button } from "@nextui-org/button";
import { ChartLine, Rotate3DIcon, Sparkle } from "lucide-react";

import { title, subtitle, grid } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { FeatureWrapper } from "@/components/FeatureWrapper.tsx";
import { MagnifyingGlassIcon, RocketIcon } from "@/components/icons.tsx";
import { CardWrapper } from "@/components/CardWrapper.tsx";
export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col gap-4">
        <div className={"flex flex-col py-8 gap-8"}>
          <div className="inline-block max-w-lg">
            <h1 className={title()}>Scan and Discover new books</h1>
            <br />
            <h4 className={subtitle({ class: "mt-4" })}>
              Beautiful, fast and modern book scanner app.
            </h4>
          </div>
          <div>
            <Button color="primary" variant="shadow">
              Get Started
            </Button>
          </div>
        </div>
        <MagnifyingGlassIcon />

        <div className="flex flex-col gap-32 py-16">
          <FeatureWrapper
            description={
              "Quickly scan the barcode of any book by using your phone's camera"
            }
            featureTitle={"Scan"}
            image="https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
          />

          <FeatureWrapper
            description={
              "Not sure what to read next? Find new books with our recommendation engine"
            }
            featureTitle={"Discover"}
            image="https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
            reverse={true}
          />
          <FeatureWrapper
            description={
              "Dive into your next read and begin your new adventure"
            }
            featureTitle={"Enjoy"}
            image="https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
          />
        </div>
        <div className={grid()}>
          <CardWrapper
            body={"Get instant recommendations for your next read"}
            cardTitle={"Fast"}
            icon={<RocketIcon />}
          />
          <CardWrapper
            body={"Tweak the recommendations to your liking"}
            cardTitle={"Customize"}
            icon={<Sparkle />}
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
      </section>
    </DefaultLayout>
  );
}
