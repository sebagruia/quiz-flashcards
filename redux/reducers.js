import { RECEIVE_ITEMS, ADD_DECK, ADD_CARD} from "./actions";

const initialState = {
};

// const items = (state = initialState, action) => {
//   switch (action.type) {
//     case RECEIVE_ITEMS:
//       return {
//         ...state,
//         ...action.payload,
//       };
//     case ADD_DECK:
//       return {
//         ...state,
//         [action.payload.title]: { ...action.payload },
//       };
//     case ADD_CARD:
//       const title = action.payload.title;
//       const question = action.payload.question;

//       return {
//         ...state,
//         [title]: {
//           ...state[title],
//           questions: [...state[title].questions, question],
//         },
//       };
//     case GET_ITEMS_FROM_ASYNCSTORAGE:

//       return {
//         ...state,
//         [title]: {
//           ...state[title],
//           questions: [...state[title].questions, question],
//         },
//       };

//     default:
//       return state;
//   }
// }
const items = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_ITEMS:
      return {
        ...state,
        ...action.payload,
      };
    // case ADD_DECK:
    //   return {
    //     ...state,
    //     [action.payload.title]: { ...action.payload },
    //   };
    // case ADD_CARD:
    //   const title = action.payload.title;
    //   const question = action.payload.question;

    //   return {
    //     ...state,
    //     [title]: {
    //       ...state[title],
    //       questions: [...state[title].questions, question],
    //     },
    //   };

    default:
      return state;
  }
}

export default items;
