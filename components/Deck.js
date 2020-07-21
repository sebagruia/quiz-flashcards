import React from "react";
import { connect } from "react-redux";
import AddCardButton from "./AddCardButton";
import StartQuizButton from "./StartQuizButton";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { EvilIcons } from "@expo/vector-icons";

const Deck = ({ title, date, handleRemoveIcon, items }) => {
  const questions = !items[title] ? [] : items[title].questions;
  const number = questions.length;
  return (
    <View style={{ flex: 1 }}>
      <View style={[styles.deck, { marginTop: 50 }]}>
        <View style={{flex:1}}>
          <Text style={styles.textDeckTitle}>{title}</Text>
          <Text style={styles.textDeckCreated}>
            Created: {date}
          </Text>
          <Text style={styles.textDeckNumber}>{`${number} ${
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

const mapStateToProps = (state) => {
  return {
    items: state.itemsReducer.asyncStorageContent,
  };
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
  textDeckTitle: {
    color: "#576759",
    fontSize: 40 
  },
  textDeckCreated: {
    color: "#576759",
    fontSize: 15, 
    marginBottom: 50
  },
  textDeckNumber: {
    color: "#576759",
    fontSize: 25
  },
  buttonsContainer: {
    flex: 0.5,
    marginTop: 200,
  },
});

export default connect(mapStateToProps)(Deck);
