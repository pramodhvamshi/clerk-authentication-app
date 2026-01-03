import { View, Platform, StyleSheet } from "react-native";

let SignInComponent;

if (Platform.OS === "web") {
  SignInComponent = require("@clerk/clerk-react").SignIn;
} else {
  SignInComponent = require("@clerk/clerk-expo").SignIn;
}

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <SignInComponent
        appearance={{
          elements: {
            card: {
              borderRadius: 16,
            },
            formButtonPrimary: {
              backgroundColor: "#2563eb",
              borderRadius: 999,
            },
          },
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f6fb",
    justifyContent: "center",
    alignItems: "center",
  },
});
