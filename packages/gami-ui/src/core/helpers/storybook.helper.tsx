import React from 'react'
import TableStories from 'styles/utilities/components/TableStories'
import {
  DESIGN_TYPES as optionsStyle,
  DYNAMIC_DESIGN_TYPES,
} from 'core/utils/constants'
import {
  IDesignValues,
  IParentVariant,
  IStoryConfig,
  IStoryConfigStructure,
  IStoryElement,
  IStoryInheritGlobalStyles,
  IVariants,
  TMergeAllDesignTypes,
} from 'core/domain/interfaces/IStorybook'
import { TDynamicFields, TJSXElements } from 'core/domain/interfaces/common'
import { ComponentStory } from '@storybook/react'
import { capitalize } from './validations.helper'
import Row from 'designSystem/layouts/Row'

const getInheritGlobalStyle = (
  inheritGlobalStyles: IStoryInheritGlobalStyles,
  key: TMergeAllDesignTypes,
  value: readonly string[]
) => {
  const designValue = inheritGlobalStyles[key] as IDesignValues

  if (!designValue) return null

  const examples = DYNAMIC_DESIGN_TYPES.includes(key)
    ? designValue.examples
    : value

  const globalStylesToken = {
    storyName: `With${capitalize(key)}s`,
    self: {
      args: designValue.args,
      variants: {
        examples: examples
          ? examples.map((globalStyle) => ({
              label: globalStyle,
              value: globalStyle,
            }))
          : [],
        field: key,
      },
    },
  }

  return globalStylesToken
}

const buildDynamicDesignTypesObject = () => {
  const objectBuilt: Record<string, null> = {}

  DYNAMIC_DESIGN_TYPES.forEach((token) => {
    objectBuilt[token] = null
  })

  return objectBuilt
}

export const getInheritGlobalStylesStories = (
  inheritGlobalStyles: IStoryInheritGlobalStyles
) => {
  const filtered: IStoryConfig[] = []
  const mergedDesigns = { ...optionsStyle, ...buildDynamicDesignTypesObject() }

  const storiesInheritSyles = Object.entries(mergedDesigns).map(
    ([key, value]) =>
      getInheritGlobalStyle(
        inheritGlobalStyles,
        key as TMergeAllDesignTypes,
        value
      )
  )

  storiesInheritSyles.forEach((story) => story !== null && filtered.push(story))

  return filtered
}

export const getSelftListTemplateTypes =
  (
    Component: TJSXElements,
    { variants: { examples, field } }: IStoryElement<IVariants>,
    customPropsStoryWrapper?: TDynamicFields
  ): ComponentStory<typeof Component> =>
  (args: TDynamicFields): JSX.Element =>
    (
      <Row gap="1rem" height="auto">
        {examples.map(({ label, value, customProps }, index: number) => (
          <TableStories
            key={index}
            item={label ? '' : value}
            field={field}
            labelStory={label}
            {...customPropsStoryWrapper}
          >
            <Component
              {...{ ...args, ...customProps, ...{ [field]: value } }}
            />
          </TableStories>
        ))}
      </Row>
    )

export const getParentListTemplateTypes =
  (
    Component: TJSXElements,
    ParenComponent: TJSXElements,
    { args: parentArgs, variants }: IStoryElement<IParentVariant[]>,
    customPropsStoryWrapper?: TDynamicFields
  ): ComponentStory<typeof Component> =>
  (args: TDynamicFields): JSX.Element =>
    (
      <Row gap="1rem" height="auto">
        {variants.map(({ label, value }, index: number) => (
          <TableStories
            key={index}
            item={label ? '' : value}
            field=""
            labelStory={label}
            {...customPropsStoryWrapper}
          >
            <ParenComponent {...parentArgs}>
              {value.map(({ props, Component }, index) => (
                <Component key={index} {...props} {...args} />
              ))}
            </ParenComponent>
          </TableStories>
        ))}
      </Row>
    )

export const getStory = (
  Component: TJSXElements,
  storyName: string,
  self?: IStoryElement<IVariants>,
  parent?: IStoryElement<IParentVariant[]>,
  ParenComponent?: TJSXElements,
  customPropsStoryWrapper?: TDynamicFields
) => {
  if (!self && !parent) {
    return null
  }

  const ListTemplateType: ComponentStory<typeof Component> | null = self
    ? getSelftListTemplateTypes(Component, self, customPropsStoryWrapper)
    : parent && ParenComponent
    ? getParentListTemplateTypes(
        Component,
        ParenComponent,
        parent,
        customPropsStoryWrapper
      )
    : null

  if (!ListTemplateType) {
    return null
  }

  const Story = ListTemplateType.bind({})
  Story.storyName = storyName
  Story.args = self?.args ?? {}

  return Story
}

