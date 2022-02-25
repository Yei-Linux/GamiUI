export type TComponents = "RichText" | "CodeBlock" | "Table" | "Example"

export interface IItem {
  component: TComponents
  props?: Record<string, unknown>
  example?: React.ReactNode
}

export interface ISection {
  title: string
  items: IItem[]
}

export interface IPages {
  title: string
  sections: ISection[]
  apis: ISection[]
}
