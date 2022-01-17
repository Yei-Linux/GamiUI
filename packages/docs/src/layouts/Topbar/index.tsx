import { Icon, Link, Row, Spacer, Title } from "@gamiui/standard"
import React from "react"
import * as S from "./styles"

export interface ITopbar {}

const Topbar = ({}: ITopbar) => {
  return (
    <S.Topbar>
      <Row justifyContent="space-between">
        <S.TopbarLeft>
          <Link href="/">
            <Row>
              <Icon name="brain" size="30px" />
              <Spacer direction="right" />
              <Title level="h2">Hacking Learning</Title>
            </Row>
          </Link>
        </S.TopbarLeft>

        <S.TopbarRight>
          <Row>
            <Icon name="hamburger" size="20px" />
            <Spacer direction="left" />
            <Icon name="remind" size="20px" />
            <Spacer direction="left" />
          </Row>
        </S.TopbarRight>
      </Row>
    </S.Topbar>
  )
}

export default Topbar