export const getStories = (
  storyConfig: IStoryConfig[],
  Component: TJSXElements,
  ParentComponent?: TJSXElements,
  customPropsStoryWrapper?: TDynamicFields
) =>
  storyConfig.map(({ storyName, parent, self }) =>
    getStory(
      Component,
      storyName,
      self,
      parent,
      ParentComponent,
      customPropsStoryWrapper
    )
  )

export const getStoryConfigStructure = ({
  mainConfig,
  storiesInheritGlobalStyles = [],
  storiesComponent = [],
  component,
  parentComponent,
  customStories = [],
  customPropsStoryWrapper,
}: IStoryConfigStructure) => {
  const allstoriesConfig = [...storiesInheritGlobalStyles, ...storiesComponent]

  const stories = getStories(
    allstoriesConfig,
    component,
    parentComponent,
    customPropsStoryWrapper
  )

  const storyConfig = {
    mainConfig,
    stories: [...stories, ...(customStories ?? [])],
  }

  return storyConfig
}

export const getListTemplate =
  (Component: React.ComponentType<any>): any =>
  ({
    items,
    field,
    labelStory,
    ...args
  }: {
    items: any[]
    labelStory: any
    field: any
  }) =>
    items.map((item, index) => (
      <TableStories
        key={index}
        item={item}
        field={field}
        labelStory={labelStory ? `${labelStory} ${index + 1}` : undefined}
      >
        <Component {...args} {...item} />
      </TableStories>
    ))

export const madegenericPropsControl = (dontInclude: string[]) => {
  const generics: Record<string, unknown> = {}

  if (!dontInclude.includes('className')) {
    generics['className'] = {
      control: 'text',
      description: 'className Prop',
      table: {
        type: { summary: 'string' },
      },
    }
  }

  if (!dontInclude.includes('style')) {
    generics['style'] = {
      control: 'object',
      description: 'style Prop',
      table: {
        type: { summary: 'string' },
      },
    }
  }

  if (!dontInclude.includes('shadow')) {
    generics['shadow'] = {
      control: { type: 'select', options: optionsStyle.shadow },
      description: 'shadow Prop',
      table: {
        type: { summary: 'string' },
      },
    }
  }

  if (!dontInclude.includes('rounded')) {
    generics['rounded'] = {
      control: { type: 'select', options: optionsStyle.rounded },
      description: 'rounded Prop',
      table: {
        type: { summary: 'string' },
      },
    }
  }

  if (!dontInclude.includes('width')) {
    generics['width'] = {
      control: { type: 'select', options: optionsStyle.width },
      description: 'width Prop',
      table: {
        type: { summary: 'string' },
      },
    }
  }

  if (!dontInclude.includes('height')) {
    generics['height'] = {
      control: { type: 'select', options: optionsStyle.height },
      description: 'height Prop',
      table: {
        type: { summary: 'string' },
      },
    }
  }

  if (!dontInclude.includes('textAlign')) {
    generics['textAlign'] = {
      control: { type: 'select', options: optionsStyle.textAlign },
      description: 'textAlign Prop',
      table: {
        type: { summary: 'string' },
      },
    }
  }

  if (!dontInclude.includes('fontWeight')) {
    generics['fontWeight'] = {
      control: { type: 'select', options: optionsStyle.fontWeight },
      description: 'fontWeight Prop',
      table: {
        type: { summary: 'string' },
      },
    }
  }

  if (!dontInclude.includes('padding')) {
    generics['padding'] = {
      control: 'text',
      description: 'padding Prop',
      table: {
        type: { summary: 'string' },
      },
    }
  }

  if (!dontInclude.includes('margin')) {
    generics['margin'] = {
      control: 'text',
      description: 'margin Prop',
      table: {
        type: { summary: 'string' },
      },
    }
  }

  if (!dontInclude.includes('size')) {
    generics['size'] = {
      control: { type: 'select', options: optionsStyle.width },
      description: 'size Prop',
      table: {
        type: { summary: 'string' },
      },
    }
  }
  return generics
}
