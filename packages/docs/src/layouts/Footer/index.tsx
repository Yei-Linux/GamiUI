import { Row, Col, Title, RichText, Image } from "@gamiui/standard"
import React from "react"

import * as S from "./styles"

export interface IFooter {}

const Footer = ({}: IFooter) => {
  return (
    <S.Footer>
      <Row>
        <Col spacing="sm" xs={12} sm={12} md={12} lg={12}>
          <Row>
            <Image
              style={{ borderRadius: "20em" }}
              alt="Topbar logo"
              width="100px"
              src={
                "https://image.freepik.com/free-vector/gamer-mascot-geek-boy-esports-logo-avatar-with-headphones-glasses-cartoon-character_8169-228.jpg"
              }
            />
          </Row>
        </Col>
        <Col spacing="sm" xs={12} sm={12} md={12} lg={12}>
          <Title textAlign="center" level="h3">
            Handcrafted by © YeiLinux(Jesus Alvan)
          </Title>
        </Col>
      </Row>
    </S.Footer>
  )
}

export default Footer
