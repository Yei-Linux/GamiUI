import { options as optionsButton } from 'designSystem/atoms/Button/constants'
import { options as optionsIcon } from 'designSystem/atoms/Icon'
import { options as optionsGuides } from 'designSystem/atoms/AnimatorGuide'
import { options as optionsEmpty } from 'designSystem/atoms/Empty'
import { options as optionsGradient } from 'designSystem/styled/Gradient'
import { options as optionsWave } from 'designSystem/styled/Wave'
import { options as optionsHeroes } from 'designSystem/game/Character'
import { options as optionsFeatureCard } from 'designSystem/molecules/FeaturedCard'
import { options } from 'designSystem/atoms/Link'

import { DESIGN_TYPES } from 'core/utils/constants'
import { MutableRefObject } from 'react'

export type WidthType = typeof DESIGN_TYPES.width[number]
export type HeightType = typeof DESIGN_TYPES.height[number]
export type BorderType = typeof DESIGN_TYPES.border[number]
export type ShadowType = typeof DESIGN_TYPES.shadow[number]
export type TextAlignType = typeof DESIGN_TYPES.textAlign[number]
export type FontWeightType = typeof DESIGN_TYPES.fontWeight[number]

export type EmptyTypes = typeof optionsEmpty.type[number]

export type ButtonType = typeof optionsButton.type[number]
export type LinkType = typeof options.type[number]

export type IconNames = typeof optionsIcon.names[number]

export type GuidesNames = typeof optionsGuides.type[number]

export type GradientsNames = typeof optionsGradient.names[number]

export type WavessNames = typeof optionsWave.names[number]

export type HeroNames = typeof optionsHeroes.names[number]

export type FeatureCardThemeTypes = typeof optionsFeatureCard.type[number]

export type InputType = 'TEXTFIELD' | 'SELECT'
export type TextFieldType = 'text' | 'password' | 'number'

export type TUseRefDivParams = null | HTMLDivElement
export type TUseRefDiv = MutableRefObject<TUseRefDivParams>
