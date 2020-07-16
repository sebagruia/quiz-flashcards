import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { EvilIcons } from "@expo/vector-icons";
import { receiveItemsAction } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";

const StartQuizButton = () => {
  const navigation = useNavigation();

  const route = useRoute();

  const { title, date } = route.params;

  const dispatch = useDispatch();

  const questions = useSelector((state) => state.items[title].questions);

  const questionsArrayLength = questions.length;

  const toQuestionPage = () => {
    if (questionsArrayLength !== 0) {
      dispatch(receiveItemsAction());
      navigation.navigate("QuestionPage", { title, date });
    }
  };

  return (
    <TouchableOpacity
      style={styles.startQuiz}
      onPress={toQuestionPage}
      role="button"
    >
      <View style={styles.buttonContainer}>
        <EvilIcons name="play" size={60} color="#D7457B" />
        <Text style={styles.buttonText}>Start Quiz</Text>
      </View>

      {questionsArrayLength === 0 ? (
        <View>
          <Text style={styles.noFlashCards}>no flashcards in deck</Text>
        </View>
      ) : null}
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
    borderColor: "#D7457B",
  },
  buttonText: {
    fontSize: 25,
    color: "#D7457B",
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

export default StartQuizButton;
