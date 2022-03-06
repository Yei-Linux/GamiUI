import { Drawer, Layout, useDevice } from "@gamiui/standard"

import React, { Fragment, useState } from "react"
import Footer from "../layouts/Footer"
import Sidebar from "../layouts/Sidebar"
import Topbar from "../layouts/Topbar"

interface Props {
  hasStickyProfile?: boolean
  hasHeader?: boolean
  HeaderChildren?: React.ElementType
  hasFooter?: boolean
  FooterChildren?: React.ElementType
  hasSidebar?: boolean
}

const WithLayout =
  ({
    hasHeader,
    HeaderChildren = Topbar,
    hasFooter,
    FooterChildren = Footer,
    hasSidebar = true,
  }: Props) =>
  (WrappedComponent: any) =>
  (componentProps: any) => {
    const [open, setOpen] = useState(false)
    const { device } = useDevice()

    return (
      <Fragment>
        <Layout>
          {hasHeader && (
            <Layout.Header isSticky>
              {<HeaderChildren toggle={() => setOpen(!open)} />}
            </Layout.Header>
          )}

          {hasSidebar &&
            (device !== "desktop" ? (
              <Drawer
                style={{ padding: "1rem 0" }}
                onClose={() => setOpen(!open)}
                open={open}
              >
                <Sidebar />
              </Drawer>
            ) : (
              <Layout.Sidebar>
                <Sidebar />
              </Layout.Sidebar>
            ))}

          <Layout.Content>
            <WrappedComponent {...componentProps} />
          </Layout.Content>
          {hasFooter && <Layout.Footer>{<FooterChildren />}</Layout.Footer>}
        </Layout>
      </Fragment>
    )
  }

WithLayout.defaultProps = {
  hasHeader: true,
  hasFooter: true,
  HeaderChildren: Topbar,
  FooterChildren: Footer,
}

export default WithLayout
