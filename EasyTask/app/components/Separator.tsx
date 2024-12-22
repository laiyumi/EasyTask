import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import colors from "../config/Colors";

const styles = StyleSheet.create({
  separator: {
    height: 1,
    width: "100%",
    backgroundColor: colors.light,
  },
});

function Separator() {
  return <View style={styles.separator}></View>;
}

export default Separator;
