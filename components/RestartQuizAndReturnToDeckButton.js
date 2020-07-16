import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { EvilIcons } from "@expo/vector-icons";

const RestartQuizAndReturnToDeckButton = ({
  restartQuiz,
  returnToDeck,
  quiz,
}) => {
  return (
    <TouchableOpacity
      style={styles.startQuiz}
      onPress={quiz ? restartQuiz : returnToDeck}
      role="button"
    >
      <View
        style={[
          styles.buttonContainer,
          quiz ? { borderColor: "#D7457B" } : { borderColor: "#7C926F" },
        ]}
      >
        <Text
          style={[
            styles.buttonText,
            quiz ? { color: "#D7457B" } : { color: "#7C926F" },
          ]}
        >
          {quiz ? "Restart Quiz" : " To Deck"}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

// Styles
const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    paddingLeft: 5,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
    borderWidth: 1,
    borderRadius: 30,
    // borderColor: "#D7457B",
  },
  buttonText: {
    fontSize: 20,
  },

  startQuiz: {
    flex: 1,
    flexDirection: "column",
  },
  noFlashCards: {
    fontSize: 14,
    marginLeft: 20,
    color: "#D7457B",
  },
});

export default RestartQuizAndReturnToDeckButton;
