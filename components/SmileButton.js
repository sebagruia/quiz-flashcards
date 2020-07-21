import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { Fontisto } from "@expo/vector-icons";

const SmileButton = ({ choosingCorrectAnswer }) => {
  return (
    <TouchableOpacity
      style={styles.smileButtonContainer}
      onPress={choosingCorrectAnswer}
      role="button"
    >
      <Text style={styles.SmileButtonText}>Correct</Text>
      <Fontisto name="smiling" color="#7C926F" size={30} />
    </TouchableOpacity>
  );
};

// Styles

const styles = StyleSheet.create({
  smileButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#7C926F",
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 20,
  },
  SmileButtonText: {
    fontSize: 20,
    paddingRight: 10,
    color: "#7C926F",
  },
});

export default SmileButton;
