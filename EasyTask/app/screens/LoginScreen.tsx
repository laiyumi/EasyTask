import React, { useState } from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import AppText from "../components/AppText";
import AppTextInput from "../components/AppTextInput";
import Screen from "../components/Screen";
import AppButton from "../components/AppButton";

const styles = StyleSheet.create({
  logo: {
    width: 100,
    height: 100,
    alignSelf: "center",
    marginBottom: 20,
    marginTop: 50,
  },
});

function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <Screen>
      <Image
        style={styles.logo}
        source={require("../assets/images/logo.png")}
      ></Image>
      <AppTextInput
        icon="email"
        placeholder="Email"
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType="email-address"
        textContentType="emailAddress"
        onChangeText={(text) => setEmail(text)}
      />
      <AppTextInput
        icon="lock"
        placeholder="Password"
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry
        textContentType="password"
        onChangeText={(text) => setPassword(text)}
      />
      <Text>{email}</Text>
      <AppButton title="Login" onPress={() => console.log(email, password)} />
    </Screen>
  );
}

export default LoginScreen;
