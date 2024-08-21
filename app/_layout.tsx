import { Stack } from "expo-router";
import { Colors } from "../themes/Colors";
import { useFonts } from "expo-font";

const Layout = () => {

  const [loaded, error] = useFonts({
    'circular-book': require('../assets/fonts/CircularStd-Book.otf'),
    'circular-bold': require('../assets/fonts/CircularStd-Bold.otf'),
    'circular-medium': require('../assets/fonts/CircularStd-Medium.otf'),
    
  });

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
      <Stack.Screen name="SignInScreen" />
      <Stack.Screen name="SignUpScreen" />
      <Stack.Screen name="ForgotPasswordScreen" />

      <Stack.Screen name="(tabs)" options={{ headerShown: true }} />
    </Stack>
  );
};

export default Layout;
