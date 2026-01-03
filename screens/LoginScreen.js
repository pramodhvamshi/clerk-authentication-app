import { View, Platform } from "react-native";

let SignInComponent;

if (Platform.OS === "web") {
  // Web uses clerk-react
  SignInComponent = require("@clerk/clerk-react").SignIn;
} else {
  // Mobile uses clerk-expo
  SignInComponent = require("@clerk/clerk-expo").SignIn;
}

export default function LoginScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f4f6fb",
      }}
    >
      <View
        style={{
          width: Platform.OS === "web" ? 420 : "90%",
        }}
      >
        <SignInComponent
          appearance={{
            elements: {
              card: { boxShadow: "0 8px 25px rgba(0,0,0,0.15)" },
            },
          }}
        />
      </View>
    </View>
  );
}
