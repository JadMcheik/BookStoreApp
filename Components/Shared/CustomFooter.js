import { View, Text, StyleSheet } from "react-native";
import { Colors } from "../../themes/Colors";

const customFooter = () => {
  return (
    <View>
      <Text style={styles.footerText}>
        By signing in, creating an account, or checking out as a Guest, you are
        agreeing to our <Text style={{ color: "black" }}>Terms of Use</Text> and
        our <Text style={{ color: "black" }}>Privacy Policy</Text>
      </Text>
    </View>
  );
};

export default customFooter;

const styles = StyleSheet.create({
  footerText: {
    color: Colors.lightGray,
    fontFamily: "circular",
    fontSize: 11,
    fontWeight: "300",
    textAlign: "center",
  },
});
