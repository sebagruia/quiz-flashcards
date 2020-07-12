export const RECEIVE_ITEMS = "RECEIVE_ITEMS";
export const GET_ITEMS_FROM_ASYNCSTORAGE = "GET_ITEMS_FROM_ASYNCSTORAGE";
export const ADD_DECK = "ADD_DECK";
export const ADD_CARD = "ADD_CARD";
import AsyncStorage from "@react-native-community/async-storage";

export const receiveItemsAction = () => async (dispatch) => {
  const objectValues = {};
  // await AsyncStorage.clear();
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
    }
    else{
      return null;
    }
  } catch (e) {
    console.log(e);
  }
};
