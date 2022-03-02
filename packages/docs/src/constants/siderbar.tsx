const atomComponents = [
  {
    title: "Avatar",

    icon: "bullet" as const,
    hasIcon: false,
    href: "avatar",
  },
  {
    title: "Button",

    icon: "bullet" as const,
    hasIcon: false,
    href: "button",
  },
  {
    title: "Collapse",

    icon: "bullet" as const,
    hasIcon: false,
    href: "collapse",
  },
  {
    title: "Empty",

    icon: "bullet" as const,
    hasIcon: false,
    href: "empty",
  },
  {
    title: "Icon",

    icon: "bullet" as const,
    hasIcon: false,
    href: "icon",
  },
  {
    title: "Image",

    icon: "bullet" as const,
    hasIcon: false,
    href: "image",
  },
  {
    title: "Link",

    icon: "bullet" as const,
    hasIcon: false,
    href: "link",
  },
  {
    title: "Message",

    icon: "bullet" as const,
    hasIcon: false,
    href: "message",
  },
  {
    title: "Progress",

    icon: "bullet" as const,
    hasIcon: false,
    href: "progress",
  },
  {
    title: "RichText",

    icon: "bullet" as const,
    hasIcon: false,
    href: "richtext",
  },
  {
    title: "Tag",

    icon: "bullet" as const,
    hasIcon: false,
    href: "tag",
  },
  {
    title: "Title",

    icon: "bullet" as const,
    hasIcon: false,
    href: "title",
  },
]

const moleculeComponents = [
  {
    title: "Drawer",

    icon: "bullet" as const,
    hasIcon: false,
    href: "drawer",
  },
  {
    title: "Floating",

    icon: "bullet" as const,
    hasIcon: false,
    href: "floating",
  },
]

const layoutComponents = [
  {
    title: "Col",
    icon: "bullet" as const,
    hasIcon: false,
    href: "col",
  },
  {
    title: "Container",
    icon: "bullet" as const,
    hasIcon: false,
    href: "container",
  },
  {
    title: "Layout",
    icon: "bullet" as const,
    hasIcon: false,
    href: "layout",
  },
  {
    title: "Row",

    icon: "bullet" as const,
    hasIcon: false,
    href: "row",
  },
  {
    title: "Spacer",

    icon: "bullet" as const,
    hasIcon: false,
    href: "spacer",
  },
]

const styledComponents = [
  {
    title: "Transition",
    icon: "bullet" as const,
    hasIcon: false,
    href: "transition",
  },
]

const guide = [
  {
    title: "Getting Started",
    icon: "bullet" as const,
    hasIcon: false,
    href: "getting-start",
  },
  {
    title: "Generic Props",
    icon: "bullet" as const,
    hasIcon: false,
    href: "generic-props",
  },
]

const theme = [
  {
    title: "Default theme and tokens",
    icon: "bullet" as const,
    hasIcon: false,
    href: "default-theme",
  },
  {
    title: "Customize theme and tokens",
    icon: "bullet" as const,
    hasIcon: false,
    href: "custom-theme",
  },
]

export const siderbar = {
  title: "Documentation",
  sections: [
    {
      title: "Guide",
      basepath: "guide",
      prevIcon: "",
      afterIcon: "arrow__right" as const,
      items: guide,
    },
    {
      title: "Theme",
      basepath: "theme",
      prevIcon: "",
      afterIcon: "arrow__right" as const,
      items: theme,
    },
    {
      title: "Atom Components",
      basepath: "atoms",
      prevIcon: "",
      afterIcon: "arrow__right" as const,
      items: atomComponents,
    },
    {
      title: "Molecule Components",
      basepath: "molecules",
      prevIcon: "",
      afterIcon: "arrow__right" as const,
      items: moleculeComponents,
    },
    {
      title: "Layout Components",
      basepath: "layouts",
      prevIcon: "",
      afterIcon: "arrow__right" as const,
      items: layoutComponents,
    },
    {
      title: "Styled Components",
      basepath: "styled",
      prevIcon: "",
      afterIcon: "arrow__right" as const,
      items: styledComponents,
    },
  ],
}
