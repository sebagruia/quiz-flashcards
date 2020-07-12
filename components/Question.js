import React, { Fragment, useState } from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import { Fontisto } from "@expo/vector-icons";
import { useSelector } from "react-redux";

let questionNumber = 0;
let correctAnswer = 0;

const Question = ({ route, navigation }) => {
  const { title } = route.params;
  const questions = useSelector((state) => state.items[title].questions);

  const [showAnswer, setShowAnswer] = useState(false);
  const [restart, setRestart] = useState(false);

  const numberOfQuestions = questions.length;

  const handleShowAnswerButton = () => {
    setShowAnswer(!showAnswer);
  };

  const choosingCorrectAnswer = () => {
    questionNumber++;
    correctAnswer++;
    handleShowAnswerButton();
    if (questionNumber === numberOfQuestions) {
      setRestart(!restart);
      questionNumber = 0;
    }
  };

  const choosingWrongAnswer = () => {
    questionNumber++;
    handleShowAnswerButton();
    if (questionNumber === numberOfQuestions) {
      setRestart(!restart);
      questionNumber = 0;
    }
  };

  const returnToDeck = () => {
    correctAnswer = 0;
    navigation.navigate("DeckPage");
  };
  const restartQuiz = () => {
    correctAnswer = 0;
    setRestart(!restart);
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.flashCardContainer}>
        <View style={styles.flashCardInfo}>
          <View
            style={[
              styles.flashCardTitle,
              { borderRightWidth: 4, borderColor: "#d9d9d9" },
            ]}
          >
            <Text style={{ color: "#fff", fontSize: 25 }}>{title}</Text>
          </View>
          <View style={styles.flashCardTitle}>
            <Text style={{ color: "#fff", fontSize: 20 }}>Question</Text>
            <Text style={{ color: "#fff", fontSize: 20 }}>
              {restart ? (
                <Fragment>
                  {numberOfQuestions}/{numberOfQuestions}
                </Fragment>
              ) : (
                <Fragment>
                  {questionNumber + 1}/{numberOfQuestions}
                </Fragment>
              )}
            </Text>
          </View>
        </View>
        <View style={[{ flex: 1 }, styles.flashCardQuestion]}>
          <View style={styles.flashCardQuestionText}>
            {restart ? (
              <Fragment>
                <Text>Quiz Completed</Text>
                <Text>
                  You've got {correctAnswer} out of {numberOfQuestions} correct
                  ({Math.round((correctAnswer / numberOfQuestions) * 100)}%)
                </Text>
              </Fragment>
            ) : (
              <Fragment>
                <Text style={{ color: "#fff", fontSize: 20 }}>
                  {questions[questionNumber].question}
                </Text>
              </Fragment>
            )}
          </View>
        </View>
      </View>
      {!showAnswer ? (
        <View style={{ flex: 1, flexDirection: "row", marginTop: 100 }}>
          <View style={{ flex: 1, paddingRight: 20, paddingLeft: 20 }}>
            {restart ? (
              <Fragment>
                <Button
                  onPress={restartQuiz}
                  title="Start Quiz Again"
                  accessibilityLabel="button with label Show Answer"
                  color="#576759"
                />
                <Button
                  onPress={returnToDeck}
                  title="Return To Deck"
                  accessibilityLabel="button with label Show Answer"
                  color="#576759"
                />
              </Fragment>
            ) : (
              <Button
                onPress={handleShowAnswerButton}
                title="Show Answer"
                accessibilityLabel="button with label Show Answer"
                color="#576759"
              />
            )}
          </View>
        </View>
      ) : (
        <View style={{ flex: 1, padding: 30 }}>
          <Text style={{ fontSize: 25, marginBottom: 10 }}>Answer</Text>
          <Text style={{ fontSize: 20 }}>
            {questions[questionNumber].answer}
          </Text>

          <View style={{ flex: 1 }}>
            <Text style={{ paddingTop: 30, fontSize: 20 }}>
              Was your answer:
            </Text>
            <View style={styles.flashCardButtonContainer}>
              <TouchableOpacity onPress={choosingCorrectAnswer}>
                <Fontisto name="smiling" color="#3B3C22" size={60} />
              </TouchableOpacity>

              <Text style={{ fontSize: 20 }}>or</Text>

              <TouchableOpacity onPress={choosingWrongAnswer}>
                <Fontisto name="confused" color="#3B3C22" size={60} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  flashCardContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    padding: 15,
  },
  flashCardInfo: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#7C926F",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomWidth: 4,
    borderColor: "#d9d9d9",
  },
  flashCardTitle: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  flashCardQuestion: {
    flexDirection: "row",
    backgroundColor: "#D7457B",
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
  flashCardQuestionText: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  flashCardButtonContainer: {
    marginTop: 40,
    flex: 0.5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 30,
    paddingRight: 30,
  },
});

export default Question;
