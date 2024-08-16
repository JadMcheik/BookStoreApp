import { View, Text, StyleSheet, TextInput, StatusBar } from "react-native";
import PageForm from "../Shared/PageForm";
import { Colors } from "../../themes/Colors";
import { useEffect, useState } from "react";

import CustomRadioWithText from "../Shared/CustomRadioWithText";
import CustomFooter from "../Shared/CustomFooter";

const SignUpScreen = () => {
  const [correctSingUp, setCorrectSingUp] = useState(false);
  const [passwordInputValue, setPasswordInputValue] = useState("");
  const [emailInputValue, setEmailInputValue] = useState("");
  const [nameInputValue, setNameInputValue] = useState("");

  useEffect(() => {
    if (
      nameInputValue.trim() &&
      emailInputValue.trim() &&
      passwordInputValue.trim()
    ) {
      setCorrectSingUp(true);
    } else {
      setCorrectSingUp(false);
    }
  }, [passwordInputValue, emailInputValue, nameInputValue]);

  return (
    <View style={styles.signInScreen}>
      <StatusBar barStyle="dark-content" />
      <View>
        <PageForm
          title="Sign Up"
          ButtonContent="Create Account"
          buttonBackgroundColor={
            correctSingUp ? Colors.mainBlue : Colors.lightBlue
          }
          buttonTextColor={correctSingUp ? Colors.CustomWhite : Colors.mainBlue}
        >
          <View style={styles.inputsView}>
            <TextInput
              placeholder="Name"
              style={styles.inputField}
              value={nameInputValue}
              onChangeText={setNameInputValue}
            />

            <TextInput
              inputMode="email"
              placeholder="Email"
              style={styles.inputField}
              value={emailInputValue}
              onChangeText={setEmailInputValue}
            />
            <TextInput
              inputMode="password"
              secureTextEntry={true}
              placeholder="Password"
              style={styles.inputField}
              onChangeText={setPasswordInputValue}
              value={passwordInputValue}
            />
          </View>

          <CustomRadioWithText text="Please sign me up to the latest book news and exclusive offers" />
        </PageForm>
      </View>
      <CustomFooter />
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  signInScreen: {
    flex: 1,
    paddingTop: 108,
    paddingBottom: 54,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "space-between",
    rowGap: 20,
  },

  inputsView: {
    rowGap: 10,
  },
  inputField: {
    width: 335,
    height: 56,
    fontSize: 17,
    fontFamily: "circular",
    paddingLeft: 20,
    backgroundColor: Colors.inputBgColor,
    borderRadius: 218,
  },
  radioAndForgotPassView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
