import { StyleSheet, Text, View } from "react-native";
import PageForm from "../components/PageForm";
import { Colors } from "../themes/Colors";
import CustomTextInput from "../components/CustomTextInput";
import { useState } from "react";

const ForgotPasswordScreen = () => {
  const [emailInputValue, setEmailInputValue] = useState("");

  return (
    <View style={styles.ForgotPasswordScreen}>
      <PageForm
        title="Forgot Password"
        ButtonContent="Send Email"
        buttonBackgroundColor={Colors.mainBlue}
        buttonTextColor={Colors.CustomWhite}
      >
        <View style={styles.whiteSpace}>
          <CustomTextInput
            inputMode="email"
            placeholder="Email"
            value={emailInputValue}
            function={setEmailInputValue}
          />
        </View>
      </PageForm>
    </View>
  );
};

export default ForgotPasswordScreen;
const styles = StyleSheet.create({
  ForgotPasswordScreen: {
    backgroundColor: "#FFFFFF",
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 38,
  },

  whiteSpace: {
    paddingTop: 200,
    width: "100%",
  },
});
