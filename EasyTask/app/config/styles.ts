import { Platform } from "react-native";
import colors from "./Colors";

export default {
  colors,
  text: {
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    fontSize: 18,
    padding: 5,
    color: colors.black,
  },
};
