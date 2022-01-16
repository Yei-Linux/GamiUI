import { Row, Title, Menu, Icon } from "@gamiui/standard"
import React from "react"

export interface ISidebar {}

const Sidebar = ({}: ISidebar) => {
  return (
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
  )
}

export default Sidebar
