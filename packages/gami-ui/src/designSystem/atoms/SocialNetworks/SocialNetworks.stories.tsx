import React from 'react'
import { Meta } from '@storybook/react'

import SocialNetworks from '.'
import Container from 'designSystem/layouts/Container'
import { cls } from 'core/utils/cls'

export default {
  title: 'Atoms/SocialNetworks',
  component: SocialNetworks,
  args: {},
  argTypes: {},
} as Meta

export const AllSocialNetworks = () => (
  <Container className={cls('flex')}>
    <SocialNetworks.Whatsapp message="Hi, man!" phone="917586966" color="red" />
    <SocialNetworks.Instagram user="user.test" color="green" />
    <SocialNetworks.Facebook user="ecz97" color="blue" />
    <SocialNetworks.Tiktok user="followchain" color="black" />
  </Container>
)

export const Whatsapp = (args: any) => <SocialNetworks.Whatsapp {...args} />
Whatsapp.args = {
  message: 'Hi man!',
  phone: '917586966',
}

export const Instagram = (args: any) => <SocialNetworks.Instagram {...args} />
Instagram.args = {
  user: 'yei.linux',
}

export const Facebook = (args: any) => <SocialNetworks.Facebook {...args} />
Facebook.args = {
  user: 'ecz97',
}

export const Tiktok = (args: any) => <SocialNetworks.Tiktok {...args} />
Tiktok.args = {
  user: 'followchain',
}
