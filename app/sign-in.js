import {
  View,
  Text,
  StyleSheet,
  TextInput,
  StatusBar,
  Image,
} from "react-native";
import PageForm from "../components/PageForm";
import { Colors } from "../themes/Colors";
import facebookLogo from "../assets/images/iconmonstr-facebook-1.png";
import twitterLogo from "../assets/images/iconmonstr-twitter-1.png";
import { useEffect, useState } from "react";
import CustomFooter from "../components/CustomFooter";
import CustomRadioWithText from "../components/CustomRadioWithText";
import CustomTextInput from "../components/CustomTextInput";
import { Link } from "expo-router";

const SignInScreen = () => {
  const [selected, setSelected] = useState(false);
  const [correctLoginElements, setCorrectLoginElements] = useState(false);
  const [passwordInputValue, setPasswordInputValue] = useState("");
  const [emailInputValue, setEmailInputValue] = useState("");

  const Accounts = [
    {
      Email: "joseph",
      Password: "helloworld",
    },
    {
      Email: "jad",
      Password: "naruto",
    },
    {
      Email: "marwan",
      Password: "MonkeyDLuffy",
    },
  ];

  useEffect(() => {
    if (
      Accounts.find(
        (person) =>
          person.Email == emailInputValue.trim() &&
          person.Password == passwordInputValue.trim()
      )
      //Remark:this search is case sensitive
    ) {
      setCorrectLoginElements(true);
    } else {
      setCorrectLoginElements(false);
    }
  }, [passwordInputValue, emailInputValue]);

  return (
    <View style={styles.signInScreen}>
      <StatusBar barStyle="dark-content" />
      <View>
        <PageForm
          title="Sign In"
          ButtonContent="Sign In & Continue"
          buttonBackgroundColor={
            correctLoginElements ? Colors.mainBlue : Colors.lightBlue
          }
          buttonTextColor={
            correctLoginElements ? Colors.CustomWhite : Colors.mainBlue
          }
          href={correctLoginElements ? "/(tabs)" : "/sign-in"}
        >
          <View style={styles.inputsView}>
            <CustomTextInput
              inputMode="email"
              placeholder="Email"
              value={emailInputValue}
              function={setEmailInputValue}
            />

            <CustomTextInput
              inputMode="password"
              placeholder="Password"
              value={passwordInputValue}
              function={setPasswordInputValue}
              secureTextEntry={true}
            />
          </View>
          <View style={styles.radioAndForgotPassView}>
            <CustomRadioWithText text="Remember me" />

            <Link href="/forgot-password">
              {" "}
              <Text style={styles.forgotYourPassword}>
                Forgot your Password?
              </Text>
            </Link>
          </View>
        </PageForm>

        <View style={styles.orAndLogosView}>
          <Text style={styles.orText}>OR</Text>
          <View style={styles.logosView}>
            <View
              style={[styles.imageLogoView, { backgroundColor: "#4267B2" }]}
            >
              <Image source={facebookLogo} style={styles.imageLogo} />
            </View>
            <View
              style={[styles.imageLogoView, { backgroundColor: "#1C9DEB" }]}
            >
              <Image source={twitterLogo} style={styles.imageLogo} />
            </View>
          </View>
        </View>
      </View>
      <CustomFooter />
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  signInScreen: {
    backgroundColor: "#FFFFFF",
    flex: 1,
    paddingTop: 38,
    paddingBottom: 54,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "space-between",
    rowGap: 20,
  },

  inputsView: {
    rowGap: 10,
  },
  radioAndForgotPassView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  forgotYourPassword: {
    fontSize: 12,
    fontFamily: "circular",
    fontWeight: "300",
    color: Colors.lightGray,
  },
  orAndLogosView: {
    paddingTop: 20,
  },
  logosView: {
    flexDirection: "row",
    columnGap: 16,
    rowGap: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  orText: {
    textAlign: "center",
    color: Colors.lightGray,
  },
  imageLogoView: {
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: "center",
    justifyContent: "center",
  },
});
