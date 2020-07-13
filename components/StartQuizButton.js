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
    <TouchableOpacity style={styles.addCard} onPress={toQuestionPage}>
      <View style={styles.buttonContainer}>
        <EvilIcons name="play" size={70} color="#576759" />
        <Text style={styles.buttonText}>Start Quiz</Text>
      </View>

      {questionsArrayLength === 0 ? (
        <View style={{}}>
          <Text style={{ fontSize: 12, marginLeft: 80 }}>
            no flashcards in deck
          </Text>
        </View>
      ) : null}
    </TouchableOpacity>
  );
};

// Styles
const styles = StyleSheet.create({
  buttonContainer:{
    flexDirection: "row", alignItems: "center" 
  },
  buttonText: {
    fontSize: 30,
    color: "#576759",
  },

  addCard: {
    flex: 1,
    flexDirection: "column",
  },
});

export default StartQuizButton;
