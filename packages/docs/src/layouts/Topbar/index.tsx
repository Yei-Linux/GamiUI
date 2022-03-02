import {  Icon, Link, Row, Spacer, Title } from "@gamiui/standard"
import React from "react"
import * as S from "./styles"

export interface ITopbar {}

const Topbar = ({}: ITopbar) => {
  return (
    <S.Topbar padding="1rem">
      <Row justifyContent="space-between">
        <S.TopbarLeft>
          <Link href="/" style={{ background: "transparent" }}>
            <Row>
              <Icon name="brain" size="30px" />
              <Spacer direction="right" />
              <Title level="h2">GamiUI</Title>
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
