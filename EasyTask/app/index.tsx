import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TouchableHighlight,
  Button,
  Alert,
  Dimensions,
} from "react-native";

import { useDeviceOrientation } from "@react-native-community/hooks";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 200,
    height: 200,
  },
});

export default function Index() {
  const orientation = useDeviceOrientation();
  console.log(orientation);
  const handlePress = () => {
    console.log("Text pressed!");
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: "dodgerblue",
          width: "100%",
          height: orientation === "landscape" ? "100%" : "10%",
        }}
      ></View>
      <Text>Hello from Yu !</Text>
      <Image
        style={styles.tinyLogo}
        source={require("../assets/images/react-logo.png")}
      />
      <Text numberOfLines={3} onPress={handlePress}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </Text>
      <TouchableHighlight onPress={() => console.log("Image tapped!")}>
        <Image
          style={styles.logo}
          blurRadius={5}
          source={{ uri: "https://picsum.photos/200" }}
        />
      </TouchableHighlight>
      <Button
        color="orange"
        title="click me"
        onPress={() =>
          Alert.alert("My alert", "button tapped!", [
            { text: "yes", onPress: () => console.log("yes") },
            { text: "no", onPress: () => console.log("no") },
          ])
        }
      />
    </View>
  );
}
