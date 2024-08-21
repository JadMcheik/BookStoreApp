import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import Card from "../../components/Card";

const HomeScreen = () => {
  const books = [
    {
      id: 1,
      bookTitle: "The Case for Trump",
      bookAuthor: "by Victor Davis Ha…",
      bookReviews: 6,
      bookImage: require("../../assets/images/TheCaseForTrump.png"),
      bookRating: 3.5,
    },

    {
      id: 2,
      bookTitle: "The Last Romantics",
      bookAuthor: "by Tara Conklin…",
      bookReviews: 7,
      bookImage: require("../../assets/images/TheLastRomantics.png"),
      bookRating: 4,
    },

    {
      id: 3,
      bookTitle: "An Anonymous Girl",
      bookAuthor: "by Greer Hendricks, Sarah…",
      bookReviews: 158,
      bookImage: require("../../assets/images/AnAnonymousGirl.png"),
      bookRating: 3.5,
    },

    {
      id: 4,
      bookTitle: "The Case for Trump",
      bookAuthor: "by Victor Davis Ha…",
      bookReviews: 6,
      bookImage: require("../../assets/images/TheCaseForTrump.png"),
      bookRating: 3.5,
    },

    {
      id: 5,
      bookTitle: "The Last Romantics",
      bookAuthor: "by Tara Conklin…",
      bookReviews: 7,
      bookImage: require("../../assets/images/TheLastRomantics.png"),
      bookRating: 4,
    },

    {
      id: 6,
      bookTitle: "An Anonymous Girl",
      bookAuthor: "by Greer Hendricks, Sarah…",
      bookReviews: 158,
      bookImage: require("../../assets/images/AnAnonymousGirl.png"),
      bookRating: 3.5,
    },
  ];

  const sections = [
    {
      books: books,
      title: "Bestselling",
    },

    {
      books: books,
      title: "Biography",
    },

    {
      books: books,
      title: "Drama",
    },
  ];

  return (
    <SafeAreaView style={styles.cardSafeAreaView}>
      <FlatList
        showsVerticalScrollIndicator={false}
        style={styles.cardsFlatList}
        contentInset={{ bottom: 30 }}
        data={sections}
        renderItem={({ item }) => (
          <Card data={item.books} sectionTitle={item.title} />
        )}
        keyExtractor={(item) => item.title}
        ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  cardSafeAreaView: {
    backgroundColor: "#FFFFFF",
  },
  cardsFlatList: {
    backgroundColor: "#FFFFFF",
    paddingTop: 20,
    paddingLeft: 10,
    paddingBottom: 140,
  },
});
