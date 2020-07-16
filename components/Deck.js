import React from "react";
import AddCardButton from "./AddCardButton";
import StartQuizButton from "./StartQuizButton";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { EvilIcons } from "@expo/vector-icons";


const Deck = ({ title, questions, date, handleRemoveIcon }) => {
  const number = questions.length;
  return (
    <View style={{ flex: 1 }}>
      <View style={[styles.deck, { marginTop: 50 }]}>
        <View>
          <Text style={[styles.textDeck, { fontSize: 40 }]}>{title}</Text>
          <Text style={[styles.textDeck, { fontSize: 15, marginBottom: 50 }]}>
            Created: {date}
          </Text>
          <Text style={[styles.textDeck, { fontSize: 25 }]}>{`${number} ${
            number === 1 ? "flashcard" : "flashcards"
          }`}</Text>
        </View>
        <TouchableOpacity style={{ marginTop: 20 }} role="button">
          <EvilIcons
            name="trash"
            size={40}
            color="#576759"
            onPress={handleRemoveIcon}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.buttonsContainer}>
        <AddCardButton title={title} />
        <StartQuizButton questions={questions} />
      </View>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  deck: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 320,
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 25,
    paddingRight: 25,
    marginTop: 20,
    borderWidth: 2,
    borderColor: "#576759",
    borderRadius: 10,
    elevation: 1,
  },
  textDeck: {
    color: "#576759",
  },
  buttonsContainer: {
    flex: 0.8,
    marginTop: 200,
  },
});
export default Deck;
