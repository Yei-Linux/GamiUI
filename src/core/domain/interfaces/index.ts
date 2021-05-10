import { EInputType, ETextFieldType } from "../enums";

export interface ItemSelect {
    key: string;
    value: string;
}

export interface FormSchema {
    label: string;
    placeholder: string;
    type: EInputType;
    name: string;
    defaultValue?: any;
    hasValidation: boolean;
    textType: ETextFieldType;
    items?: ItemSelect[]
}

export interface SubmitSchema {
    label: string;
    placeholder: string;
    onSubmit: Function;
    extraFooter?: React.ReactNode
}