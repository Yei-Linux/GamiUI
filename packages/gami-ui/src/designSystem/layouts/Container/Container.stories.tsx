import React from 'react'
import { Meta } from '@storybook/react'

import Container from '.'
import styled from '@emotion/styled'
import { defaultTheme } from 'styles/tokens'

export default {
  title: 'Layout/Container',
  component: Container,
  args: {},
  argTypes: {},
} as Meta

const ContaierBasic = styled(Container)`
  background-color: ${defaultTheme.light.neutral[500]};
`

export const Basic = () => (
  <Container>
    <ContaierBasic margin="xs:0 0 1rem 0" padding="xs:1rem">
      Hi, this is my container1
    </ContaierBasic>
    <Container margin="xs:0 0 1rem 0" padding="xs:1rem">
      Hi, this is my container2
    </Container>
  </Container>
)
