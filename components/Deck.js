import React, { Fragment } from "react";
import AddCardButton from "./AddCardButton";
import StartQuizButton from "./StartQuizButton";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { MaterialIcons} from "@expo/vector-icons";

const Deck = ({ title, questions, date, navigation, renderedInDeckPage }) => {
  const number = questions.length;
  const toDeckPage = () => {
    navigation.navigate("DeckPage", { title, questions, date });
  };
 
  return (
    <Fragment>
      {renderedInDeckPage ? (
        <View style={{ flex: 1 }}>
          <View style={[styles.deck, { marginTop: 50 }]}>
            <Text style={[styles.textDeck, { fontSize: 40 }]}>{title}</Text>
            <Text style={[styles.textDeck, { fontSize: 15, marginBottom: 50 }]}>
              Created: {date}
            </Text>
            <Text style={[styles.textDeck, { fontSize: 25 }]}>{`${number} ${
              number === 1 ? "flashcard" : "flashcards"
            }`}</Text>
          </View>
          <View style={styles.buttonsContainer}>
            <AddCardButton />
            <StartQuizButton />
          </View>
        </View>
      ) : (
        <TouchableOpacity
          style={[styles.deck, { flexDirection: "row" }]}
          onPress={toDeckPage}
        >
          <View style={{ flex: 2, alignItems: "flex-start" }}>
            <Text style={[styles.textDeck, { fontSize: 20 }]}>{title}</Text>
            <Text style={[styles.textDeck, { fontSize: 10, marginBottom: 20 }]}>
              Created: {date}
            </Text>
            <Text style={[styles.textDeck, { fontSize: 15 }]}>{`${number} ${
              number === 1 ? "flashcard" : "flashcards"
            }`}</Text>
          </View>
          <View
            style={{
              flex: 1,
              alignItems: "flex-end",
              justifyContent: "center",
            }}
          >
              <MaterialIcons name="play-arrow" size={20} color="#fff" />
          </View>
        </TouchableOpacity>
      )}
    </Fragment>
  );
};

// Styles
const styles = StyleSheet.create({
  deck: {
    width: 320,
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 25,
    paddingRight: 25,
    marginTop: 20,
    backgroundColor: "#7C926F",
    borderWidth: 0.8,
    borderColor: "#576759",
    borderRadius: 10,
    elevation: 5,
  },
  textDeck: {
    color: "#fff",
  },
  buttonsContainer:{
    flex:0.5, 
    marginTop:100
  },
  buttonText:{
    fontSize: 30,
    color:"#576759"
  },

  addCard: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
});
export default Deck;
