import { options as optionsButton } from 'designSystem/atoms/Button/constants'
import { options as optionsEmpty } from 'designSystem/atoms/Empty'
import { options as optionsAvatar } from 'designSystem/atoms/Avatar/constants'
import { options as optionsImage } from 'designSystem/atoms/Image/constants'
import { options as optionsMessage } from 'designSystem/atoms/Message/constants'
import { options as optionsProgress } from 'designSystem/atoms/Progress/constants'
import { options as optionsTitle } from 'designSystem/atoms/Title/constants'
import { options as optionsDrawer } from 'designSystem/molecules/Drawer/constants'
import { options as optionsFloating } from 'designSystem/molecules/Floating/constants'
import { options as optionsRow } from 'designSystem/layouts/Row/constants'
import { options as optionsCol } from 'designSystem/layouts/Col/constants'
import { options } from 'designSystem/atoms/Link'

import { DESIGN_TYPES, DYNAMIC_DESIGN_TYPES } from 'core/utils/constants'
import { MutableRefObject } from 'react'
import { TTokensKeySizeComponents } from 'providers/ThemeGamification/ThemeGamification'
import { TIconsPack } from 'designSystem/atoms/Icon/constants'

export type DesignTypes = typeof DESIGN_TYPES
export type DynamicDesignTypes = (typeof DYNAMIC_DESIGN_TYPES)[number]

export type WidthType = (typeof DESIGN_TYPES.width)[number]
export type HeightType = (typeof DESIGN_TYPES.height)[number]
export type RoundedType = (typeof DESIGN_TYPES.rounded)[number]
export type ShadowType = (typeof DESIGN_TYPES.shadow)[number]
export type TextAlignType = (typeof DESIGN_TYPES.textAlign)[number]
export type FontWeightType = (typeof DESIGN_TYPES.fontWeight)[number]
export type SizeType = (typeof DESIGN_TYPES.size)[number]

export type EmptyTypes = (typeof optionsEmpty.type)[number]

export type ComponentThemeType = (typeof optionsButton.type)[number]

export type ButtonHtmlType = (typeof optionsButton.typeHtml)[number]
export type LinkType = (typeof options.type)[number]

export type ImageBackgroundType =
  (typeof optionsImage.typeImageBackground)[number]

export type ProgressType = (typeof optionsProgress.type)[number]

export type LevelType = (typeof optionsTitle.typeLevel)[number]

export type ZoomModeType = (typeof optionsAvatar.zoomMode)[number]
export type TextModeType = (typeof optionsAvatar.textMode)[number]

export type IconNames = keyof TIconsPack

export type ColTypes = (typeof optionsCol.type)[number]
export type ColSpacingTypes = (typeof optionsCol.spacingType)[number]

export type JustifyContentTypes = (typeof optionsRow.justifyContentType)[number]
export type AlignItemsTypes = (typeof optionsRow.alignItemsType)[number]
export type DirectionTypes = (typeof optionsRow.directionType)[number]

export type DirectionMessageType = (typeof optionsMessage.directionType)[number]

export type DrawerPlacementTypes = (typeof optionsDrawer.placementType)[number]

export type FloatingTypes = (typeof optionsFloating.type)[number]

export type InputType = 'TEXTFIELD' | 'SELECT'
export type TextFieldType = 'text' | 'password' | 'number'
export type InheritStyleComponent = TTokensKeySizeComponents | null

export type TOnClick = React.MouseEvent

export type TUseRefTimeParams = null | NodeJS.Timeout
export type TUseRefTime = null | MutableRefObject<TUseRefTimeParams>

export type TUseRefDivParams = null | HTMLDivElement
export type TUseRefDiv = MutableRefObject<TUseRefDivParams>

export type TUseRefCanvasParams = null | HTMLCanvasElement
export type TUseRefCanvas = MutableRefObject<TUseRefCanvasParams>
