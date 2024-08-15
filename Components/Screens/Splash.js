import { Image, SafeAreaView, StyleSheet, View , StatusBar } from "react-native";
import CustomButton from "../Shared/CustomButton";
import { Colors } from "../../themes/Colors";
import bookingImage from "../../Images/bookingImage.png";
const Splash = () => {
  return (
    <View style={styles.splashScreen}>
      <View style={styles.bookingImageView}>
        <Image source={bookingImage} style={styles.bookingImage} />
      </View>
<View  style={styles.signInButtonView}><CustomButton
        backgroundColor={Colors.CustomWhite}
        textColor={Colors.mainBlue}
        content="Sign In"
       
      /></View>
     <View><CustomButton
        backgroundColor={Colors.CustomYellow}
        textColor={Colors.mainBlue}
        content="Sign Up"
      /></View>
     
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
    paddingBottom: 74,
    paddingTop: 77,


  },

  bookingImageView: {
    flex: 1,
  },
  signInButtonView:{
marginBottom:20,

  },  
});
