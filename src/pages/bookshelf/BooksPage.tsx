import { Card, CardBody, Tab, Tabs } from '@nextui-org/react';

import { DefaultLayout } from '@/layouts/default.tsx';

export const BooksPage = () => {
  return (
    <DefaultLayout>
      <section className="flex md:p-24">
        <div className="flex flex-col">
          <Tabs size="lg">
            <Tab key="photos" title="Owned">
              <Card>
                <CardBody>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                </CardBody>
              </Card>
            </Tab>
            <Tab key="music" title="Reading">
              <Card>
                <CardBody>
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                </CardBody>
              </Card>
            </Tab>
            <Tab key="videos" title="Unfinished">
              <Card>
                <CardBody>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                </CardBody>
              </Card>
            </Tab>
            <Tab key="unwanted" title="Unwanted">
              <Card>
                <CardBody>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                </CardBody>
              </Card>
            </Tab>
          </Tabs>
        </div>
      </section>
    </DefaultLayout>
  );
};
