import { StyleSheet, View } from "react-native";
import defaultStyle from "../config/styles";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  closeIcon: {
    width: 50,
    height: 50,
    backgroundColor: defaultStyle.colors.primary,
    position: "absolute",
    top: 40,
    left: 30,
  },
  deleteIcon: {
    width: 50,
    height: 50,
    backgroundColor: defaultStyle.colors.secondary,
    position: "absolute",
    top: 40,
    right: 30,
  },
});

function ViewTaskScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}></View>
      <View style={styles.deleteIcon}></View>
    </View>
  );
}

export default ViewTaskScreen;
