import React from "react";
import { View, StyleSheet } from "react-native";
import Deck from "../components/Deck";
import { useSelector, useDispatch } from "react-redux";
import { removeItemAction, receiveItemsAction } from "../redux/actions";
import AsyncStorage from "@react-native-community/async-storage";

const DeckPage = ({ route, navigation }) => {
  
  const { title, date } = route.params;
  const questions = useSelector((state) => state.items[title].questions);

  const dispatch = useDispatch();

  const handleRemoveIcon = async () => {
    await AsyncStorage.removeItem(title, () => {
      dispatch(receiveItemsAction());
      navigation.goBack();
    });
  };

  return (
    <View style={styles.deckPageContainer}>
      <Deck
        handleRemoveIcon={handleRemoveIcon}
        title={title}
        questions={questions}
        date={date}
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
