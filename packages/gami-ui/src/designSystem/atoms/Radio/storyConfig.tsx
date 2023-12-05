import * as React from 'react'

import { IStoryMainConfig } from 'core/domain/interfaces/IStorybook'
import {
  getInheritGlobalStylesStories,
  getStoryConfigStructure,
} from 'core/helpers/storybook.helper'
import { Fragment } from 'react'
import Radio from './Radio'

const storyArgTypes = {
  className: {
    control: 'text',
    description: 'Classname Prop',
    table: {
      type: { summary: 'string' },
    },
  },
  name: {
    control: 'text',
    description: 'name Prop',
    table: {
      type: { summary: 'string' },
    },
  },
}

const docArgTypes = {
  children: {
    control: 'object',
    description: 'Children Prop',
    table: {
      type: { summary: 'React.ReactNode' },
    },
  },
}

const argTypes = { ...storyArgTypes, ...docArgTypes }

const mainConfig: IStoryMainConfig = {
  title: 'Atoms/Radio 🟢',
  component: Radio,
  args: {},
  argTypes: storyArgTypes,
}

const storiesInheritGlobalStyles = getInheritGlobalStylesStories({
  shadow: null,
  margin: null,
  padding: null,
  rounded: null,
  width: null,
  height: null,
  size: null,
  fontWeight: null,
  textAlign: null,
})

const storiesComponent = [
  {
    storyName: 'WithDefault 🙂',
    self: {
      args: {
        minHeight: '300px',
      },
      variants: {
        examples: [
          {
            label: 'Basic',
            value: (
              <Fragment>
                <Radio.Item isChecked value="one">
                  A
                </Radio.Item>
                <Radio.Item value="two">B</Radio.Item>
                <Radio.Item value="three">C</Radio.Item>
              </Fragment>
            ),
          },
        ],
        field: 'children',
      },
    },
  },
]

const storyConfig = getStoryConfigStructure({
  mainConfig,
  storiesInheritGlobalStyles,
  storiesComponent,
  component: Radio,
})

export { storyConfig, argTypes }
