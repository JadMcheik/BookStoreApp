import { FlatList, StyleSheet, Text, View } from "react-native";
import BookCard from "./BookCard";

const Card = (props) => {
  return (
    <View style={styles.Card}>
      <Text style={styles.sectionTitle}>{props.sectionTitle}</Text>

      <FlatList
      showsHorizontalScrollIndicator={false}
        data={props.data}
        horizontal={true}
        renderItem={({ item }) => (
          <BookCard
            bookTitle={item.bookTitle}
            bookAuthor={item.bookAuthor}
            bookReviews={item.bookReviews}
            bookImage={item.bookImage}
            rating={item.bookRating}
          />
        )}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <View style={{ width: 20 }} />}
      />
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  Card: {
    rowGap: 15,
  },
  sectionTitle: {
    fontSize: 24,
    fontFamily: "circular-bold",
  
  },
});
