import { TouchableOpacity, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Colors } from "../../themes/Colors";
import { useState } from "react";
const CustomRadioWithText = (props) => {
  const [selected, setSelected] = useState(false);

  return (
    <TouchableOpacity
      style={styles.option}
      onPress={() => {
        setSelected(!selected);
      }}
    >
      <Icon
        name={selected ? "check-circle" : "circle-thin"}
        size={24}
        color={selected ? Colors.mainBlue : "#D1DDDF"}
      />
      <Text style={styles.text}>{props.text}</Text>
    </TouchableOpacity>
  );
};

export default CustomRadioWithText;

const styles = StyleSheet.create({
  option: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    fontSize: 12,
    fontWeight: "300",
    fontFamily: "circular",
    color: Colors.lightGray,
    marginLeft: 6,
  },
});
