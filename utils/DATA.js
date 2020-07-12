import AsyncStorage from "@react-native-community/async-storage";

const DATABASE = "DATABASE";



export const getAsyncStorageData = async () => {
  // await AsyncStorage.clear();
  try {
    const jsonValue = await AsyncStorage.getItem("Angular")
    // console.log(JSON.parse(jsonValue));
    return jsonValue != null ? JSON.parse(jsonValue) : null
  } catch(e) {
    console.log(e);

  }

  console.log('Done Getting Data from AsyncStorage')

}

export const storeDeckToAsyncStorage = async (key, value) => {
  // await AsyncStorage.clear();
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (error) {
    console.log(`Error when storing data to AsyncStorage ${error}`);
  }
};


export const formatDate = () => {
  const start = Date.now();
  const jetzt = new Date(start);

  const todayUTC = new Date(
    Date.UTC(jetzt.getFullYear(), jetzt.getMonth(), jetzt.getDate())
  );
  return todayUTC.toISOString().split("T")[0];
};


export const addDeckAction = (title) => {
  const deck = {
    title: title,
    date: formatDate(),
    questions: [],
  };
  storeDeckToAsyncStorage(title, deck);
  // return {
  //   type: ADD_DECK,
  //   payload: deck,
  // };
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

  // return {
  //   type: ADD_CARD,
  //   payload: { title, question },
  // };
};


export const DATA = {
  React: {
    title: "React",
    date: "21.06.2020",
    questions: [
      {
        question: "What is React?",
        answer: "A library for managing user interfaces",
      },
      {
        question: "Where do you make Ajax requests in React?",
        answer: "The componentDidMount lifecycle event",
      },
      {
        question: "What does fetch() return?",
        answer: "A promise",
      },
    ],
  },
  JavaScript: {
    title: "JavaScript",
    date: "20.06.2020",
    questions: [
      {
        question: "What is a closure?",
        answer:
          "The combination of a function and the lexical environment within which that function was declared.",
      },
    ],
  },
};
