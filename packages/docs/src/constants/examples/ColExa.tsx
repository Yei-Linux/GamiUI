import { Col, defaultTheme, RichText, Row } from "@gamiui/standard"
import React from "react"

const ColWithSizesAndSpacing = (
  <Row>
    <Col xs={12} sm={6} md={4} lg={3} spacing="sm">
      <RichText
        style={{
          background: defaultTheme.light.primary.jordyBlue,
          color: defaultTheme.light.neutral[800],
          padding: "16px",
        }}
        text="1"
      />
    </Col>

    <Col xs={12} sm={6} md={4} lg={3} spacing="sm">
      <RichText
        style={{
          background: defaultTheme.light.primary.jordyBlue,
          color: defaultTheme.light.neutral[800],
          padding: "16px",
        }}
        text="2"
      />
    </Col>

    <Col xs={12} sm={6} md={4} lg={3} spacing="sm">
      <RichText
        style={{
          background: defaultTheme.light.primary.jordyBlue,
          color: defaultTheme.light.neutral[800],
          padding: "16px",
        }}
        text="3"
      />
    </Col>

    <Col xs={12} sm={6} md={4} lg={3} spacing="sm">
      <RichText
        style={{
          background: defaultTheme.light.primary.jordyBlue,
          color: defaultTheme.light.neutral[800],
          padding: "16px",
        }}
        text="4"
      />
    </Col>
  </Row>
)

export { ColWithSizesAndSpacing }
