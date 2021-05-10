import { fadeCenterIn, fadeCenterOut, fadeTopIn, fadeTopOut } from "../../styles/animations";

export const getAnimationModal = (
  animationType: "top" | "center",
  isVisible: boolean
) => {
  switch (animationType) {
    case "top":
      return isVisible ? fadeTopIn : fadeTopOut;
    case "center":
        return isVisible ? fadeCenterIn : fadeCenterOut;
    default:
        return isVisible ? fadeCenterIn : fadeCenterOut;
  }
};
