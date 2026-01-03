import { ClerkProvider } from "@clerk/clerk-expo";
import * as SecureStore from "expo-secure-store";
import RootNavigator from "./navigation/RootNavigator";

const CLERK_PUBLISHABLE_KEY = "pk_test_ZGlzdGluY3QtYmxvd2Zpc2gtOTAuY2xlcmsuYWNjb3VudHMuZGV2JA";

const tokenCache = {
  async getToken(key) {
    return SecureStore.getItemAsync(key);
  },
  async saveToken(key, value) {
    return SecureStore.setItemAsync(key, value);
  },
};

export default function App() {
  return (
    <ClerkProvider
      publishableKey={CLERK_PUBLISHABLE_KEY}
      tokenCache={tokenCache}
    >
      <RootNavigator />
    </ClerkProvider>
  );
}
