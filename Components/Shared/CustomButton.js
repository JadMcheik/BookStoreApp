import { Link } from "expo-router";
import { Text, TouchableOpacity, View, StyleSheet, Linking } from "react-native";

const CustomButton = (props) => {

  

  return (
    <Link
      href={String(props.href)}
      style={[styles.customButton, { backgroundColor: props.backgroundColor }]}
      asChild
    >
      <TouchableOpacity>
        <Text style={[styles.customButtonText, { color: props.textColor }]}>
          {props.content}
        </Text>
      </TouchableOpacity>
    </Link>
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
