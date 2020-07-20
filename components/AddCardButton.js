import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const AddCardButton = ({ title }) => {
  const navigation = useNavigation();

  const addNewCard = () => {
    navigation.navigate("NewCardPage", { title: title });
  };
  return (
    <TouchableOpacity style={styles.addCard} onPress={addNewCard}>
      <View style={styles.buttonContainer}>
        <EvilIcons name="plus" size={50} color="#7C926F" />
        <Text style={styles.buttonText}>Add Card</Text>
      </View>
    </TouchableOpacity>
  );
};

// Styles
const styles = StyleSheet.create({
  buttonContainer: {
    flex:1,
    width:250,
    flexDirection: "row",
    alignItems: "center",
    justifyContent:"space-around",
    paddingLeft:5,
    paddingRight:10,
    paddingTop:5,
    paddingBottom:5,
    borderWidth:1,
    borderColor:'#7C926F',
    borderRadius:30
  },
  buttonText: {
    fontSize: 25,
    color: "#7C926F",
  },

  addCard: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent:"center"
  },
});

export default AddCardButton;
