import React, { Fragment, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import ShowAnswerButton from "./ShowAnswerButton";
import RestartQuizAndReturnToDeckButton from "./RestartQuizAndReturnToDeckButton";
import SmileButton from "./SmileButton";
import SadButton from "./SadButton";
import FlashCardInfo from "./FlashCardInfo";
import FlashCardQuestion from "./FlashCardQuestion";

let questionNumber = 0;
let correctAnswer = 0;

const Question = ({ route, navigation }) => {
  const { title } = route.params;
  const questions = useSelector((state) => state.itemsReducer.asyncStorageContent[title].questions);

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
        <FlashCardInfo
          title={title}
          numberOfQuestions={numberOfQuestions}
          questionNumber={questionNumber}
          showAnswer={showAnswer}
          restart={restart}
        />
        <FlashCardQuestion
          numberOfQuestions={numberOfQuestions}
          questionNumber={questionNumber}
          numberOfQuestions={numberOfQuestions}
          restart={restart}
          correctAnswer={correctAnswer}
          showAnswer={showAnswer}
          questions={questions}
        />
      </View>
      {!showAnswer ? (
        <View style={{ flex: 1, marginTop: 100 }}>
          <View style={{ flex: 0.4, paddingRight: 20, paddingLeft: 20 }}>
            {restart ? (
              <Fragment>
                <RestartQuizAndReturnToDeckButton
                  restartQuiz={restartQuiz}
                  quiz
                />
                <RestartQuizAndReturnToDeckButton returnToDeck={returnToDeck} />
              </Fragment>
            ) : (
              <ShowAnswerButton
                handleShowAnswerButton={handleShowAnswerButton}
              />
            )}
          </View>
        </View>
      ) : (
        <View
          style={{
            flex: 1.1,
            paddingTop: 20,
            paddingBottom: 50,
            paddingLeft: 30,
            paddingRight: 30,
          }}
        >
          <View style={{ flex: 1 }}>
            <Text style={{ paddingTop: 30, fontSize: 30, color: "#7C926F" }}>
              Was your answer:
            </Text>
            <View style={styles.flashCardButtonContainer}>
              <SmileButton choosingCorrectAnswer={choosingCorrectAnswer} />
              <Text style={{ fontSize: 20, color: "#7C926F" }}>or</Text>
              <SadButton choosingWrongAnswer={choosingWrongAnswer} />
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
