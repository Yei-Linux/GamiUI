import { Container, Title } from "@gamiui/standard"
import React, { Fragment } from "react"
import { IPages } from "../../types/components"
import AsConverter from "../AsConverter"

export interface IReactBuilder {
  page: IPages
}

const ReactBuilder = ({ page }: IReactBuilder) => {
  return (
    <Container padding="0 1rem">
      <Title margin="xs:0 0 2rem 0" level="h1">
        {page.title}
      </Title>

      {page.sections.map(({ items, title }) => (
        <Container margin="xs:0 0 2rem 0">
          {title && (
            <Title margin="xs:0 0 1rem 0" level="h2">
              {title}
            </Title>
          )}

          {items.map(({ component, props, example }) => (
            <Fragment>
              {example && <Container margin="xs:2rem 0">{example}</Container>}
              {props && <AsConverter type={component} props={props} />}
            </Fragment>
          ))}
        </Container>
      ))}

      {!!page.apis.length && (
        <Fragment>
          <Container margin="xs:0 0 2rem 0">
            <Title margin="xs:2rem 0 2rem 0" level="h2">
              APIS
            </Title>
            {page.apis.map(({ items, title }) => (
              <Container margin="xs:0 0 2rem 0">
                {title && (
                  <Title margin="xs:0 0 1rem 0" level="h2">
                    {title}
                  </Title>
                )}

                {items.map(({ component, props }) => (
                  <Fragment>
                    <AsConverter type={component} props={props} />
                  </Fragment>
                ))}
              </Container>
            ))}
          </Container>
        </Fragment>
      )}
    </Container>
  )
}

export default ReactBuilder
