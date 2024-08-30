import { Button } from '@nextui-org/button';
import { ChartLine, Rotate3DIcon, SparklesIcon } from 'lucide-react';
<<<<<<< HEAD
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import { grid, subtitle, title } from '@/components/primitives';
import { DefaultLayout } from '@/layouts/default';
import { FeatureWrapper } from '@/components/FeatureWrapper.tsx';
import { RocketIcon } from '@/components/icons.tsx';
import { CardWrapper } from '@/components/CardWrapper.tsx';

export const IndexPage = () => {
  const ref = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  return (
    <DefaultLayout gradient={true}>
      <section className="flex flex-col gap-16">
=======

import { grid, subtitle, title } from '@/components/primitives';
import { DefaultLayout } from '@/layouts/default';
import { FeatureWrapper } from '@/components/FeatureWrapper.tsx';
import { RocketIcon } from '@/components/icons.tsx';
import { CardWrapper } from '@/components/CardWrapper.tsx';

export const IndexPage = () => {
  return (
    <DefaultLayout>
      <section className="flex flex-col gap-16 ">
>>>>>>> e69e9d893d3e1ebf0137d70f265c6b8777333fee
        <div className="flex flex-col py-8 gap-8">
          <div className="inline-block max-w-lg">
            <h1 className={title({ size: 'lg' })}>
              Your Quest for the Perfect Book Begins Here
            </h1>
            <h2 className={subtitle({ class: 'mt-4' })}>
              Beautiful, fast and modern book scanner app.
            </h2>
          </div>
          <div className="flex gap-8">
<<<<<<< HEAD
            <Button
              color="primary"
              variant="shadow"
              onPress={() => {
                navigate('/bookquest/search');
              }}
            >
=======
            <Button color="primary" variant="shadow">
>>>>>>> e69e9d893d3e1ebf0137d70f265c6b8777333fee
              Get Started
            </Button>
            <Button
              variant="shadow"
<<<<<<< HEAD
              onPress={() => {
                if (ref.current)
                  ref.current.scrollIntoView({ behavior: 'smooth' });
=======
              onClick={() => {
                window.location.href = '#about';
>>>>>>> e69e9d893d3e1ebf0137d70f265c6b8777333fee
              }}
            >
              Learn more
            </Button>
          </div>
        </div>

        <div ref={ref} className="flex flex-col gap-4 py-8">
          <div className={grid()}>
            <CardWrapper
              body="Get instant recommendations for your next read"
              cardTitle="Fast"
              icon={<RocketIcon />}
            />
            <CardWrapper
              body="Tweak the recommendations to your liking"
              cardTitle="Customize"
              icon={<SparklesIcon />}
            />
            <CardWrapper
              body="Find all the books you need in one place"
              cardTitle="All-in-One"
              icon={<Rotate3DIcon />}
            />
            <CardWrapper
              body="Easily find your reading progress"
              cardTitle="Track"
              icon={<ChartLine />}
            />
          </div>
        </div>

        <div className="flex flex-col gap-32 py-8">
          <FeatureWrapper
            description={
              "Quickly scan the barcode of any book by using your phone's camera"
            }
            featureTitle="Scan"
            image="https://t3.ftcdn.net/jpg/07/55/29/78/360_F_755297833_OZALjEEqDRQv3mmQRKCSArTk3RSWkHT2.jpg"
          />

          <FeatureWrapper
            description="Not sure what to read next? Find new books with our recommendation engine"
            featureTitle="Discover"
            image="https://images.ctfassets.net/gc0d9ikt3p7m/3l36hjq8yYSkSqQyrqm4Af/bd635fb19aeda09b81bed9eb279388df/lucrative-genres-for-authors.png?w=2048&q=75&fm=jpg&fl=progressive"
            reverse={true}
          />
          <FeatureWrapper
            description="Dive into your next read and begin your new adventure"
            featureTitle="Enjoy"
            image="https://img.freepik.com/free-vector/summer-gradient-reading-books-illustration_23-2149455695.jpg?t=st=1724677264~exp=1724680864~hmac=2794631eeea5ea10bf4a211bf49639c88923da383574ae08c9479b04ce095ee3&w=1060"
          />
        </div>
      </section>
    </DefaultLayout>
  );
};
