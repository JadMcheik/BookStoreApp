import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import CustomButton from "./Components/Shared/CustomButton";
import Splash from "./Components/Screens/Splash";
import PageForm from "./Components/Shared/PageForm";
import SignInScreen from "./Components/Screens/SignInScreen";


export default function App() {


  return (
    <View style={styles.container}>
<SignInScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
 
  },
});
