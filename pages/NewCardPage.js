import React, { useState } from "react";
import { Text, View, TextInput, Button, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import { useRoute } from "@react-navigation/native";
// import { addCardAction } from "../redux/actions";
import { addCardAction } from "../utils/DATA";

const NewCardPage = ({ navigation }) => {

  const route = useRoute();
  const { title } = route.params;

  const dispatch = useDispatch();

  const [questionValue, setQuestionValue] = useState("");
  const [answerValue, setAnswerValue] = useState("");

  const handleOnChangeQuestion = (text) => {
    setQuestionValue(text);
  };
  const handleOnChangeAnswer = (text) => {
    setAnswerValue(text);
  };

  const handleOnSubmit = () => {
    // const questionFormat = {
    //   question: questionValue,
    //   answer: answerValue,
    // };
    // dispatch(addCardAction(questionValue, answerValue, title));
    addCardAction(questionValue, answerValue, title);
    navigation.goBack();
  };

  return (
    <View style={styles.newCardPageContainer}>
      <View style={styles.newCardPageText}>
        <Text style={{ fontSize: 30 }}>Add Card</Text>
        <Text>add a new card to deck</Text>
      </View>
      <View style={styles.newCardPageInput}>
        <Text style={{ marginBottom: 5 }}>Your Question</Text>
        <TextInput
          style={styles.newCardPageTextInput}
          onChangeText={handleOnChangeQuestion}
          value={questionValue}
        />
      </View>
      <View style={styles.newCardPageInput}>
        <Text style={{ marginBottom: 5 }}>Answer</Text>
        <TextInput
          style={styles.newCardPageTextInput}
          onChangeText={handleOnChangeAnswer}
          value={answerValue}
        />
      </View>
      <View style={styles.newCardPageButton}>
        <Button
          onPress={handleOnSubmit}
          title="Create Card"
          accessibilityLabel="button with label Show Answer"
          color="#576759"
        />
      </View>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  newCardPageContainer: {
    flex: 1,
    alignItems: "center",
    paddingTop: 40,
    paddingLeft: 5,
    paddingRight: 5,
  },
  newCardPageText: {
    width: 320,
    fontSize: 30,
    marginBottom: 30,
  },
  newCardPageInput: {
    width: 320,
    marginBottom: 30,
  },
  newCardPageButton: {
    width: 320,
  },
  newCardPageTextInput: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
  },
});

export default NewCardPage;
