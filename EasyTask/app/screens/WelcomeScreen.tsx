import React from "react";
import { View, ImageBackground, StyleSheet, Image, Text } from "react-native";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonContainer: {
    padding: 30,
    width: "100%",
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 100,
    alignItems: "center",
    gap: 20,
  },
  tagline: {
    fontSize: 25,
    fontWeight: "bold",
  },
});

function WelcomeScreen() {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/images/background.png")}
    >
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../assets/images/logo.png")}
        ></Image>
        <Text style={styles.tagline}>Welcome to EasyTask</Text>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton title="Login" />
      </View>
    </ImageBackground>
  );
}

export default WelcomeScreen;
