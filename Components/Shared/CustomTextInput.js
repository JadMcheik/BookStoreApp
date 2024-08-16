import { TextInput, StyleSheet } from "react-native";
import { Colors } from "../../themes/Colors";

const CustomTextInput = (props) => {
  return (
    <TextInput
      inputMode={props.inputMode}
      placeholder={props.placeholder}
      style={styles.inputField}
      value={props.value}
      onChangeText={props.function}
      secureTextEntry={props.secureTextEntry}
    />
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  inputField: {
    width: 335,
    height: 56,
    fontSize: 17,
    fontFamily: "circular",
    paddingLeft: 20,
    backgroundColor: Colors.inputBgColor,
    borderRadius: 218,
  },
});
