import React, { Fragment } from 'react'
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

export const getTemplate =
  (Component: TJSXElements): ComponentStory<typeof Component> =>
  (args: TDynamicFields) => {
    return <Component {...args} />
  }

export const getSelftListTemplateTypes =
  (
    Component: TJSXElements,
    { variants: { examples, field } }: IStoryElement<IVariants>
  ): ComponentStory<typeof Component> =>
  (args: TDynamicFields): JSX.Element =>
    (
      <Fragment>
        {examples.map(({ label, value, customProps }, index: number) => (
          <TableStories
            key={index}
            item={value}
            field={field}
            labelStory={label}
          >
            <Component
              {...{ ...args, ...customProps, ...{ [field]: value } }}
            />
          </TableStories>
        ))}
      </Fragment>
    )

export const getParentListTemplateTypes =
  (
    Component: TJSXElements,
    ParenComponent: TJSXElements,
    { args: parentArgs, variants }: IStoryElement<IParentVariant[]>
  ): ComponentStory<typeof Component> =>
  (): JSX.Element =>
    (
      <Fragment>
        {variants.map(({ label, value }, index: number) => (
          <TableStories key={index} item={value} field="" labelStory={label}>
            <ParenComponent {...parentArgs}>
              {value.map((ComponentChildren) => ComponentChildren)}
            </ParenComponent>
          </TableStories>
        ))}
      </Fragment>
    )

export const getStory = (
  Component: TJSXElements,
  storyName: string,
  self?: IStoryElement<IVariants>,
  parent?: IStoryElement<IParentVariant[]>,
  ParenComponent?: TJSXElements
) => {
  if (!self && !parent) {
    return null
  }

  const ListTemplateType: ComponentStory<typeof Component> | null = self
    ? getSelftListTemplateTypes(Component, self)
    : parent && ParenComponent
    ? getParentListTemplateTypes(Component, ParenComponent, parent)
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
  ParentComponent?: TJSXElements
) =>
  storyConfig.map(({ storyName, parent, self }) =>
    getStory(Component, storyName, self, parent, ParentComponent)
  )

export const getStoryConfigStructure = ({
  mainConfig,
  storiesInheritGlobalStyles = [],
  storiesComponent = [],
  component,
  parentComponent,
  customStories = [],
}: IStoryConfigStructure) => {
  const allstoriesConfig = [...storiesInheritGlobalStyles, ...storiesComponent]

  const stories = getStories(allstoriesConfig, component, parentComponent)

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

export const stylesControl = {
  style: { control: 'object' },
  textAlign: { control: { type: 'select', options: optionsStyle.textAlign } },
  fontWeight: {
    control: { type: 'select', options: optionsStyle.fontWeight },
  },
  width: { control: { type: 'select', options: optionsStyle.width } },
  shadow: { control: { type: 'select', options: optionsStyle.shadow } },
  rounded: { control: { type: 'select', options: optionsStyle.rounded } },
  height: { control: { type: 'select', options: optionsStyle.height } },
}
