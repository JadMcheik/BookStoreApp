import { SafeAreaView, ScrollView, StyleSheet } from "react-native";
import Card from "../Components/Shared/Card";

const HomeScreen = () => {
  const books = [
    {
      id: 1,
      bookTitle: "The Case for Trump",
      bookAuthor: "by Victor Davis Ha…",
      bookReviews: 6,
      bookImage: require("../Images/TheCaseForTrump.png"),
      bookRating: 3.5,
    },

    {
      id: 2,
      bookTitle: "The Last Romantics",
      bookAuthor: "by Tara Conklin…",
      bookReviews: 7,
      bookImage: require("../Images/TheLastRomantics.png"),
      bookRating: 4,
    },

    {
      id: 3,
      bookTitle: "An Anonymous Girl",
      bookAuthor: "by Greer Hendricks, Sarah…",
      bookReviews: 158,
      bookImage: require("../Images/AnAnonymousGirl.png"),
      bookRating: 3.5,
    },

    {
      id: 4,
      bookTitle: "The Case for Trump",
      bookAuthor: "by Victor Davis Ha…",
      bookReviews: 6,
      bookImage: require("../Images/TheCaseForTrump.png"),
      bookRating: 3.5,
    },

    {
      id: 5,
      bookTitle: "The Last Romantics",
      bookAuthor: "by Tara Conklin…",
      bookReviews: 7,
      bookImage: require("../Images/TheLastRomantics.png"),
      bookRating: 4,
    },

    {
      id: 6,
      bookTitle: "An Anonymous Girl",
      bookAuthor: "by Greer Hendricks, Sarah…",
      bookReviews: 158,
      bookImage: require("../Images/AnAnonymousGirl.png"),
      bookRating: 3.5,
    },
  ];

  return (
    <SafeAreaView style={styles.cardSafeAreaView}>
      <ScrollView style={styles.cardsScrollView}>
        <Card data={books} sectionTitle="Bestselling" />
        <Card data={books} sectionTitle="Biography" />
        <Card data={books} sectionTitle="Drama" />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  cardSafeAreaView: {
    backgroundColor: "#FFFFFF",
  },
  cardsScrollView: {
    backgroundColor: "#FFFFFF",
    paddingTop: 38,
    paddingLeft: 10,
  },
});
