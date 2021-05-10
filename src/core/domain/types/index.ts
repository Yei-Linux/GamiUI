import { options as optionsButton } from "../../../designSystem/atoms/Button/constants"
import { options as optionsIcon} from "../../../designSystem/atoms/Icon";
import { options as optionsGuides} from "../../../designSystem/atoms/AnimatorGuide";
import { options as optionsStyle} from "../../utils/constants";

export type WidthType = typeof optionsStyle.width[number];
export type HeightType = typeof optionsStyle.height[number];
export type BorderType = typeof optionsStyle.border[number];
export type ShadowType  = typeof optionsStyle.shadow[number];
export type TextAlignType = typeof optionsStyle.textAlign[number];
export type FontWeightType = typeof optionsStyle.fontWeight[number];

export type ButtonType = typeof optionsButton.type[number];

export type IconNames = typeof optionsIcon.names[number]

export type GuidesNames = typeof optionsGuides.type[number]

export type InputType = 'TEXTFIELD' | 'SELECT'
export type TextFieldType = 'text' | 'password' | 'number'
