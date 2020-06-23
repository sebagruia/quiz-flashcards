import React from "react";
import {Text, TouchableOpacity, StyleSheet} from "react-native";
import {EvilIcons} from "@expo/vector-icons";

const StartQuizButton = () => {
  return (
    <TouchableOpacity style={styles.addCard}>
    <EvilIcons
      name="play"
      size={70}
      color="#576759"
    />
    <Text style={styles.buttonText}>Start Quiz</Text>
  </TouchableOpacity>
  );
};

// Styles
const styles = StyleSheet.create({
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

export default StartQuizButton;
