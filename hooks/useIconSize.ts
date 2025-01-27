import useWindowSize from './useWindowSize';

type SemanticUISizes = "mini" | "tiny" | "small" | "default" | "large" | "big" | "huge" | "massive";
const semanticUISizing = {
  mini: 7,
  tiny: 8.5,
  small: 12.5,
  default: 16.5,
  large: 25,
  big: 33,
  huge: 66,
  massive: 132,
} as const;

export default function useIconSize() {
  const { width: screenWidth } = useWindowSize();
  let iconSize: SemanticUISizes = "large";
  let iconWidth = 80;
  let iconHeight = 80;

  if (screenWidth <= 400) {
    iconSize = "large";
  } else if (screenWidth <= 600) {
    iconSize = "big";
  } else if (screenWidth <= 900) {
    iconSize = "huge";
  } else {
    iconSize = "huge"
  }

  iconWidth = semanticUISizing[iconSize];
  iconHeight = semanticUISizing[iconSize];

  return { iconSize, iconWidth, iconHeight, };
}
