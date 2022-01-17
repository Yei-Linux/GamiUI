import { Layout } from "@gamiui/standard"

import React, { Fragment } from "react"
import Footer from "../layouts/Footer"
import Sidebar from "../layouts/Sidebar"
import Topbar from "../layouts/Topbar"

interface Props {
  hasStickyProfile?: boolean
  hasHeader?: boolean
  HeaderChildren?: React.ElementType
  hasFooter?: boolean
  FooterChildren?: React.ElementType
}

const WithLayout =
  ({
    hasHeader,
    HeaderChildren = Topbar,
    hasFooter,
    FooterChildren = Footer,
  }: Props) =>
  (WrappedComponent: any) =>
  (componentProps: any) => {
    return (
      <Fragment>
        <Layout>
          {hasHeader && (
            <Layout.Header isSticky>{<HeaderChildren />}</Layout.Header>
          )}
          <Layout.Sidebar>
            <Sidebar />
          </Layout.Sidebar>
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
