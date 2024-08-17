import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import CustomButton from "./Components/Shared/CustomButton";
import Splash from "./app";
import PageForm from "./Components/Shared/PageForm";
import SignInScreen from "./app/SignInScreen";
import SignUpScreen from "./app/SignUpScreen";
import ForgotPasswordScreen from "./app/ForgotPasswordScreen";


export default function App() {


  return (
    <View style={styles.container}>
<ForgotPasswordScreen/>
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
