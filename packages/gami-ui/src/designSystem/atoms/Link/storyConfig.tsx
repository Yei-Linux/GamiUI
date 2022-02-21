import { IStoryMainConfig } from 'core/domain/interfaces/IStorybook'
import {
  getInheritGlobalStylesStories,
  getStoryConfigStructure,
} from 'core/helpers/storybook.helper'
import Link from '.'

import { options } from 'designSystem/atoms/Button'

const mainConfig: IStoryMainConfig = {
  title: 'Atoms/Link',
  component: Link,
  args: {},
  argTypes: {},
}

const storiesInheritGlobalStyles = getInheritGlobalStylesStories({
  rounded: {
    args: {
      children: 'Gami Link',
      fontWeight: 'semibold',
      padding: '10px',
      shadow: 'xs',
      href: 'https://gamiui.com/',
      isExternal: true,
    },
  },
  shadow: {
    args: {
      children: 'Gami Link',
      fontWeight: 'semibold',
      padding: '10px',
      href: 'https://gamiui.com/',
      isExternal: true,
    },
  },
  width: {
    args: {
      children: 'GamiUI',
      fontWeight: 'semibold',
      padding: '10px',
      shadow: 'xs',
    },
  },
  height: {
    args: {
      children: 'GamiUI',
      fontWeight: 'semibold',
      padding: '10px',
      shadow: 'xs',
      href: 'https://gamiui.com/',
      isExternal: true,
    },
  },
  size: {
    args: {
      children: 'GamiUI',
      fontWeight: 'semibold',
      padding: '10px',
      shadow: 'xs',
      href: 'https://gamiui.com/',
      isExternal: true,
    },
  },
  fontWeight: {
    args: {
      children: 'GamiUI',
      padding: '10px',
      href: 'https://gamiui.com/',
      isExternal: true,
    },
  },
  textAlign: {
    args: {
      width: 'lg',
      children: 'GamiUI',
      padding: '10px',
      shadow: 'xs',
      href: 'https://gamiui.com/',
      isExternal: true,
    },
  },
  margin: {
    args: {
      children: 'Gami Link',
      padding: '10px',
      shadow: 'xs',
      href: 'https://gamiui.com/',
      isExternal: true,
    },
    examples: ['0px', '2px', '4px', '6px', '8px', '10px'],
  },
  padding: {
    args: {
      children: 'Gami Link',
      shadow: 'xs',
      href: 'https://gamiui.com/',
      isExternal: true,
    },
    examples: ['0px', '2px', '4px', '6px', '8px', '10px'],
  },
})

const storiesComponent = [
  {
    storyName: 'WithVariants',
    self: {
      args: {
        children: 'Gami Link',
        fontWeight: 'semibold',
        padding: '10px',
        href: 'https://gamiui.com/',
        isExternal: true,
      },
      variants: {
        examples: options.type.map((variant) => ({
          label: variant,
          value: variant,
          customProps: {
            shadow: variant,
          },
        })),
        field: 'variant',
      },
    },
  },
  {
    storyName: 'WithBordered',
    self: {
      args: {
        children: 'Gami Link',
        bordered: true,
        fontWeight: 'semibold',
        padding: '10px',
        href: 'https://gamiui.com/',
        isExternal: true,
      },
      variants: {
        examples: options.type.map((variant) => ({
          label: variant,
          value: variant,
        })),
        field: 'variant',
      },
    },
  },
  {
    storyName: 'WithGhost',
    self: {
      args: {
        children: 'Gami Link',
        ghost: true,
        fontWeight: 'semibold',
        padding: '10px',
        href: 'https://gamiui.com/',
        isExternal: true,
      },
      variants: {
        examples: options.type.map((variant) => ({
          label: variant,
          value: variant,
        })),
        field: 'variant',
      },
    },
  },
  {
    storyName: 'WithLight',
    self: {
      args: {
        children: 'Gami Link',
        shadow: 'none',
        light: true,
        fontWeight: 'semibold',
        padding: '10px',
        href: 'https://gamiui.com/',
        isExternal: true,
      },
      variants: {
        examples: options.type.map((variant) => ({
          label: variant,
          value: variant,
        })),
        field: 'variant',
      },
    },
  },
  {
    storyName: 'WithFlat',
    self: {
      args: {
        children: 'Gami Link',
        shadow: 'none',
        flat: true,
        fontWeight: 'semibold',
        padding: '10px',
        href: 'https://gamiui.com/',
        isExternal: true,
      },
      variants: {
        examples: options.type.map((variant) => ({
          label: variant,
          value: variant,
        })),
        field: 'variant',
      },
    },
  },
]

const storyConfig = getStoryConfigStructure({
  mainConfig,
  storiesInheritGlobalStyles,
  storiesComponent,
  component: Link,
})

export { storyConfig }
