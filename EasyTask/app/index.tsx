import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TouchableHighlight,
  Button,
  Alert,
  Dimensions,
} from "react-native";

import { useDeviceOrientation } from "@react-native-community/hooks";
import WelcomeScreen from "./screens/WelcomeScreen";
import ViewTaskScreen from "./screens/ViewTaskScreen";
import AppText from "./components/AppText";
import TaskListScreen from "./screens/TaskListScreen";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 200,
    height: 200,
  },
});

export default function Index() {
  return (
    // <WelcomeScreen />
    // <ViewTaskScreen />
    // <NewTaskIcon />
    <TaskListScreen />
  );
}
