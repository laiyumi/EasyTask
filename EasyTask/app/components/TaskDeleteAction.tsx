import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StyleSheet, View } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import colors from "../config/Colors";
import defaultStyle from "../config/styles";

const styles = StyleSheet.create({
  container: {
    width: 50,
    height: 50,
    backgroundColor: defaultStyle.colors.danger,
    justifyContent: "center",
    alignItems: "center",
  },
});

function TaskDeleteAction({ onPress }: { onPress: () => void }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons
          name="trash-can"
          size={35}
          color={colors.white}
        ></MaterialCommunityIcons>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default TaskDeleteAction;
