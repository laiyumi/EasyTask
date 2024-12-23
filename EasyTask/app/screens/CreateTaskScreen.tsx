import React from "react";
import { View } from "react-native";
import AppTextInput from "../components/AppTextInput";
import ToggleButton from "../components/ToggleButton";

function CreateTaskScreen() {
  return (
    <View>
      {/* <AppTextInput placeholder="Title" />
      <AppTextInput placeholder="Description" /> */}
      <ToggleButton />
    </View>
  );
}

export default CreateTaskScreen;
