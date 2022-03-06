import styled from "@emotion/styled"
import {
  Button,
  Col,
  Container,
  Icon,
  Link,
  RichText,
  Row,
  Title,
  useDevice,
} from "@gamiui/standard"
import React from "react"
import CodeBlock from "../components/CodeBlock/CodeBlock"
import { basicInstallation } from "../constants/code/guide/gettingstart"
import WithLayout from "../hocs/WithLayout"
import { Link as GatsbyLink } from "gatsby"

export interface ICustomTheme {}

const ColStyled = styled(Col)`
  background: #f6f8ff;
  box-shadow: 0 8px 32px 0 rgb(31 38 135 / 13%);
  backdrop-filter: blur(9.5px);
  border-radius: 1rem;
`

const ColCards = styled(Col)`
  max-width: 300px;
  background: #f3fffe;
  box-shadow: 0 8px 32px 0 rgb(31 38 135 / 13%);
  backdrop-filter: blur(9.5px);
  border-radius: 1rem;
`

const Home = ({}: ICustomTheme) => {
  const { device } = useDevice()

  return (
    <Container padding="1rem" margin="auto" style={{ maxWidth: "1300px" }}>
      <Row>
        <Col lg={6} md={6} sm={6} xs={12} spacing="sm">
          <Row>
            <video
              loop
              muted
              autoPlay
              style={{
                maxWidth: device !== "phone" ? "400px" : "300px",
              }}
            >
              <source
                src="https://assets-global.website-files.com/5bcb46130508ef456a7b2930/60372c4e7438a898b4802513_Drawkit_landing_04_1-compressed-poster-00001.jpg"
                data-wf-ignore="true"
              />
              <source
                src="https://assets-global.website-files.com/5bcb46130508ef456a7b2930/60372c4e7438a898b4802513_Drawkit_landing_04_1-compressed-transcode.mp4"
                data-wf-ignore="true"
              />
              <source src="https://assets-global.website-files.com/5bcb46130508ef456a7b2930/60372c4e7438a898b4802513_Drawkit_landing_04_1-compressed-transcode.webm" />
            </video>
          </Row>
        </Col>
        <ColStyled lg={6} md={6} sm={6} xs={12} spacing="lg">
          <Container>
            <Title level="h1">Welcome to GamiUI</Title>
            <Title level="h3" margin="1rem 0" fontWeight="normal">
              we are developing this ui lib(In alpha version also)
            </Title>
          </Container>
          <Container>
            <Row>
              <GatsbyLink to="/docs/atoms/avatar">
                <Link href="/docs/atoms/avatar">
                  <Button rounded="full" padding="1rem">
                    Get Started
                  </Button>
                </Link>
              </GatsbyLink>
            </Row>
          </Container>
        </ColStyled>
      </Row>

      <Row gap="1rem" style={{ margin: "3rem 0" }}>
        <ColCards lg={4} md={4} sm={4} xs={12} spacing="lg">
          <Container>
            <Icon name="brain" size="25px" margin="1rem 0" />
            <Title level="h3" fontWeight="semibold" textAlign="center">
              Themeable
            </Title>
            <Title
              level="h4"
              margin="1rem 0"
              fontWeight="light"
              textAlign="center"
            >
              Provides a simple way to customize all you want on it!
            </Title>
          </Container>
        </ColCards>

        <ColCards lg={4} md={4} sm={4} xs={12} spacing="lg">
          <Container>
            <Icon name="speed" size="25px" margin="1rem 0" />
            <Title level="h3" fontWeight="semibold" textAlign="center">
              Fast
            </Title>
            <Title
              level="h4"
              margin="1rem 0"
              fontWeight="light"
              textAlign="center"
            >
              You can set custom styles with generic props so fast!
            </Title>
          </Container>
        </ColCards>

        <ColCards lg={4} md={4} sm={4} xs={12} spacing="lg">
          <Container>
            <Icon name="code" size="25px" margin="1rem 0" />
            <Title level="h3" fontWeight="semibold" textAlign="center">
              Unique DX
            </Title>
            <Title
              level="h4"
              margin="1rem 0"
              fontWeight="light"
              textAlign="center"
            >
              Provide the best possible developer experience!
            </Title>
          </Container>
        </ColCards>
      </Row>
    </Container>
  )
}

export default WithLayout({
  hasHeader: true,
  hasFooter: true,
  hasSidebar: false,
})(Home)
