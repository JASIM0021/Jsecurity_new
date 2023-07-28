import { ITheme, extendTheme } from "native-base";
import { Dimensions } from "react-native";
import { LinearGradient } from "react-native-svg";
const { height, width } = Dimensions.get("window");

const Thems = extendTheme({
  colors: {
    primary: "#2A4D50",
    secondary: "#DDF0FF",
    tertiary: "#FF7754",

    gray: "#83829A",
    gray2: "#C1C0C8",

    offwhite: "#F3F4F8",
    white: "#FFFFFF",
    black: "#000000",
    red: "#e81e4d",
    green: " #00C135",
    lightWhite: "#FAFAFC",
  },

  SIZES: {
    xSmall: 10,
    small: 12,
    medium: 16,
    large: 20,
    xLarge: 24,
    xxLarge: 44,
    height,
    width,
  },

  SHADOWS: {
    small: {
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 2,
    },
    medium: {
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 5.84,
      elevation: 5,
    },
  },
  config: {
    dependencies: {
      "linear-gradient": LinearGradient,
    },
  },
});
type CustomThemeType = typeof Thems;
declare module "native-base" {
  interface ICustomTheme extends CustomThemeType {}
}

export default Thems;
