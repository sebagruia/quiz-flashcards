export const RECEIVE_ITEMS = "RECEIVE_ITEMS";

export const receiveItemsAction = (items) => {
  return {
    type: RECEIVE_ITEMS,
    payload: items,
  };
};
export const addItemAction = (item) => {
  return {
    type: RECEIVE_ITEMS,
    payload: item,
  };
};
