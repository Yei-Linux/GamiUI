import tw from "twin.macro";

export const generateShadowProps = (twinProp: any) => {
  switch (twinProp) {
    case "NONE":
      return tw`shadow-none`;
    case "SMALL":
      return tw`shadow`;
    case "MEDIUM":
      return tw`shadow-md`;
    case "LARGE":
      return tw`shadow-lg`;
    case "XLARGE":
      return tw`shadow-xl`;
    default:
      return "";
  }
};
export const generateTextAlignProps = (twinProp: any) => {
  switch (twinProp) {
    case "LEFT":
      return tw`text-left`;
    case "CENTER":
      return tw`text-center`;
    case "RIGHT":
      return tw`text-right`;
    case "JUSTIFY":
      return tw`text-justify`;
    default:
      return "";
  }
};
export const generateFontWeightProps = (twinProp: any) => {
  switch (twinProp) {
    case "EXTRALIGHT":
      return tw`font-extralight `;
    case "LIGHT":
      return tw`font-light`;
    case "NORMAL":
      return tw`font-normal`;
    case "MEDIUM":
      return tw`font-medium`;
    case "SEMIBOLD":
      return tw`font-semibold`;
    case "BOLD":
      return tw`font-bold`;
    default:
      return "";
  }
};

export const generateBorderTypeProps = (twinProp: any) => {
  switch (twinProp) {
    case "NONE":
      return tw`rounded-none`;
    case "SMALL":
      return tw`rounded`;
    case "MEDIUM":
      return tw`rounded-md`;
    case "ROUNDED":
      return tw`rounded-full`;
    case "FULL":
      return tw`rounded-circle`;
    default:
      return "";
  }
};

export const generateWidthTypeProps = (twinProp: any) => {
  switch (twinProp) {
    case "NONE":
      return tw`w-normal`;
    case "SMALL":
      return tw`w-small`;
    case "NORMAL":
      return tw`w-fit`;
    case "MEDIUM":
      return tw`w-48`;
    case "LARGE":
      return tw`w-64`;
    case "FULL":
      return tw`w-full`;
    default:
      return "";
  }
};

export const generateHeightTypeProps = (twinProp: any) => {
  switch (twinProp) {
    case "SMALL":
      return tw`h-small`;
    case "NORMAL":
      return tw`h-normal`;
    case "MEDIUM":
      return tw`h-48`;
    case "LARGE":
      return tw`h-64`;
    default:
      return "";
  }
};
