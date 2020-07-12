export const RECEIVE_ITEMS = "RECEIVE_ITEMS";
export const GET_ITEMS_FROM_ASYNCSTORAGE = "GET_ITEMS_FROM_ASYNCSTORAGE";
export const ADD_DECK = "ADD_DECK";
export const ADD_CARD = "ADD_CARD";
import AsyncStorage from "@react-native-community/async-storage";
import {
  formatDate,
  storeDeckToAsyncStorage,
  getAsyncStorageData,
} from "../utils/DATA";

let questionArray = [];

// const transformToObject =(object)=>{
//   let tempObj;
//   for(let element in object){
//     tempObj = {...JSON.parse(element[1])}
//   }
//   return tempObj;
// }

// export const receiveItemsAction = (items) => {

//   return {
//     type: RECEIVE_ITEMS,
//     payload: items,
//   };
// };

// export const receiveItemsAction = () => async (dispatch) => {
//   // await AsyncStorage.clear();
//   try {
//     const jsonValue = await AsyncStorage.getItem("React");
//     console.log(JSON.parse(jsonValue));
//     console.log(jsonValue);
//     return jsonValue != null
//       ? dispatch({
//           type: RECEIVE_ITEMS,
//           payload: JSON.parse(jsonValue),
//         })
//       : null;
//   } catch (e) {
//     console.log(e);
//   }
// };
export const receiveItemsAction = () => async (dispatch) => {
  // await AsyncStorage.clear();
  try {
    const jsonValue = await AsyncStorage.multiGet(["React", "Angular"]);
    // console.log(JSON.parse(jsonValue));
  //  const value =  transformToObject(jsonValue);
    // console.log(value);
    return jsonValue != null
      ? dispatch({
          type: RECEIVE_ITEMS,
          payload: jsonValue,
        })
      : null;
  } catch (e) {
    console.log(e);
  }
};
// export const receiveItemsAction = () => async (dispatch) => {
//   try {
//     const items = await getAsyncStorageData();
//     dispatch({
//       type: RECEIVE_ITEMS,
//       payload: items,
//     });
//   } catch (e) {
//     console.log(e);
//   }
// };

export const addDeckAction = (title) => {
  const deck = {
    title: title,
    date: formatDate(),
    questions: [],
  };
  storeDeckToAsyncStorage(title, deck);
  return {
    type: ADD_DECK,
    payload: deck,
  };
};

export const addCardAction = (questionValue, answerValue, title) => {
  const question = {
    question: questionValue,
    answer: answerValue,
  };

  questionArray.push(question);
  const deck = {
    title: title,
    date: formatDate(),
    questions: questionArray,
  };

  storeDeckToAsyncStorage(title, deck);

  return {
    type: ADD_CARD,
    payload: { title, question },
  };
};
