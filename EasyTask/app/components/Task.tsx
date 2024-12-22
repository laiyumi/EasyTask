import { useState } from "react";
import { StyleSheet, View, Text, TouchableHighlight } from "react-native";
import colors from "../config/Colors";
import { TaskStatus } from "../screens/TaskListScreen";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    width: "100%",
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
});

interface TaskProps {
  title: string;
  status: TaskStatus;
  onPress: () => void;
}

function Task({ title, status, onPress }: TaskProps) {
  return (
    <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.status}>{status}</Text>
      </View>
    </TouchableHighlight>
  );
}

export default Task;
