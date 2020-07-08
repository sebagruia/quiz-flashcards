import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

const NewDeckPage = () => {
  const [value, setValue] = useState("");

  const handleOnChange = (text) => {
    setValue(text);
  };

  return (
    <View style={styles.newDeckPageContainer}>
      <View style={styles.newDeckPageText}>
        <Text style={{ fontSize: 30 }}>Add Deck</Text>
        <Text>create a new deck of flashcards</Text>
      </View>
      <View style={styles.newDeckPageInput}>
        <Text style={{marginBottom:5}}>Title</Text>
        <TextInput
          style={{
            height: 40,
            borderColor: "gray",
            borderWidth: 1,
            borderRadius: 5,
          }}
          onChangeText={handleOnChange}
          value={value}
        />
      </View>
      <View style={styles.newDeckPageButton}>
        <Button
          //   onPress={returnToDeck}
          title="Create Deck"
          accessibilityLabel="button with label Show Answer"
          color="#576759"
        />
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
});

export default NewDeckPage;
