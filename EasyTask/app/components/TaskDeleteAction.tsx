import { StyleSheet, Text, View } from "react-native";
import Reanimated, {
  SharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";
import colors from "../config/Colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

const styles = StyleSheet.create({
  container: {
    width: 50,
    height: 50,
    backgroundColor: colors.danger,
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
