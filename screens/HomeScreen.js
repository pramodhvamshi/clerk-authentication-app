import { View, Text, TouchableOpacity, Image, Platform } from "react-native";
import { useUser } from "@clerk/clerk-expo";

export default function HomeScreen({ navigation }) {
  const { user } = useUser();
  const initial = user?.firstName?.[0]?.toUpperCase() || "U";

  return (
    <View style={{ flex: 1, backgroundColor: "#f8fafc" }}>
      {/* Header */}
      <View
        style={{
          backgroundColor: "#ffffff",
          paddingVertical: 16,
          paddingHorizontal: 28,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottomWidth: 1,
          borderColor: "#e5e7eb",
        }}
      >
        {/* Left: Logo + Title */}
        <View style={{ flexDirection: "row", alignItems: "center", gap: 12 }}>
          <Image
            source={require("../assets/logo.png")}
            style={{
              width: 32,
              height: 32,
              resizeMode: "contain",
            }}
          />

          <Text
            style={{
              fontSize: 22,
              fontWeight: "700",
              color: "#0f172a",
            }}
          >
            Dashboard
          </Text>
        </View>

        {/* Right: Profile Avatar */}
        <TouchableOpacity
          onPress={() => navigation.navigate("Profile")}
          style={{
            height: 44,
            width: 44,
            borderRadius: 22,
            backgroundColor: "#2563eb",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              color: "#ffffff",
              fontSize: 16,
              fontWeight: "700",
            }}
          >
            {initial}
          </Text>
        </TouchableOpacity>
      </View>

      {/* Main Content */}
      <View
        style={{
          paddingHorizontal: 28,
          paddingTop: 36,
          maxWidth: 1100,
          width: "100%",
          alignSelf: "center",
        }}
      >
        {/* Welcome */}
        <Text
          style={{
            fontSize: 32,
            fontWeight: "700",
            color: "#020617",
            marginBottom: 6,
          }}
        >
          Welcome back, {user?.firstName || "User"} 👋
        </Text>

        <Text
          style={{
            fontSize: 15,
            color: "#64748b",
            marginBottom: 32,
          }}
        >
          Here's what's happening with your account today.
        </Text>

        {/* Cards */}
        <View
          style={{
            flexDirection: Platform.OS === "web" ? "row" : "column",
            gap: 22,
          }}
        >
          {/* Secure Session */}
          <View
            style={{
              flex: 2,
              backgroundColor: "#ffffff",
              padding: 24,
              borderRadius: 18,
              borderWidth: 1,
              borderColor: "#e5e7eb",
            }}
          >
            <Text
              style={{
                fontSize: 18,
                fontWeight: "600",
                marginBottom: 10,
                color: "#0f172a",
              }}
            >
              🔐 Secure Session
            </Text>

            <Text
              style={{
                fontSize: 14.5,
                color: "#475569",
                lineHeight: 22,
                marginBottom: 18,
              }}
            >
              You are authenticated and accessing protected content. Your session
              is actively managed and secured using Clerk authentication.
            </Text>

            <View
              style={{
                backgroundColor: "#f1f5f9",
                paddingVertical: 12,
                paddingHorizontal: 14,
                borderRadius: 10,
                alignSelf: "flex-start",
              }}
            >
              <Text style={{ fontSize: 14, color: "#334155" }}>
                ✅ Status: Active
              </Text>
            </View>
          </View>

          {/* Quick Actions */}
          <View
            style={{
              flex: 1,
              backgroundColor: "#ffffff",
              padding: 24,
              borderRadius: 18,
              borderWidth: 1,
              borderColor: "#e5e7eb",
            }}
          >
            <Text
              style={{
                fontSize: 18,
                fontWeight: "600",
                marginBottom: 18,
                color: "#0f172a",
              }}
            >
            Quick Action
            </Text>

            <TouchableOpacity
              onPress={() => navigation.navigate("Profile")}
              style={{
                backgroundColor: "#2563eb",
                paddingVertical: 12,
                alignItems: "center",
                borderRadius:"0px",
              }}
            >
              <Text
                style={{
                  color: "#ffffff",
                  fontSize: 14,
                  fontWeight: "600",
                }}
              >
                View Profile →
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
