import React from "react";
import { View, StyleSheet } from "react-native";
import { removeDeckFromAsyncStorage } from "../utils/utils_index";
import { deleteDeckAction } from "../redux/actions";
import { connect } from "react-redux";
import Deck from "../components/Deck";

const DeckPage = ({ dispatch, route, navigation }) => {
  const { title, date } = route.params;

  const handleRemoveIcon = () => {
    dispatch(deleteDeckAction(title));
    navigation.goBack();
  };

  return (
    <View style={styles.deckPageContainer}>
      <Deck handleRemoveIcon={handleRemoveIcon} title={title} date={date} />
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

export default connect()(DeckPage);
