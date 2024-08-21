import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import CustomProfileSetionContent from "../../components/ProfileSectionContent";

const ProfileScreen = () => {
  return (
    <View style={styles.ProfileScreen}>
      <View style={styles.profileAndNotification}>
        <Text style={styles.profileText}>Profile</Text>
        <Image source={require("../../assets/images/ICON-24-Notification.png")} />
      </View>

      <View style={styles.profileInformations}>
        <View>
          <Image
            style={{ width: 80, height: 80 }}
            source={require("../../assets/images/profilePhoto.png")}
          />
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
<CustomProfileSetionContent sectionText="Book" numberOfElements={3} href="/profile"/>
</View>


<View style={styles.myBooksSection}>
<Text style={styles.sectionTitle}>My Books</Text>
<CustomProfileSetionContent sectionText="Edit Profile" href="/profile" />
<CustomProfileSetionContent sectionText="Log out" href="/profile"/>
</View>

    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  ProfileScreen: {
    flex:1,
    backgroundColor:'#FFFFFF',
    paddingHorizontal: 20,

 
  },
  profileAndNotification: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

  },
  profileText: {
    fontFamily: "circular",
    fontSize: 44,
    fontWeight: "bold",
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
    fontFamily: "circular",
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "center",
  },

  profileNameText: {
    fontFamily: "circular",
    fontSize: 24,
    fontWeight: "bold",
  },
  myBooksSection:{

rowGap:10,
marginBottom:33,

  },

  sectionTitle:{

fontFamily:'circular',
fontSize:12,
fontFamily:'bold',
color:'#D1DDDF',

  },


});
