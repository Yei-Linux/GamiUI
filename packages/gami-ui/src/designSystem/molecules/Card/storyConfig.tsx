import React from 'react'
import {
  IStoryConfig,
  IStoryMainConfig,
} from 'core/domain/interfaces/IStorybook'
import {
  getInheritGlobalStylesStories,
  getStoryConfigStructure,
  madegenericPropsControl,
} from 'core/helpers/storybook.helper'
import Card from '../Card'
import RichText from 'designSystem/atoms/RichText'
import Button from 'designSystem/atoms/Button'

const genericArgTypes = madegenericPropsControl([])

const storyArgTypes = {
  ...genericArgTypes,
}

const docArgTypes = {
  children: {
    control: 'object',
    description: 'Display Children content',
    table: {
      type: { summary: 'React.ReactNode' },
    },
  },
}

const argTypes = { ...storyArgTypes, ...docArgTypes }

const mainConfig: IStoryMainConfig = {
  title: 'Molecules/Card 🟢',
  component: Card,
  args: {},
  argTypes: storyArgTypes,
}

const storiesInheritGlobalStyles = getInheritGlobalStylesStories({
  rounded: {
    args: {
      children: 'Gami Card',
      padding: '10px',
      shadow: 'xs',
      rounded: 'xs',
    },
  },
  shadow: {
    args: {
      children: 'Gami Card',
      padding: '10px',
      shadow: 'xs',
      rounded: 'xs',
    },
  },
  width: {
    args: {
      children: 'Gami Card',
      padding: '10px',
      shadow: 'xs',
      rounded: 'xs',
    },
  },
  height: {
    args: {
      children: 'Gami Card',
      padding: '10px',
      shadow: 'xs',
      rounded: 'xs',
    },
  },
  size: {
    args: {
      children: 'Gami Card',
      padding: '10px',
      shadow: 'xs',
      rounded: 'xs',
    },
  },
  fontWeight: {
    args: {
      children: 'Gami Card',
      padding: '10px',
      shadow: 'xs',
      rounded: 'xs',
    },
  },
  textAlign: {
    args: {
      width: 'lg',
      children: 'Gami Card',
      padding: '10px',
      shadow: 'xs',
      rounded: 'xs',
    },
  },
  margin: {
    args: {
      children: 'Gami Card',
      padding: '10px',
      shadow: 'xs',
      rounded: 'xs',
    },
    examples: ['0px', '2px', '4px', '6px', '8px', '10px'],
    wrapper: (content: React.ReactNode) => (
      <div style={{ border: '1px solid #d1d1d1' }}>{content}</div>
    ),
  },
  padding: {
    args: {
      children: 'Gami Card',
      shadow: 'xs',
      rounded: 'xs',
    },
    examples: ['0px', '2px', '4px', '6px', '8px', '10px'],
  },
})

const storiesComponent: IStoryConfig[] = [
  {
    storyName: 'With Basic 🙂',
    self: {
      args: {
        width: 'fit',
        shadow: 'xs',
        rounded: 'xs',
      },
      variants: {
        examples: [
          {
            label: 'Basic',
            value: <p style={{ padding: '1rem' }}>Hola como estas</p>,
          },
        ],
        field: 'children',
      },
    },
  },
  {
    storyName: 'With Content 🙂',
    self: {
      args: {
        width: 'fit',
        shadow: 'xs',
        rounded: 'xs',
      },
      variants: {
        examples: [
          {
            label: 'Content',
            value: (
              <Card.Content
                title={<RichText text="**Hi, this is my title**" />}
                description="Hi this is description"
              />
            ),
          },
        ],
        field: 'children',
      },
    },
  },
  {
    storyName: 'With Cover 🙂',
    self: {
      args: {
        width: 'fit',
        shadow: 'xs',
        rounded: 'xs',
      },
      variants: {
        examples: [
          {
            label: 'Cover',
            value: (
              <>
                <Card.Cover>
                  <img
                    width="100%"
                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                  />
                </Card.Cover>
                <Card.Content
                  title="Hi this is title"
                  description="Hi this is description"
                />
              </>
            ),
          },
        ],
        field: 'children',
      },
    },
  },
  {
    storyName: 'With Footer 🙂',
    self: {
      args: {
        width: 'fit',
        shadow: 'xs',
        rounded: 'xs',
      },
      variants: {
        examples: [
          {
            label: 'Footer',
            value: (
              <>
                <Card.Cover>
                  <img
                    width="100%"
                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                  />
                </Card.Cover>
                <Card.Content
                  title="Hi this is title"
                  description="Hi this is description"
                />
                <Card.Footer>
                  <Button
                    type="button"
                    rounded="sm"
                    height="auto"
                    variant="secondary"
                    width="auto"
                  >
                    Text
                  </Button>
                </Card.Footer>
              </>
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
  component: Card,
})

export { storyConfig, argTypes }
