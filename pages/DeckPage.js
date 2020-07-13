import React from "react";
import { View, StyleSheet, ImageStore } from "react-native";
import Deck from "../components/Deck";
import { useSelector } from "react-redux";

const DeckPage = ({ route }) => {
  const { title, date } = route.params;
  const questions = useSelector((state) => state.items[title].questions);
  return (
    <View style={styles.deckPageContainer}>
      <Deck
        title={title}
        questions={questions}
        date={date}
        renderedInDeckPage
      />
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  deckPageContainer: {
    flex: 1,
    alignItems: "center",
  },
});

export default DeckPage;
