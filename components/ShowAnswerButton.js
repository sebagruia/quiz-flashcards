import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

const ShowAnswerButton = ({handleShowAnswerButton }) => {
  return (
    <TouchableOpacity
      onPress={handleShowAnswerButton}
      style={styles.showAnswerContainer}
      role="button"
    >
      <Text style={{ color: "#576759", fontSize:20 }}>Show Answer</Text>
    </TouchableOpacity>
  );
};

// Styles
const styles = StyleSheet.create({
  showAnswerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    borderWidth: 1.5,
    borderColor: "#576759",
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 10,
  },
});

export default ShowAnswerButton;
