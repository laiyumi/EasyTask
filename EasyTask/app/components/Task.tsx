import { StyleSheet, Text, TouchableHighlight, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import ReanimatedSwipeable from "react-native-gesture-handler/ReanimatedSwipeable";
import colors from "../config/Colors";
import { TaskStatus } from "../screens/TaskListScreen";
import TaskDeleteAction from "./TaskDeleteAction";
import { SharedValue } from "react-native-reanimated";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    width: "100%",
    backgroundColor: colors.white,
  },
  title: {
    marginLeft: 10,
    marginRight: 10,
  },
  status: {
    backgroundColor: colors.accent,
    borderRadius: 50,
    padding: 5,
  },
  swipeable: {
    height: 50,
    backgroundColor: "papayawhip",
    alignItems: "center",
  },
});

interface TaskProps {
  title: string;
  status: TaskStatus;
  onPress: () => void;
  renderRightActions: (
    progressAnimatedValue: SharedValue<number>,
    dragAnimatedValue: SharedValue<number>
  ) => JSX.Element;
}

function Task({ title, status, onPress, renderRightActions }: TaskProps) {
  return (
    <GestureHandlerRootView>
      <ReanimatedSwipeable renderRightActions={renderRightActions}>
        <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
          <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.status}>{status}</Text>
          </View>
        </TouchableHighlight>
      </ReanimatedSwipeable>
    </GestureHandlerRootView>
  );
}

export default Task;
