import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import { Colors } from "../../themes/Colors";

const CustomProfileSetionContent = (props) => {
  return (
    <Link href={props.href ? String(props.href) : "/"}>
      <View style={styles.sectionView}>
        <Text style={styles.sectionText}>{props.sectionText}</Text>

        <View style={styles.sectionRightView}>
          <Text style={styles.numberOfElements}>{props.numberOfElements}</Text>
          <Icon name="right" color="#D1DDDF" />
        </View>
      </View>
    </Link>
  );
};

export default CustomProfileSetionContent;

const styles = StyleSheet.create({
  sectionView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    height: 44,
  },

  sectionText: {
    fontFamily: "circular",
    fontSize: 17,
    fontWeight: "bold",
  },
  sectionRightView: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 10,
  },
  numberOfElements: {
    fontFamily: "circular",
    fontSize: 17,
    fontWeight: "bold",
    color: Colors.mainBlue,
  },
});
