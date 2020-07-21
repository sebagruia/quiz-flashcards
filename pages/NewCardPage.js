import React, { useState } from "react";
import {connect} from "react-redux";
import {
  Text,
  View,
  TextInput,
  StyleSheet,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import { receiveItemsAction,addCardAction } from "../redux/actions";
import CreateCardAndDeckButton from "../components/CreateCardAndDeckButton";

const NewCardPage = ({ dispatch, navigation, items }) => {

  const [questionValue, setQuestionValue] = useState("");
  const [answerValue, setAnswerValue] = useState("");

  const route = useRoute();
  const { title } = route.params;
  const questions = !items[title] ? [] : items[title].questions;

  const handleOnChangeQuestion = (text) => {
    setQuestionValue(text);
  };

  const handleOnChangeAnswer = (text) => {
    setAnswerValue(text);
  };

  const handleOnSubmit = () => {
    if (questionValue && answerValue) {
      dispatch(addCardAction(title, questions, questionValue, answerValue));
      dispatch(receiveItemsAction());
      navigation.goBack();
    } else {
      alert("Please fill all fields");
    }
  };

  return (
    <View style={styles.newCardPageContainer}>
      <View style={styles.newCardPageText}>
        <Text style={styles.textStyle}>Add Card</Text>
        <Text style={{ color: "#576759" }}>add a new card to deck</Text>
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
        <CreateCardAndDeckButton handleOnSubmit={handleOnSubmit} card />
      </View>
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    items: state.itemsReducer.asyncStorageContent,
  };
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
  textStyle: {
    fontSize: 30,
    color: "#576759",
  },
});



export default connect(mapStateToProps)(NewCardPage);
