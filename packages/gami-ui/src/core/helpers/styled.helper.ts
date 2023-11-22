type TemplateStyleEmotion = string | string[]
type ObectStyleEmotion = Record<string, unknown>
export type StyleEmotion = TemplateStyleEmotion | ObectStyleEmotion

/**
 * Create function that:
 * 1) Add variant props to handle emotion styles, probably
 * we need to create a class of variant and handle variant styles by class created
 * 2) Implement string tokens in value style
 * 3) Implement tailwind utilities(https://tailwindcss.com/docs/adding-custom-styles)
 * 4) Create css prop
 */
export const gamiStyled = (...args: StyleEmotion[]) => {
  return args
}
