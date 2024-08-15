import { Text, TouchableOpacity, View, StyleSheet } from "react-native";

const CustomButton = (props) => {
  return (
    <TouchableOpacity
      style={[styles.customButton, { backgroundColor: props.backgroundColor }]}
    >
      <Text style={[styles.customButtonText, { color: props.textColor }]}>
        {props.content}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  customButton: {
    width: 335,
    height: 56,
    borderRadius: 118,
    alignItems: "center",
    justifyContent: "center",
  },

  customButtonText: {
    textAlign: "center",
    fontSize: 17,
    fontFamily: "Circular",
  },
});
