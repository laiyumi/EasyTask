import React from "react";
import Task from "../components/Task";
import { View, StyleSheet, FlatList } from "react-native";
import NewTaskIcon from "../components/NewTaskIcon";
import mockTasks from "../mockData";
import Separator from "../components/Separator";

export enum TaskStatus {
  Pending = "pending",
  Completed = "completed",
}

const styles = StyleSheet.create({
  contianer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
});

function TaskListScreen() {
  return (
    <View style={styles.contianer}>
      <FlatList
        data={mockTasks}
        keyExtractor={(mockTasks) => mockTasks.id.toString()}
        renderItem={({ item }) => (
          <Task
            title={item.title}
            status={item.status}
            onPress={() => console.log("Task selected:", item)}
          />
        )}
        ItemSeparatorComponent={Separator}
      />
      <NewTaskIcon />
    </View>
  );
}

export default TaskListScreen;
