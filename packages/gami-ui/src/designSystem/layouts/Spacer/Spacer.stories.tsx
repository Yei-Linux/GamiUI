import React from 'react'
import { Meta, ComponentStory } from '@storybook/react'
import { TJSXElements } from 'core/domain/interfaces/common'

import { storyConfig } from './storyConfig'
import Spacer from '.'
import Row from 'designSystem/layouts/Row'
import Avatar from 'designSystem/atoms/Avatar'
import { avatarProfilesImages } from 'designSystem/atoms/Avatar/constants'

const { mainConfig } = storyConfig

export default mainConfig as Meta

/**
 * Custom Stories
 * @param args
 * @returns
 */

const StorySizeDirection = (args: any) => (
  <Row gap="10px">
    <Avatar src={avatarProfilesImages.one} rounded="lg" />
    <Spacer direction="left" size={1} {...args} />
    <Avatar src={avatarProfilesImages.one} rounded="lg" />
  </Row>
)
export const StorySizeDirectionTemplate: ComponentStory<TJSXElements> =
  StorySizeDirection.bind({})
StorySizeDirectionTemplate.storyName = 'With Size Direction 🙂'
StorySizeDirectionTemplate.args = {
  direction: 'left',
  size: 1,
}

const StoryCustomSizeDirection = (args: any) => (
  <Row gap="10px">
    <Avatar src={avatarProfilesImages.one} rounded="lg" />
    <Spacer direction="left" customSize="45px" {...args} />
    <Avatar src={avatarProfilesImages.one} rounded="lg" />
  </Row>
)
export const StoryCustomSizeDirectionTemplate: ComponentStory<TJSXElements> =
  StoryCustomSizeDirection.bind({})
StoryCustomSizeDirectionTemplate.storyName = 'With CustomSize Direction 🙂'
StoryCustomSizeDirectionTemplate.args = {
  direction: 'left',
  customSize: '45px',
}
