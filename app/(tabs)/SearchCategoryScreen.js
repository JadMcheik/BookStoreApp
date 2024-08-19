import { FlatList, Image, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { SearchBar } from "react-native-elements";
import { useState } from "react";
import { Colors } from "../../themes/Colors";
const SearchCategoryScreen = () => {
  const [search, setSearch] = useState("");

  const updateSearch = (search) => {
    setSearch(search);
  };
  const books = [
    {
      bookId: 1,
      bookImage: require("../../Images/TheCaseForTrump.png"),
    },
    {
      bookId: 2,
      bookImage: require("../../Images/TheLastRomantics.png"),
    },
    {
      bookId: 3,
      bookImage: require("../../Images/AnAnonymousGirl.png"),
    },

    {
      bookId: 4,
      bookImage: require("../../Images/TheCaseForTrump.png"),
    },
    { bookId: 5, bookImage: require("../../Images/TheLastRomantics.png") },
    { bookId: 6, bookImage: require("../../Images/AnAnonymousGirl.png") },

    {
      bookId: 7,
      bookImage: require("../../Images/TheCaseForTrump.png"),
    },
    { bookId: 8, bookImage: require("../../Images/TheLastRomantics.png") },
    { bookId: 9, bookImage: require("../../Images/AnAnonymousGirl.png") },
    { bookId: 10, bookImage: require("../../Images/AnAnonymousGirl.png") },
  ];
  const gap = 40;

  return (
    <View style={styles.SearchCategoryScreen}>
      <View style={styles.SearchBarView}>
        <SearchBar
          platform="default"
          round={true}
          lightTheme={true}
          placeholder="Search Books"
          onChangeText={updateSearch}
          value={search}
          inputContainerStyle={styles.SearchBar}
          containerStyle={styles.searchContainer}
        />
      </View>
      <FlatList
        columnWrapperStyle={{ gap }}
   
        contentInset={{ bottom: 50 }}
        numColumns="2"
        data={books}
        renderItem={({ item }) => (
          <Image source={item.bookImage} style={{ width: 133, height: 200 }} />
        )}
        keyExtractor={(item) => item.bookId}
        ItemSeparatorComponent={() => <View style={{ width: 50 }} />}
      />
    </View>
  );
};

export default SearchCategoryScreen;

const styles = StyleSheet.create({
  SearchCategoryScreen: {
    alignItems: "center",

    backgroundColor: "#FFFFFF",
 rowGap:20,
  },

  SearchBarView: {
    width: 335,
    height:56,
  },
  searchContainer: {
    backgroundColor: "#FFFFFF",
    borderBottomColor: "transparent", 
    borderTopColor: "transparent",
  },
  SearchBar: {
    width: "100%",
    backgroundColor: Colors.inputBgColor,
  },

});
