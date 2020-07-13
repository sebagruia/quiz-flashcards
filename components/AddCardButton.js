import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const AddCardButton = ({ title }) => {
  const navigation = useNavigation();

  const addNewCard = () => {
    navigation.navigate("NewCardPage", { title: title });
  };
  return (
    <TouchableOpacity style={styles.addCard} onPress={addNewCard}>
      <EvilIcons name="plus" size={70} color="#576759" />
      <Text style={styles.buttonText}>Add Card</Text>
    </TouchableOpacity>
  );
};

// Styles
const styles = StyleSheet.create({
  buttonText: {
    fontSize: 30,
    color: "#576759",
  },

  addCard: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
});

export default AddCardButton;
