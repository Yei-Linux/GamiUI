import { IComponentsVariant } from 'core/domain/interfaces/IComponentsVariant'
import {
  TComponentEvents,
  TDesignTokens,
  TDesignUI,
} from 'core/domain/types/design-system'
import { Renderer } from 'marked'

export type TRichText = {
  /**
   * Text to Show
   */
  text: string
}

export type TMarkedRenderRefParams = Renderer<never> | undefined
export type TMarkedRenderRef = React.MutableRefObject<TMarkedRenderRefParams>

export type TRichTextComponent = TRichText &
  TDesignTokens &
  TDesignUI &
  TComponentEvents<any, any> &
  IComponentsVariant
