import { StyleSheet, View } from "react-native";
import defaultStyle from "../config/styles";

const styles = StyleSheet.create({
  separator: {
    height: 1,
    width: "100%",
    backgroundColor: defaultStyle.colors.light,
  },
});

function Separator() {
  return <View style={styles.separator}></View>;
}

export default Separator;
