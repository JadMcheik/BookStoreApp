import { StyleSheet, Text, View } from "react-native";
import CustomButton from "./CustomButton";

const PageForm = ({
  title,
  ButtonContent,
  buttonBackgroundColor,
  buttonTextColor,
  children,
}) => {
  return (
    <View style={styles.pageForm}>
      <View style={styles.titleView}>
        <Text style={styles.title}>{title}</Text>
      </View>

      {children}

      <View>
        <CustomButton
          content={ButtonContent}
          backgroundColor={buttonBackgroundColor}
          textColor={buttonTextColor}
        />
      </View>
    </View>
  );
};

export default PageForm;

const styles = StyleSheet.create({
  pageForm: {
    rowGap: 20,
    alignItems: "center",
  },
  titleView: {
    alignItems: "flex-start",
    width: "100%",
  },
  title: {
    fontSize: 24,
    fontFamily: "circular",
    fontWeight: "bold",
    textAlign: "left",
  },
});
