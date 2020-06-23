export const RECEIVE_ITEMS = "RECEIVE_ITEMS";
export const ADD_ITEM = "RECEIVE_ITEMS";

export const receiveItemsAction = (items) => {
  return {
    type: RECEIVE_ITEMS,
    payload: items,
  };
};

export const addItemAction = (item) => {
  return {
    type: ADD_ITEM,
    payload: item,
  };
};
