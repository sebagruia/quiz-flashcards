import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { addDeckAction,receiveItemsAction } from "../redux/actions";
import CreateCardAndDeckButton from "../components/CreateCardAndDeckButton";

const NewDeckPage = ({dispatch, navigation}) => {

  const [value, setValue] = useState("");

  const handleOnChange = (text) => {
    setValue(text);
  };
  const addNewDeck = () => {
    if (value) {
      dispatch(addDeckAction(value));
      dispatch(receiveItemsAction());
      navigation.navigate('DeckPage', {title:value});
    } else {
      alert("Please fill all fields");
    }
  };

  return (
    <View style={styles.newDeckPageContainer}>
      <View style={styles.newDeckPageText}>
        <Text style={styles.textStyle}>Add Deck</Text>
        <Text style={{ color: "#576759" }}>
          create a new deck of flashcards
        </Text>
      </View>
      <View style={styles.newDeckPageInput}>
        <Text style={{ marginBottom: 5 }}>Title</Text>
        <TextInput
          style={styles.newDeckPageTextInput}
          onChangeText={handleOnChange}
          value={value}
        />
      </View>
      <View style={styles.newDeckPageButton}>
        <CreateCardAndDeckButton addNewDeck={addNewDeck} />
      </View>
    </View>
  );
};


// Styles
const styles = StyleSheet.create({
  newDeckPageContainer: {
    flex: 1,
    alignItems: "center",
    paddingTop: 40,
    paddingLeft: 5,
    paddingRight: 5,
  },
  newDeckPageText: {
    width: 320,
    fontSize: 30,
    marginBottom: 30,
  },
  newDeckPageInput: {
    width: 320,
    marginBottom: 30,
  },
  newDeckPageButton: {
    width: 320,
  },
  newDeckPageTextInput: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
  },
  textStyle: {
    fontSize: 30,
    color: "#576759",
  },
});

export default connect()(NewDeckPage);
