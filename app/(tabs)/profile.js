import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import CustomProfileSetionContent from "../../components/ProfileSectionContent";
import ProfileSVG from "../../assets/svg/ProfileSVG";
const ProfileScreen = () => {
  return (
    <View style={styles.ProfileScreen}>
      <View style={styles.profileAndNotification}>
        <Text style={styles.profileText}>Profile</Text>
        <Image
          source={require("../../assets/images/ICON-24-Notification.png")}
        />
      </View>

      <View style={styles.profileInformations}>
        <View>
          <ProfileSVG />
        </View>
        <View style={styles.profileTypeAndName}>
          <View style={styles.profileTypeView}>
            <Text style={styles.profileTypeText}>Gold</Text>
          </View>
          <View style={styles.profileNameView}>
            <Text style={styles.profileNameText}>JOHN DOE</Text>
          </View>
        </View>
      </View>

      <View style={styles.myBooksSection}>
        <Text style={styles.sectionTitle}>My Books</Text>
        <CustomProfileSetionContent
          sectionText="Book"
          numberOfElements={3}
          href="/profile"
        />
      </View>

      <View style={styles.myBooksSection}>
        <Text style={styles.sectionTitle}>My Books</Text>
        <CustomProfileSetionContent
          sectionText="Edit Profile"
          href="/profile"
        />
        <CustomProfileSetionContent sectionText="Log out" href="/profile" />
      </View>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  ProfileScreen: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 20,
  },
  profileAndNotification: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  profileText: {
    fontFamily: "circular-bold",
    fontSize: 44,
  
  },
  profileInformations: {
    flexDirection: "row",
    columnGap: 15,
    marginTop: 20,
    marginBottom: 84,
  },
  profileTypeAndName: {
    rowGap: 8,
  },
  profileTypeView: {
    backgroundColor: "rgba(196, 161, 45,0.1)",

    height: 28,
    width: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  profileTypeText: {
    color: "#C4A12D",
    fontFamily: "circular-bold",
    fontSize: 12,
  
    textAlign: "center",
  },

  profileNameText: {
    fontFamily: "circular-bold",
    fontSize: 24,
  
  },
  myBooksSection: {
    rowGap: 10,
    marginBottom: 33,
  },

  sectionTitle: {
    fontFamily: "circular-bold",
    fontSize: 12,
 
    color: "#D1DDDF",
  },
});
