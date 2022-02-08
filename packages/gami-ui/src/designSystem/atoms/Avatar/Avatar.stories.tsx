import React from 'react'
import { Meta } from '@storybook/react'

import Avatar from '.'
import Icon from '../Icon'
import { avatarProfilesImages } from './constants'
import { getListTemplateTypes } from 'core/helpers/storybook.helper'
import { DESIGN_TYPES } from 'core/utils/constants'

export default {
  title: 'Atoms/Avatar',
  component: Avatar,
  args: {},
  argTypes: {},
} as Meta

const ListTemplateType = getListTemplateTypes(Avatar)

export const WithImage = ListTemplateType.bind({})
WithImage.args = {
  variants: {
    examples: Object.entries(avatarProfilesImages).map(([, value], index) => ({
      label: `Image ${index + 1}`,
      value,
    })),
    field: 'src',
  },
  zoomMode: 'inside',
}

export const WithBorders = ListTemplateType.bind({})
WithBorders.args = {
  variants: {
    examples: DESIGN_TYPES.border.map((border) => ({
      label: border,
      value: border,
    })),
    field: 'border',
  },
  src: avatarProfilesImages.one,
  zoomMode: 'inside',
}

export const WithShadows = ListTemplateType.bind({})
WithShadows.args = {
  variants: {
    examples: DESIGN_TYPES.shadow.map((shadow) => ({
      label: shadow,
      value: shadow,
    })),
    field: 'shadow',
  },
  src: avatarProfilesImages.one,
  zoomMode: 'inside',
  border: 'lg',
}

export const WithText = ListTemplateType.bind({})
WithText.args = {
  variants: {
    examples: [
      {
        label: 'Textone',
        value: 'Jesus',
        customProps: {
          background: '#54BAB9',
          textColor: 'white',
        },
      },
      {
        label: 'Texttwo',
        value: 'Yei Linux',
        customProps: {
          background: '#54BAB9',
          textColor: 'white',
        },
      },
      {
        label: 'Textthree',
        value: 'Cesar Jesus Alberto',
        customProps: {
          background: '#54BAB9',
          textColor: 'white',
        },
      },
    ],
    field: 'text',
  },
}
export const WithIcon = ListTemplateType.bind({})
WithIcon.args = {
  variants: {
    examples: [
      {
        label: 'Icon 1',
        value: <Icon fill="none" size="25px" name="facebook__transparent" />,
      },
      {
        label: 'Icon 2',
        value: <Icon fill="none" size="25px" name="facebook__transparent" />,
      },
      {
        label: 'Icon 3',
        value: <Icon fill="none" size="25px" name="facebook__transparent" />,
      },
    ],
    field: 'icon',
  },
  background: 'white',
  shadow: 'md',
}
