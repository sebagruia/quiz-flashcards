import { RECEIVE_ITEMS, REMOVE_ITEM } from "./actions";

const initialState = {
};

const items = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_ITEMS:
      return {
        ...state,
        ...action.payload,
      };
    // case REMOVE_ITEM:
    //   return {
    //     ...state,
    //     ...action.payload,
    //   };

    default:
      return state;
  }
}

export default items;
