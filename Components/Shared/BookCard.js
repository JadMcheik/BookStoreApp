import { Image, StyleSheet, Text, View } from "react-native";
import { StarRatingDisplay } from "react-native-star-rating-widget";
const BookCard = (props) => {
  return (
    <View style={styles.BookCard}>
      <Image source={props.bookImage} style={styles.bookImage} />

      <View style={styles.bookTitleView}>
        <Text style={styles.bookTitleText}>{props.bookTitle}</Text>

        <Text style={styles.bookAuthorText} numberOfLines={1}>
          {props.bookAuthor}
        </Text>
      </View>
      <View style={styles.bookReviewsView}>
        <StarRatingDisplay
          rating={props.rating}
          starSize={16}
          style={styles.rating}
        />
      </View>
      <Text style={styles.bookReviewsText}>{props.bookReviews} Reviews</Text>
    </View>
  );
};

export default BookCard;
const styles = StyleSheet.create({
  BookCard: {
    width: 120,
    height: 294,
    flex: 1,
  },

  bookImage: {
    width: 120,
    alignSelf: "center",
  },

  bookTitleView: {
    rowGap: 4,
  },

  bookTitleText: {
    fontSize: 15,
    fontFamily: "circular",
    fontWeight: "bold",
  },

  bookAuthorText: {
    fontSize: 12,
    fontFamily: "circular",
    fontWeight: "bold",
    color: "#D1DDDF",
  },
  bookReviewsView: {
    width: 120,
    alignItems: "center",
  },
  rating: {
    alignItems: "center",
    justifyContent: "center",
  },
  bookReviewsText: {
    fontSize: 12,
    fontFamily: "circular",
    fontWeight: "300",
    color: "#D1DDDF",
  },
});
