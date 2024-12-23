import React from "react";
import { Text } from "react-native";
import defaultStyle from "../config/styles";

interface AppTextProps {
  children: React.ReactNode;
  style: object;
}

function AppText({ children, style }: AppTextProps) {
  return <Text style={[defaultStyle.text, style]}>{children}</Text>;
}

export default AppText;
