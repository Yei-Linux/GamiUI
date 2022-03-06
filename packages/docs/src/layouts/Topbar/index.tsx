import {
  defaultTheme,
  Icon,
  Link,
  Row,
  Spacer,
  Tag,
  Title,
  useDevice,
} from "@gamiui/standard"
import React, { Fragment } from "react"
import * as S from "./styles"
import { Link as GatsbyLink } from "gatsby"
import styled from "@emotion/styled"

export interface ITopbar {
  hasSidebar: boolean
  toggle: () => void
}

const LinkItem = styled(Link)`
  color: ${defaultTheme.light.primary.jordyBlue};
  background: transparent;
`

const Topbar = ({ toggle, hasSidebar }: ITopbar) => {
  const { device } = useDevice()

  return (
    <S.Topbar padding="1rem">
      <Row justifyContent="space-between">
        <S.TopbarLeft>
          <GatsbyLink to={`/`}>
            <Link href="/" style={{ background: "transparent" }}>
              <Row>
                <Icon name="brain" size="30px" />
                <Spacer direction="right" />
                <Title level="h2">GamiUI</Title>
                <Tag
                  text="ALPHA"
                  fontWeight="bold"
                  padding="3px"
                  background={defaultTheme.light.primary.jordyBlue}
                  color={defaultTheme.light.neutral[800]}
                  style={{ fontSize: "10px" }}
                />
              </Row>
            </Link>
          </GatsbyLink>
        </S.TopbarLeft>

        <S.TopbarRight>
          <Row>
            {device !== "phone" && (
              <Fragment>
                <GatsbyLink to={`/`}>
                  <LinkItem fontWeight="bold" text="Home" href={`/`} />
                </GatsbyLink>
                <Spacer direction="left" />
              </Fragment>
            )}
            <GatsbyLink to={`/docs/atoms/avatar`}>
              <LinkItem
                fontWeight="bold"
                text="Components"
                href={`/docs/atoms/avatar`}
              />
            </GatsbyLink>

            <Spacer direction="left" />

            <LinkItem
              isExternal
              fontWeight="bold"
              href={`https://github.com/Yei-Linux/GamiUI`}
            >
              <Icon name="github" size="20px" />
            </LinkItem>

            {device !== "desktop" && hasSidebar && (
              <Fragment>
                <Spacer direction="left" />
                <Icon onClick={toggle} name="hamburger" size="20px" />
              </Fragment>
            )}
          </Row>
        </S.TopbarRight>
      </Row>
    </S.Topbar>
  )
}

export default Topbar
