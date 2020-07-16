import React, { Fragment } from "react";
import { Text, View, StyleSheet } from "react-native";

const FlashCardQuestion = ({
  correctAnswer,
  showAnswer,
  numberOfQuestions,
  restart,
  questionNumber,
  questions,
}) => {
  return (
    <View style={[{ flex: 1 }, styles.flashCardQuestion]}>
      <View style={styles.flashCardQuestionText}>
        {restart ? (
          <Fragment>
            <Text style={{ color: "#fff", fontSize: 30 }}>Quiz Completed</Text>
            <Text style={{ color: "#fff", fontSize: 20 }}>
              You've got {correctAnswer} out of {numberOfQuestions} correct (
              {Math.round((correctAnswer / numberOfQuestions) * 100)}%)
            </Text>
          </Fragment>
        ) : (
          <Fragment>
            <Text
              style={[styles.question, showAnswer ? { fontSize:30} : null]}
            >
              {showAnswer
                ? questions[questionNumber].answer
                : questions[questionNumber].question}
            </Text>
          </Fragment>
        )}
      </View>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  flashCardQuestion: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#D7457B",
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
  flashCardQuestionText: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  question:{
    color: "#fff",
    fontSize: 20,
    padding: 20,
    textAlign: "center",
  }
});

export default FlashCardQuestion;
