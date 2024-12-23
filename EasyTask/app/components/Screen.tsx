import React from "react";
import { View, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
});

function Screen({ children }: { children: React.ReactNode }) {
  return <View style={styles.container}>{children}</View>;
}

export default Screen;
