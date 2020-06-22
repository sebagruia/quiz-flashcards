import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import Deck from "./Deck";
import { DATA } from "../utils/DATA";

const Home = () => {

  const renderItem = ({ item }) => {
    return <Deck {...item} />;
  };

  const deckNumber = Object.keys(DATA).length;

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.homeText}>Quiz Flashcards</Text>
        <Text style={styles.homeSubText}>the way to test your knowledge</Text>
      </View>
      <View>
        
      </View>
      <View style={styles.decksInfoContainer}>
        <View style={styles.deckNumber}>
          <Text style={styles.deckNumberText}>{deckNumber} Decks</Text>
        </View>
        <FlatList
          data={Object.values(DATA)}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DDDDDD",
  },
  titleContainer: {
    flex: 1.5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#576759",
  },
  decksInfoContainer: {
    flex: 3,
    alignItems: "center",
    marginTop:40
  },
  deckNumber: {
    width: 320,
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  deckNumberText:{
    fontSize:30, 
    color:"#576759",
    elevation:4
  },
  homeText: {
    color: "#d9d9d9",
    fontSize: 40,
  },
  homeSubText: {
    color: "#d9d9d9",
    fontSize: 14,
    fontWeight: "normal",
  },
});

export default Home;
