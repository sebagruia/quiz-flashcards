import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";


const DeckInList = ({ title, questions, date }) => {

  const navigation = useNavigation();

  const number = questions.length;

  const toDeckPage = () => {
    navigation.navigate("DeckPage", { title, questions, date });
  };


  return (
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
        <MaterialIcons name="play-arrow" size={20} color="#D7457B" />
      </View>
    </TouchableOpacity>
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
  }
});

export default DeckInList;
