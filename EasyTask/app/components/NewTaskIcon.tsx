import { Image, StyleSheet, View } from "react-native";
import defaultStyle from "../config/styles";

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 100,
    backgroundColor: defaultStyle.colors.secondary,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: defaultStyle.colors.secondary,
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
  },
  icon: {
    width: 50,
    height: 50,
  },
});

function NewTaskIcon() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.icon}
        source={require("../assets/images/add-icon.png")}
      />
    </View>
  );
}

export default NewTaskIcon;
