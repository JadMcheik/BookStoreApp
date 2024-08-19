import { View, Text, StyleSheet, TextInput, StatusBar } from "react-native";
import PageForm from "../Components/Shared/PageForm";
import { Colors } from "../themes/Colors";
import { useEffect, useState } from "react";

import CustomRadioWithText from "../Components/Shared/CustomRadioWithText";
import CustomFooter from "../Components/Shared/CustomFooter";
import CustomTextInput from "../Components/Shared/CustomTextInput";

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
    <View style={styles.signUpScreen}>
      <StatusBar barStyle="dark-content" />
      <View>
        <PageForm
          title="Sign Up"
          ButtonContent="Create Account"
          buttonBackgroundColor={
            correctSingUp ? Colors.mainBlue : Colors.lightBlue
          }
          buttonTextColor={correctSingUp ? Colors.CustomWhite : Colors.mainBlue}

          href={correctSingUp ? "(tabs)" : "/SignUpScreen"}
        >
          <View style={styles.inputsView}>
            <CustomTextInput
              placeholder="Name"
              value={nameInputValue}
              function={setNameInputValue}
            />

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

          <CustomRadioWithText text="Please sign me up to the latest book news and exclusive offers" />
        </PageForm>
      </View>
      <CustomFooter />
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  signUpScreen: {
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
});
