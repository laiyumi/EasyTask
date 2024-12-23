import { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import defaultStyle from "../config/styles";

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyle.colors.white,
    borderRadius: 25,
    flexDirection: "row",
    width: "100%",
    padding: 10,
    marginVertical: 10,
  },
});

function NewTaskInput({ placeholder }: { placeholder: string }) {
  const [title, setTitle] = useState("");
  return (
    <View style={styles.container}>
      <TextInput
        style={defaultStyle.text}
        placeholder={placeholder}
        onChangeText={(text) => setTitle(text)}
      />
    </View>
  );
}

export default NewTaskInput;
