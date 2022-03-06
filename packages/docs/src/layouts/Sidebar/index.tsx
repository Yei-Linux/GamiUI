import { Row, Title, Menu, Icon } from "@gamiui/standard"
import React from "react"
import { siderbar } from "../../constants/siderbar"
import { Link as GatsbyLink } from "gatsby"

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
                  <GatsbyLink to={`/docs/${basepath}/${href}`}>
                    <Menu.SubMenu
                      isOpen={false}
                      title={title}
                      href={`/docs/${basepath}/${href}`}
                      contentLeft={<Icon name="check" />}
                      hasIcon={hasIcon}
                      icon={<Icon name={icon} />}
                    />
                  </GatsbyLink>
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
