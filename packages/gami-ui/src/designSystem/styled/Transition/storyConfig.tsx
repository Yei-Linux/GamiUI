import * as React from 'react'

import {
  getInheritGlobalStylesStories,
  getStoryConfigStructure,
} from 'core/helpers/storybook.helper'
import Transition from '.'
import {
  IStoryConfig,
  IStoryMainConfig,
} from 'core/domain/interfaces/IStorybook'
import Title from 'designSystem/atoms/Title'

const storyArgTypes = {
  isReadyToInitAnimation: {
    control: 'boolean',
    description: 'Component will be has animation',
    table: {
      type: { summary: 'boolean' },
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
  from: {
    control: 'object',
    description: 'From prop to start animation',
    table: {
      type: { summary: 'ITransitionProp | null' },
    },
  },
  to: {
    control: 'object',
    description: 'To prop to end animation',
    table: {
      type: { summary: 'ITransitionProp | null' },
    },
  },
}

const argTypes = { ...storyArgTypes, ...docArgTypes }

const mainConfig: IStoryMainConfig = {
  title: 'Styled/Transition',
  component: Transition,
  args: {},
  argTypes: storyArgTypes,
}

const storiesInheritGlobalStyles = getInheritGlobalStylesStories({
  rounded: null,
  shadow: null,
  width: null,
  height: null,
  size: null,
  fontWeight: null,
  textAlign: null,
  margin: null,
  padding: null,
})

const storiesComponent: IStoryConfig[] = [
  {
    storyName: 'WithEase',
    self: {
      args: {
        children: (
          <Title level="h3" style={{ position: 'absolute' }}>
            Hi, this a test
          </Title>
        ),
      },
      variants: {
        examples: [
          {
            label: 'Basic',
            value: true,
            customProps: {
              to: {
                ease: 'elastic.out(1,0.3)',
                duration: 2.5,
                delay: 0,
                position: { axis: 'xPercent', value: 20 },
              },
            },
          },
        ],
        field: 'isReadyToInitAnimation',
      },
    },
  },
  {
    storyName: 'WithOpacity',
    self: {
      args: {
        children: (
          <Title level="h3" style={{ position: 'absolute' }}>
            Hi, this a test
          </Title>
        ),
        isReadyToInitAnimation: true,
      },
      variants: {
        examples: [
          {
            label: 'Basic',
            value: true,
            customProps: {
              from: {
                duration: 15,
                opacity: 0.01,
              },
              to: {
                opacity: 1,
              },
            },
          },
        ],
        field: 'isReadyToInitAnimation',
      },
    },
  },
]

const storyConfig = getStoryConfigStructure({
  mainConfig,
  storiesInheritGlobalStyles,
  storiesComponent,
  component: Transition,
  customPropsStoryWrapper: {
    style: {
      height: '90px',
      position: 'relative',
      maxWidth: '250px',
      width: '100%',
    },
  },
})

export { storyConfig, argTypes }
