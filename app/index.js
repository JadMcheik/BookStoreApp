import { Image, SafeAreaView, StyleSheet, View, StatusBar } from "react-native";

import { Colors } from "../themes/Colors";
import bookingImage from "../Images/bookingImage.png";
import { Link, Stack } from "expo-router";
import CustomButton from "../Components/Shared/CustomButton";
const Splash = () => {
  <Stack.Screen
  options={{
    title: 'My home',
   
  }}
/>

  return (
    <View style={styles.splashScreen}>
      <View style={styles.bookingImageView}>
        <Image source={bookingImage} style={styles.bookingImage} />
      </View>

      <CustomButton
        backgroundColor={Colors.CustomWhite}
        textColor={Colors.mainBlue}
        content="Sign In"
        href="/SignInScreen"
      />
      <CustomButton
        backgroundColor={Colors.CustomYellow}
        textColor={Colors.mainBlue}
        content="Sign Up"
         href="/SignUpScreen"
      />

      <StatusBar style="light" />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  splashScreen: {
    backgroundColor: Colors.mainBlue,
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom: 77,
    paddingTop: 77,
    rowGap: 20,
  },

  bookingImageView: {
    flex: 1,
  },
});
