import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const AddDeckButton = () => {
  const navigation = useNavigation();
  const addNewDeck = () => {
    navigation.navigate("NewDeckPage");
  };

  return (
    <TouchableOpacity style={styles.addCard} onPress={addNewDeck}>
      <EvilIcons name="plus" size={50} color="#576759" />
    </TouchableOpacity>
  );
};

// Styles
const styles = StyleSheet.create({
  addCard: {
    flex: 0.3,
    alignItems: "center",
  },
});

export default AddDeckButton;
