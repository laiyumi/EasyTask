import React, { useState } from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import AppText from "../components/AppText";
import AppTextInput from "../components/AppTextInput";
import Screen from "../components/Screen";
import AppButton from "../components/AppButton";
import { Formik } from "formik";
import * as Yup from "yup";
import ErrorMessage from "../components/ErrorMessage";

const styles = StyleSheet.create({
  logo: {
    width: 100,
    height: 100,
    alignSelf: "center",
    marginBottom: 20,
    marginTop: 50,
  },
});

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen() {
  return (
    <Screen>
      <Image
        style={styles.logo}
        source={require("../assets/images/logo.png")}
      ></Image>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleSubmit, errors }) => (
          <>
            <AppTextInput
              icon="email"
              placeholder="Email"
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
              textContentType="emailAddress"
              onChangeText={handleChange("email")}
            />
            <ErrorMessage error={errors.email} />
            <AppTextInput
              icon="lock"
              placeholder="Password"
              autoCapitalize="none"
              autoCorrect={false}
              secureTextEntry
              textContentType="password"
              onChangeText={handleChange("password")}
            />
            <ErrorMessage error={errors.password} />
            <AppButton title="Login" onPress={handleSubmit} />
          </>
        )}
      </Formik>
    </Screen>
  );
}

export default LoginScreen;
