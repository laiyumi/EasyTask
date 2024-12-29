import React from "react";
import AppText from "./AppText";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  error: {
    color: "red",
  },
});

function ErrorMessage({ error }: { error: string | undefined }) {
  if (!error) return null;

  return <AppText style={styles.error}>{error}</AppText>;
}

export default ErrorMessage;
