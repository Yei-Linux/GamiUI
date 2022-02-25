import { Row, Title, Menu, Icon } from "@gamiui/standard"
import React from "react"
import { siderbar } from "../../constants/siderbar"

export interface ISidebar {}

const Sidebar = ({}: ISidebar) => {
  return (
    <div>
      <Row>
        <Title level="h2">{siderbar.title}</Title>
      </Row>
      <div>
        <Menu>
          {siderbar.sections.map(({ title, afterIcon, items, basepath }) => (
            <Menu.SubMenu
              isOpen={false}
              title={title}
              icon={<Icon name={afterIcon} />}
            >
              <Menu>
                {items.map(({ title, hasIcon, href, icon }) => (
                  <Menu.SubMenu
                    isOpen={false}
                    title={title}
                    href={`/docs/${basepath}/${href}`}
                    hasIcon={hasIcon}
                    icon={<Icon name={icon} />}
                  />
                ))}
              </Menu>
            </Menu.SubMenu>
          ))}
        </Menu>
      </div>
    </div>
  )
}

export default Sidebar
