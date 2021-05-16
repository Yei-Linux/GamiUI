import React from 'react'
import { Meta } from '@storybook/react'

import Image from '.'
import RichText from '../RichText'

export default {
  title: 'Atoms/Image',
  component: Image,
  argTypes: {},
} as Meta

export const Basic = ({ ...args }: any) => <Image {...args} />
Basic.args = {
  src: 'https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_1e0d62f445e6448af1e125f5702c8227/reactjs-development-services.png',
  alt: 'Example Image',
}

export const Background = ({ ...args }: any) => (
  <Image {...args}>
    <RichText text="Hola Como estas" />
  </Image>
)
Background.args = {
  src: 'https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_1e0d62f445e6448af1e125f5702c8227/reactjs-development-services.png',
  alt: 'Example Image',
  width: 'fit-content',
  height: '200px',
}

export const Link = ({ ...args }: any) => (
  <Image {...args}>
    <RichText text="Hola Como estas" />
  </Image>
)
Link.args = {
  src: 'https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_1e0d62f445e6448af1e125f5702c8227/reactjs-development-services.png',
  alt: 'Example Image',
  link: {
    url: 'https://www.google.com/',
    newTab: true,
  },
  width: 'fit-content',
  height: '200px',
}
