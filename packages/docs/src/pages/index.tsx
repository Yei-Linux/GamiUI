import React from "react"
import { Row, Menu, Title, Icon } from "@gamiui/standard"

const IndexPage = () => {
  return (
    <div>
      Hello
      <div>
        <Row>
          <Title level="h2">Documentation</Title>
        </Row>

        <div>
          <Menu>
            <Menu.SubMenu
              isOpen
              title="Home"
              href="/"
              icon={<Icon name="bullet__item" />}
            ></Menu.SubMenu>
          </Menu>
        </div>
      </div>
    </div>
  )
}

export default IndexPage
