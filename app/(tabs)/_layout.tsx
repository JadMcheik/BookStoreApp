import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
import { Colors } from "../../themes/Colors";
import { Image } from "react-native";
import ProfileSmallPhoto from "../../assets/svg/ProfileSmallPhoto";
import { useFonts } from "expo-font";
export default function TabLayout() {

  
  const [loaded, error] = useFonts({
    'circular-book': require('../../assets/fonts/CircularStd-Book.otf'),
    'circular-bold': require('../../assets/fonts/CircularStd-Bold.otf'),
    "circular-medium": require("../../assets/fonts/CircularStd-Medium.otf"),
  });
  return (
    <Tabs
      screenOptions={{

        tabBarStyle: {
          height: 85,
      
        },

        tabBarActiveTintColor: Colors.mainBlue,
        tabBarInactiveTintColor: "gray",

        headerTitle: "",
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={24} name="home" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="search-category"
        options={{
          title: "Search",
          tabBarIcon: ({ color }) => (
            
            <FontAwesome size={24} name="search" color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => <ProfileSmallPhoto color={color} />,
        }}
      />
    </Tabs>
  );
}
