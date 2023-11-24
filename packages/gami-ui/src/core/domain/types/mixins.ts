import { TWithGlobalStylesUI } from 'core/utils/base'

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
export type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>
export type OnlyTheme = PartialBy<Pick<TWithGlobalStylesUI, 'theme'>, 'theme'>
