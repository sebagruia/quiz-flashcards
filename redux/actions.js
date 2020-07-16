import AsyncStorage from "@react-native-community/async-storage";
export const RECEIVE_ITEMS = "RECEIVE_ITEMS";
// export const REMOVE_ITEM = "REMOVE_ITEM";

export const receiveItemsAction = () => async (dispatch) => {
  const objectValues = {};
  try {
    const keys = await AsyncStorage.getAllKeys();
    if (keys.length !== 0) {
      const jsonValue = await AsyncStorage.multiGet(keys);
      if (jsonValue != null) {
        for (let element of jsonValue) {
          objectValues[element[0]] = JSON.parse(element[1]);
        }
        dispatch({
          type: RECEIVE_ITEMS,
          payload: objectValues,
        });
      } else {
        return null;
      }
    }
  } catch (e) {
    console.log(e);
  }
};

