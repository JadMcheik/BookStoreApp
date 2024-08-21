import {
  Image,
  SafeAreaView,
  StyleSheet,
  View,
  StatusBar,
  FlatList,
  ScrollView,
} from "react-native";

import { Colors } from "../themes/Colors";
import bookingImage from "../assets/images/bookingImage.png";
import { Link, Stack } from "expo-router";
import CustomButton from "../components/Button";
import BookCard from "../components/BookCard";
import Card from "../components/Card";
import ProfileScreen from "./(tabs)/profile";

const Splash = () => {
  return (
    <View style={styles.splashScreen}>
      <View style={styles.bookingImageView}>
        <Image source={bookingImage} style={styles.bookingImage} />
      </View>

      <CustomButton
        backgroundColor={Colors.CustomWhite}
        textColor={Colors.mainBlue}
        content="Sign In"
        href="/sign-in"
      />
      <CustomButton
        backgroundColor={Colors.CustomYellow}
        textColor={Colors.mainBlue}
        content="Sign Up"
        href="/sign-up"
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

    rowGap: 20,
  },

  bookingImageView: {
    flex: 1,
  },
});
