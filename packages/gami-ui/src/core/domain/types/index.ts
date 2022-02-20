import { options as optionsButton } from 'designSystem/atoms/Button/constants'
import { options as optionsGuides } from 'designSystem/atoms/AnimatorGuide'
import { options as optionsEmpty } from 'designSystem/atoms/Empty'
import { options as optionsGradient } from 'designSystem/styled/Gradient'
import { options as optionsWave } from 'designSystem/styled/Wave'
import { options as optionsHeroes } from 'designSystem/game/Character'
import { options as optionsFeatureCard } from 'designSystem/molecules/FeaturedCard'
import { options as optionsAvatar } from 'designSystem/atoms/Avatar/constants'
import { options as optionsImage} from 'designSystem/atoms/Image/constants'
import { options } from 'designSystem/atoms/Link'

import { DESIGN_TYPES, DYNAMIC_DESIGN_TYPES } from 'core/utils/constants'
import { MutableRefObject } from 'react'
import { TTokensKeySizeComponents } from 'providers/ThemeGamification/ThemeGamification'
import { TIconsPack } from 'designSystem/atoms/Icon/constants'

export type DesignTypes = typeof DESIGN_TYPES
export type DynamicDesignTypes = typeof DYNAMIC_DESIGN_TYPES[number]

export type WidthType = typeof DESIGN_TYPES.width[number]
export type HeightType = typeof DESIGN_TYPES.height[number]
export type RoundedType = typeof DESIGN_TYPES.rounded[number]
export type ShadowType = typeof DESIGN_TYPES.shadow[number]
export type TextAlignType = typeof DESIGN_TYPES.textAlign[number]
export type FontWeightType = typeof DESIGN_TYPES.fontWeight[number]
export type SizeType = typeof DESIGN_TYPES.size[number]

export type EmptyTypes = typeof optionsEmpty.type[number]

export type ButtonType = typeof optionsButton.type[number]
export type ButtonHtmlType = typeof optionsButton.typeHtml[number]
export type LinkType = typeof options.type[number]

export type ImageBackgroundType = typeof optionsImage.typeImageBackground[number]

export type ZoomModeType = typeof optionsAvatar.zoomMode[number]
export type TextModeType = typeof optionsAvatar.textMode[number]

export type IconNames = keyof TIconsPack

export type GuidesNames = typeof optionsGuides.type[number]

export type GradientsNames = typeof optionsGradient.names[number]

export type WavessNames = typeof optionsWave.names[number]

export type HeroNames = typeof optionsHeroes.names[number]

export type FeatureCardThemeTypes = typeof optionsFeatureCard.type[number]

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
