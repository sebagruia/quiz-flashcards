import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

const CreateCardAndDeckButton = ({ handleOnSubmit, addNewDeck, card }) => {
  return (
    <TouchableOpacity
      onPress={card ? handleOnSubmit : addNewDeck}
      style={styles.createCardContainer}
      role="button"
    >
      <Text style={{ color: "#D7457B" }}>
        {card ? "Create Card" : "Add Deck"}
      </Text>
    </TouchableOpacity>
  );
};

// Styles
const styles = StyleSheet.create({
  createCardContainer: {
    flexDirection: "row",
    justifyContent: "center",
    borderWidth: 1.5,
    borderColor: "#D7457B",
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 10,
  },
});

export default CreateCardAndDeckButton;
