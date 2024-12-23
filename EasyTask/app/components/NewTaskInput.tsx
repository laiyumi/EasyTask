import { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import colors from "../config/Colors";

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: 10,
    flexDirection: "row",
    width: "100%",
    padding: 10,
    marginVertical: 10,
  },
  textInput: {
    fontSize: 18,
    padding: 5,
  },
});

function NewTaskInput({ placeholder }: { placeholder: string }) {
  const [title, setTitle] = useState("");
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder={placeholder}
        onChangeText={(text) => setTitle(text)}
      />
    </View>
  );
}

export default NewTaskInput;
