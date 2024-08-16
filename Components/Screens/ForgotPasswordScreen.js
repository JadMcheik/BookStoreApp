import { StyleSheet, Text, View } from "react-native";
import PageForm from "../Shared/PageForm";
import { Colors } from "../../themes/Colors";
import CustomTextInput from "../Shared/CustomTextInput";
import { useState } from "react";

const ForgotPasswordScreen = () => {
  const [emailInputValue, setEmailInputValue] = useState("");
  return (
    <View style={styles.ForgotPasswordScreen}>
      <PageForm
        title="Forgot Password"
        ButtonContent="SendEmail"
        buttonBackgroundColor={Colors.mainBlue}
        buttonTextColor={Colors.CustomWhite}
      >
        <View style={styles.whiteSpace}></View>
        <CustomTextInput
          inputMode="email"
          placeholder="Email"
          value={emailInputValue}
          function={setEmailInputValue}
          style={styles.Email}
        />
      </PageForm>
    </View>
  );
};

export default ForgotPasswordScreen;
const styles = StyleSheet.create({
  ForgotPasswordScreen: {
    flex: 1,
    alignItems: "center",
    paddingTop: 108,
  },

  whiteSpace: {
    height: 200,
  },
});
