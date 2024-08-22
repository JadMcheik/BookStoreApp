import { SplashScreen, Stack } from "expo-router";
import { Colors } from "../themes/Colors";
import { useFonts } from "expo-font";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

const Layout = () => {
  const [loaded, error] = useFonts({
    "circular-book": require("../assets/fonts/CircularStd-Book.otf"),
    "circular-bold": require("../assets/fonts/CircularStd-Bold.otf"),
    "circular-medium": require("../assets/fonts/CircularStd-Medium.otf"),
  });
  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <Stack
      screenOptions={{
        headerShadowVisible: false,
        headerBackTitleVisible: false,
        headerTitle: "",
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          headerStyle: {
            backgroundColor: Colors.mainBlue,
          },
        }}
      />
      <Stack.Screen name="sign-in" />
      <Stack.Screen name="sign-up" />
      <Stack.Screen name="forgot-password" />

      <Stack.Screen name="(tabs)" options={{ headerShown: true }} />
    </Stack>
  );
};

export default Layout;
