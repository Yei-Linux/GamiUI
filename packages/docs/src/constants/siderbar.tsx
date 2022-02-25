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
    href: "/",
  },
  {
    title: "Empty",

    icon: "bullet" as const,
    hasIcon: false,
    href: "/",
  },
  {
    title: "Icon",

    icon: "bullet" as const,
    hasIcon: false,
    href: "/",
  },
  {
    title: "Image",

    icon: "bullet" as const,
    hasIcon: false,
    href: "/",
  },
  {
    title: "Link",

    icon: "bullet" as const,
    hasIcon: false,
    href: "/",
  },
  {
    title: "Message",

    icon: "bullet" as const,
    hasIcon: false,
    href: "/",
  },
  {
    title: "Progress",

    icon: "bullet" as const,
    hasIcon: false,
    href: "/",
  },
  {
    title: "RichText",

    icon: "bullet" as const,
    hasIcon: false,
    href: "/",
  },
  {
    title: "Tag",

    icon: "bullet" as const,
    hasIcon: false,
    href: "/",
  },
  {
    title: "Title",

    icon: "bullet" as const,
    hasIcon: false,
    href: "/",
  },
]

const moleculeComponents = [
  {
    title: "Drawer",

    icon: "bullet" as const,
    hasIcon: false,
    href: "/",
  },
  {
    title: "Floating",

    icon: "bullet" as const,
    hasIcon: false,
    href: "/",
  },
  {
    title: "Menu",

    icon: "bullet" as const,
    hasIcon: false,
    href: "/",
  },
]

const layoutComponents = [
  {
    title: "Col",
    icon: "bullet" as const,
    hasIcon: false,
    href: "/",
  },
  {
    title: "Container",
    icon: "bullet" as const,
    hasIcon: false,
    href: "/",
  },
  {
    title: "Layout",
    icon: "bullet" as const,
    hasIcon: false,
    href: "/",
  },
  {
    title: "Row",

    icon: "bullet" as const,
    hasIcon: false,
    href: "/",
  },
  {
    title: "Sider",

    icon: "bullet" as const,
    hasIcon: false,
    href: "/",
  },
  {
    title: "Spacer",

    icon: "bullet" as const,
    hasIcon: false,
    href: "/",
  },
]

const styledComponents = [
  {
    title: "Transition",
    icon: "bullet" as const,
    hasIcon: false,
    href: "/",
  },
]

const guide = [
  {
    title: "Getting Started",
    icon: "bullet" as const,
    hasIcon: false,
    href: "/",
  },
  {
    title: "Custom Styles",
    icon: "bullet" as const,
    hasIcon: false,
    href: "/",
  },
  {
    title: "GamiUI + Frameworks and libs",
    icon: "bullet" as const,
    hasIcon: false,
    href: "/",
  },
]

const theme = [
  {
    title: "Default theme",
    icon: "bullet" as const,
    hasIcon: false,
    href: "/",
  },
  {
    title: "Customize theme",
    icon: "bullet" as const,
    hasIcon: false,
    href: "/",
  },
  {
    title: "Customize tokens",
    icon: "bullet" as const,
    hasIcon: false,
    href: "/",
  },
  {
    title: "Customize styles",
    icon: "bullet" as const,
    hasIcon: false,
    href: "/",
  },
  {
    title: "Customize media",
    icon: "bullet" as const,
    hasIcon: false,
    href: "/",
  },
  {
    title: "Dark mode",
    icon: "bullet" as const,
    hasIcon: false,
    href: "/",
  },
]

export const siderbar = {
  title: "Documentation",
  sections: [
    {
      title: "Guide",
      basepath: "atoms",
      prevIcon: "",
      afterIcon: "bullet" as const,
      items: guide,
    },
    {
      title: "Theme",
      basepath: "atoms",
      prevIcon: "",
      afterIcon: "bullet" as const,
      items: theme,
    },
    {
      title: "Atom Components",
      basepath: "atoms",
      prevIcon: "",
      afterIcon: "bullet" as const,
      items: atomComponents,
    },
    {
      title: "Molecule Components",
      basepath: "atoms",
      prevIcon: "",
      afterIcon: "bullet" as const,
      items: moleculeComponents,
    },
    {
      title: "Layout Components",
      basepath: "atoms",
      prevIcon: "",
      afterIcon: "bullet" as const,
      items: layoutComponents,
    },
    {
      title: "Styled Components",
      basepath: "atoms",
      prevIcon: "",
      afterIcon: "bullet" as const,
      items: styledComponents,
    },
  ],
}
