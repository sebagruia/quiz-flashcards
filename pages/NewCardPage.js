import React, {useState} from "react";
import { Text, View, TextInput, Button, StyleSheet } from "react-native";

const NewCardPage = () => {

  const [value, setValue] = useState("");

  const handleOnChange = (text) => {
    setValue(text);
  };

  return (
    <View style={styles.newCardPageContainer}>
      <View style={styles.newCardPageText}>
        <Text style={{ fontSize: 30 }}>Add Card</Text>
        <Text>add a new card to deck</Text>
      </View>
      <View style={styles.newCardPageInput}>
        <Text style={{ marginBottom: 5 }}>Your Question</Text>
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
      <View style={styles.newCardPageInput}>
        <Text style={{ marginBottom: 5 }}>Answer</Text>
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
      <View style={styles.newCardPageButton}>
        <Button
          //   onPress={returnToDeck}
          title="Create Card"
          accessibilityLabel="button with label Show Answer"
          color="#576759"
        />
      </View>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  newCardPageContainer: {
    flex: 1,
    alignItems: "center",
    paddingTop: 40,
    paddingLeft: 5,
    paddingRight: 5,
  },
  newCardPageText: {
    width: 320,
    fontSize: 30,
    marginBottom: 30,
  },
  newCardPageInput: {
    width: 320,
    marginBottom: 30,
  },
  newCardPageButton: {
    width: 320,
  },
});

export default NewCardPage;