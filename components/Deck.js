import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const Deck = ({title, questions, date}) => {
  const number = questions.length;
  return (
    <TouchableOpacity style={styles.deck}>
      <View style={{ flex:2, alignItems: "flex-start" }}>
        <Text style={[styles.textDeck, { fontSize: 20,  }]}>{title}</Text>
        <Text style={[styles.textDeck, { fontSize: 10, marginBottom:20 }]}>
          Created: {date}
        </Text>
        <Text style={[styles.textDeck, { fontSize: 15 }]}>{`${number} ${number === 1 ? "flashcard" : "flashcards"}`}</Text>
      </View>
      <View style={{ flex:1, alignItems: "flex-end", justifyContent:"center" }}>
        <MaterialIcons name="play-arrow" size={20} color="#fff" />
      </View>
    </TouchableOpacity>
  );
};

// Styles
const styles = StyleSheet.create({
  deck: {
    width: 320,
    flexDirection: "row",
    paddingTop:15,
    paddingBottom:15,
    paddingLeft:25,
    paddingRight:25,
    marginTop:20,
    backgroundColor: "#7C926F",
    borderWidth: 0.8,
    borderColor:"#576759",
    borderRadius: 10,
    elevation: 5,
  },
  textDeck: {
    color: "#fff",
  },
});
export default Deck;
