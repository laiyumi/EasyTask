import React, { useState } from "react";
import Task from "../components/Task";
import { View, StyleSheet, FlatList } from "react-native";
import NewTaskIcon from "../components/NewTaskIcon";
import mockTasks from "../mockData";
import Separator from "../components/Separator";
import TaskDeleteAction from "../components/TaskDeleteAction";

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
  const [tasks, setTasks] = useState(mockTasks);

  const handleDeleteTask = (taskId: number) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  return (
    <View style={styles.contianer}>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Task
            title={item.title}
            status={item.status}
            onPress={() => console.log("Task selected:", item)}
            renderRightActions={() => (
              <TaskDeleteAction onPress={() => handleDeleteTask(item.id)} />
            )}
          />
        )}
        ItemSeparatorComponent={Separator}
      />
      <NewTaskIcon />
    </View>
  );
}

export default TaskListScreen;
