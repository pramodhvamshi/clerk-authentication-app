import { View, Text, TouchableOpacity } from "react-native";
import { useUser, useAuth } from "@clerk/clerk-expo";

export default function ProfileScreen({ navigation }) {
  const { user } = useUser();
  const { signOut } = useAuth();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#f8fafc",
        alignItems: "center",
      }}
    >
      {/* Header */}
      <View
        style={{
          width: "100%",
          height: 160,
          backgroundColor: "#2563eb",
          justifyContent: "flex-end",
          paddingBottom: 24,
          paddingHorizontal: 28,
        }}
      >
        <Text
          style={{
            color: "#ffffff",
            fontSize: 26,
            fontWeight: "700",
          }}
        >
          Profile
        </Text>
      </View>

      {/* Profile Card Container */}
      <View
        style={{
          width: "92%",
          maxWidth: 420,
          backgroundColor: "#ffffff",
          borderRadius: 20,
          paddingVertical: 24,
          paddingHorizontal: 24,
          marginTop: -50,
          alignItems: "center",
          shadowColor: "#000",
          shadowOpacity: 0.08,
          shadowRadius: 14,
          elevation: 5,
        }}
      >
        {/* Avatar */}
        <View
          style={{
            height: 90,
            width: 90,
            borderRadius: 45,
            backgroundColor: "#e5e7eb",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 14,
          }}
        >
          <Text style={{ fontSize: 32, fontWeight: "700", color: "#1f2937" }}>
            {user?.firstName?.[0] || "U"}
          </Text>
        </View>

        {/* Name */}
        <Text
          style={{
            fontSize: 22,
            fontWeight: "700",
            color: "#0f172a",
            marginBottom: 4,
          }}
        >
          {user?.fullName || "User"}
        </Text>

        {/* Email */}
        <Text
          style={{
            fontSize: 14,
            color: "#64748b",
            marginBottom: 16,
          }}
        >
          {user?.primaryEmailAddress?.emailAddress}
        </Text>

        {/* Bio */}
        <Text
          style={{
            fontSize: 14.5,
            color: "#334155",
            textAlign: "center",
            lineHeight: 22,
            marginBottom: 28,
          }}
        >
          Logged in securely using Clerk authentication. This profile represents
          a protected user session within the application.
        </Text>

        {/* Buttons */}
        <View style={{ alignItems: "center", width: "100%" }}>
          {/* Back */}
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{
              borderWidth: 1,
              borderColor: "#2563eb",
              paddingVertical: 10,
              paddingHorizontal: 42,
              borderRadius: 999,
              marginBottom: 14,
            }}
          >
            <Text
              style={{
                color: "#2563eb",
                fontSize: 14,
                fontWeight: "600",
              }}
            >
              Back to Home
            </Text>
          </TouchableOpacity>

          {/* Logout */}
          <TouchableOpacity
            onPress={signOut}
            style={{
              backgroundColor: "#ef4444",
              paddingVertical: 10,
              paddingHorizontal: 42,
              borderRadius: 999,
            }}
          >
            <Text
              style={{
                color: "#ffffff",
                fontSize: 14,
                fontWeight: "600",
              }}
            >
              Logout
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
