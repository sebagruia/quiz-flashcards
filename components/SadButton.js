import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { Fontisto } from "@expo/vector-icons";

const SadButton = ({ choosingWrongAnswer }) => {
  return (
    <TouchableOpacity
      style={styles.smileButtonContainer}
      onPress={choosingWrongAnswer}
      role="button"
    >
      <Text style={styles.SmileButtonText}>Incorrect</Text>
      <Fontisto name="confused" color="#D7457B" size={30} />
    </TouchableOpacity>
  );
};

// Styles
const styles = StyleSheet.create({
  smileButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#D7457B",
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 20,
  },
  SmileButtonText: {
    fontSize: 20,
    paddingRight: 10,
    color: "#D7457B",
  },
});
export default SadButton;
