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
  TStoryInitiate,
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
    storyName: `With${capitalize(key)}s 😁`,
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
    wrapper: designValue.wrapper,
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
    customPropsStoryWrapper?: TDynamicFields,
    wrapper?: (content: React.ReactNode) => React.ReactNode
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
            {wrapper ? (
              wrapper(
                <Component
                  {...{ ...args, ...customProps, ...{ [field]: value } }}
                />
              )
            ) : (
              <Component
                {...{ ...args, ...customProps, ...{ [field]: value } }}
              />
            )}
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

export const initiateStory = (config: TStoryInitiate) => {
  const Story = config.storyBuilder.bind({})
  Story.storyName = config.storyName
  Story.args = config.args ?? {}

  return Story
}

export const getStory = (
  Component: TJSXElements,
  storyName: string,
  self?: IStoryElement<IVariants>,
  parent?: IStoryElement<IParentVariant[]>,
  ParenComponent?: TJSXElements,
  customPropsStoryWrapper?: TDynamicFields,
  wrapper?: (content: React.ReactNode) => React.ReactNode
) => {
  if (!self && !parent) {
    return null
  }

  const ListTemplateType: ComponentStory<typeof Component> | null = self
    ? getSelftListTemplateTypes(
        Component,
        self,
        customPropsStoryWrapper,
        wrapper
      )
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

  const config = {
    storyBuilder: ListTemplateType,
    storyName,
    args: self?.args,
  }
  const Story = initiateStory(config)
  return Story
}

export const getStories = (
  storyConfig: IStoryConfig[],
  Component: TJSXElements,
  ParentComponent?: TJSXElements,
  customPropsStoryWrapper?: TDynamicFields
) =>
  storyConfig.map(({ storyName, parent, self, wrapper }) =>
    getStory(
      Component,
      storyName,
      self,
      parent,
      ParentComponent,
      customPropsStoryWrapper,
      wrapper
    )
  )

const buildCustomStories = (customStories: Array<TStoryInitiate>) => {
  return customStories.map((config) => initiateStory(config))
}

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
  const customStoriesBuilt = buildCustomStories(customStories)

  const storyConfig = {
    mainConfig,
    stories: [...stories, ...(customStoriesBuilt ?? [])],
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
  try {
    if (!dontInclude.includes('className')) {
      generics['className'] = {
        control: 'text',
        description: 'You can set className component',
        table: {
          type: { summary: 'string' },
        },
      }
    }

    if (!dontInclude.includes('style')) {
      generics['style'] = {
        control: 'object',
        description: 'You can set custom styles to component',
        table: {
          type: { summary: 'string' },
        },
      }
    }

    if (!dontInclude.includes('shadow')) {
      generics['shadow'] = {
        control: { type: 'select', options: optionsStyle.shadow },
        description: 'You can set shadow options from list',
        table: {
          type: { summary: 'string' },
        },
      }
    }

    if (!dontInclude.includes('rounded')) {
      generics['rounded'] = {
        control: { type: 'select', options: optionsStyle.rounded },
        description: 'You can set rounded options from list',
        table: {
          type: { summary: 'string' },
        },
      }
    }

    if (!dontInclude.includes('width')) {
      generics['width'] = {
        control: { type: 'select', options: optionsStyle.width },
        description: 'You can set width options from list',
        table: {
          type: { summary: 'string' },
        },
      }
    }

    if (!dontInclude.includes('height')) {
      generics['height'] = {
        control: { type: 'select', options: optionsStyle.height },
        description: 'You can set height options from list',
        table: {
          type: { summary: 'string' },
        },
      }
    }

    if (!dontInclude.includes('textAlign')) {
      generics['textAlign'] = {
        control: { type: 'select', options: optionsStyle.textAlign },
        description: 'You can set textAlign options from list',
        table: {
          type: { summary: 'string' },
        },
      }
    }

    if (!dontInclude.includes('fontWeight')) {
      generics['fontWeight'] = {
        control: { type: 'select', options: optionsStyle.fontWeight },
        description: 'You can set fontWeight options from list',
        table: {
          type: { summary: 'string' },
        },
      }
    }

    if (!dontInclude.includes('padding')) {
      generics['padding'] = {
        control: 'text',
        description:
          'You can set padding , can be custom or by device(xs:10px,sm:8px,md:5px,lg:0px)',
        table: {
          type: { summary: 'string' },
        },
      }
    }

    if (!dontInclude.includes('margin')) {
      generics['margin'] = {
        control: 'text',
        description:
          'You can set margin , can be custom or by device(xs:10px,sm:8px,md:5px,lg:0px)',
        table: {
          type: { summary: 'string' },
        },
      }
    }

    if (!dontInclude.includes('size')) {
      generics['size'] = {
        control: { type: 'select', options: optionsStyle.width },
        description: 'You can set size options from list',
        table: {
          type: { summary: 'string' },
        },
      }
    }
    return generics
  } catch (error) {
    return {}
  }
}

export const genericArgTypes = madegenericPropsControl([])
