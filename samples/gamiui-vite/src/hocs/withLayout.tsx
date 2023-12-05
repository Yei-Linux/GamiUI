/* eslint-disable @typescript-eslint/no-explicit-any */

import { Container, Drawer, Layout, useDevice } from "@gamiui/standard";

import { Fragment, useState } from "react";

const withLayout = (WrappedComponent: any) => (componentProps: any) => {
  const [open, setOpen] = useState(false);
  const { device } = useDevice();

  return (
    <Fragment>
      <Layout>
        <Layout.Header isSticky className="w-full bg-indigo-500 text-white">
          <Container className="w-full" padding="1rem">
            This is our header
          </Container>
        </Layout.Header>

        {device !== "desktop" && (
          <Drawer className="p-4" onClose={() => setOpen(!open)} open={open}>
            <Container className="w-full" padding="1rem">
              This is our sidebar
            </Container>
          </Drawer>
        )}

        <Layout.Wrapper>
          <Layout.Sidebar className="bg-indigo-300 text-white">
            <Container className="w-full" padding="1rem">
              This is our sidebar
            </Container>
          </Layout.Sidebar>
          <Layout.Content>
            <WrappedComponent {...componentProps} />
          </Layout.Content>
        </Layout.Wrapper>
        {
          <Layout.Footer className="bg-slate-500 text-white">
            <Container className="w-full" padding="1rem">
              This is our footer
            </Container>
          </Layout.Footer>
        }
      </Layout>
    </Fragment>
  );
};

export default withLayout;
