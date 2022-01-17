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
            isOpen={false}
            title="Guide"
            icon={<Icon name="bullet__item" />}
          >
            <Menu>
              <Menu.SubMenu
                isOpen={false}
                title="Getting Started"
                href="/"
                hasIcon={false}
                icon={<Icon name="bullet__item" />}
              />
              <Menu.SubMenu
                isOpen={false}
                title="Custom Styles"
                href="/"
                hasIcon={false}
                icon={<Icon name="bullet__item" />}
              />
              <Menu.SubMenu
                isOpen={false}
                title="GamiUI + Frameworks and libs"
                href="/"
                hasIcon={false}
                icon={<Icon name="bullet__item" />}
              />
            </Menu>
          </Menu.SubMenu>

          <Menu.SubMenu
            isOpen={false}
            title="Theme"
            icon={<Icon name="bullet__item" />}
          >
            <Menu>
              <Menu.SubMenu
                isOpen={false}
                title="Default theme"
                href="/"
                hasIcon={false}
                icon={<Icon name="bullet__item" />}
              />
              <Menu.SubMenu
                isOpen={false}
                title="Customize theme"
                href="/"
                hasIcon={false}
                icon={<Icon name="bullet__item" />}
              />
              <Menu.SubMenu
                isOpen={false}
                title="Customize tokens"
                href="/"
                hasIcon={false}
                icon={<Icon name="bullet__item" />}
              />
              <Menu.SubMenu
                isOpen={false}
                title="Customize styles"
                href="/"
                hasIcon={false}
                icon={<Icon name="bullet__item" />}
              />
              <Menu.SubMenu
                isOpen={false}
                title="Customize media"
                href="/"
                hasIcon={false}
                icon={<Icon name="bullet__item" />}
              />
              <Menu.SubMenu
                isOpen={false}
                title="Dark mode"
                href="/"
                hasIcon={false}
                icon={<Icon name="bullet__item" />}
              />
            </Menu>
          </Menu.SubMenu>
        </Menu>
      </div>
    </div>
  )
}

export default Sidebar
