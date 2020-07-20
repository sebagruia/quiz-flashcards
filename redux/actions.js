import AsyncStorage from "@react-native-community/async-storage";
import {
  formatDate,
  addDeckToAsyncStorage,
  addCardToAsyncStorage,
  removeDeckFromAsyncStorage,
} from "../utils/utils_index";
export const RECEIVE_ITEMS = "RECEIVE_ITEMS";
export const ADD_DECK = "ADD_DECK";
export const ADD_CARD = "ADD_CARD";
export const DELETE_DECK = "DELETE_DECK";

export const addDeckAction = (title) => {
  const deck = {
    title: title,
    date: formatDate(),
    questions: [],
  };
  addDeckToAsyncStorage(title, deck);
  return {
    type: ADD_DECK,
    payload: deck,
  };
};

export const addCardAction = (title, questions, questionValue, answerValue) => {
  const question = {
    question: questionValue,
    answer: answerValue,
  };
  const deck = {
    title: title,
    date: formatDate(),
    questions: [...questions, question],
  };

  addCardToAsyncStorage(title, deck);
  return {
    type: ADD_CARD,
    payload: { question, title },
  };
};

export const deleteDeckAction = (title) => {
  removeDeckFromAsyncStorage(title);
  return {
    type: DELETE_DECK,
    payload: title,
  };
};

export const receiveItemsAction = () => async (dispatch) => {
  const objectValues = {};
  try {
    const keys = await AsyncStorage.getAllKeys();
    const jsonValue = await AsyncStorage.multiGet(keys);
    if (jsonValue != null) {
      for (let element of jsonValue) {
        objectValues[element[0]] = JSON.parse(element[1]);
      }
      console.log(objectValues);
      dispatch({
        type: RECEIVE_ITEMS,
        payload: objectValues,
      });
    } else {
      return null;
    }
  } catch (e) {
    console.log(e);
  }
};
