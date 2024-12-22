import React from "react";
import { Text, StyleSheet, Platform } from "react-native";

interface AppTextProps {
  children: React.ReactNode;
}

const styles = StyleSheet.create({
  text: {
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    fontSize: 18,
  },
});

function AppText({ children }: AppTextProps) {
  return <Text style={styles.text}>{children}</Text>;
}

export default AppText;
