import { RECEIVE_ITEMS, ADD_DECK, ADD_CARD, DELETE_DECK } from "./actions";

const initialState = {
  items: {},
  asyncStorageContent: {},
};

const itemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_ITEMS:
      return {
        ...state,
        asyncStorageContent: { ...action.payload },
      };

    case ADD_DECK:
      const items = state.items;
      const itemDeck = action.payload;
      const titleForDeck = action.payload.title;
      return {
        ...state,
        items: { ...items, [titleForDeck]: { ...itemDeck } },
      };

    case ADD_CARD:
      const question = action.payload.question;
      const titleForCard = action.payload.title;
      const item = state.asyncStorageContent[titleForCard];
      console.log(item);
      const questions = state.asyncStorageContent[titleForCard].questions;
      questions.push(question);
      return {
        ...state,
        items: {
          ...state.items,
          [titleForCard]: { ...item, questions: [...questions] },
        },
      };
      
    case DELETE_DECK:
      const stateCopy = {...state.items};
      delete stateCopy[action.payload];
      console.log(stateCopy)
      return {
        ...state, items:{...stateCopy}
      };

    default:
      return state;
  }
};

export default itemsReducer;
