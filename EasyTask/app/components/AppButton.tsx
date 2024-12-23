import { StyleSheet, Text, TouchableOpacity } from "react-native";
import defaultStyle from "../config/styles";

const styles = StyleSheet.create({
  button: {
    backgroundColor: defaultStyle.colors.secondary,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    padding: 15,
  },
  text: {
    color: defaultStyle.colors.white,
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});

interface AppButtonProps {
  title: string;
  onPress: () => void;
}

function AppButton({ title, onPress }: AppButtonProps) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

export default AppButton;
