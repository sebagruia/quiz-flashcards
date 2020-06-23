import {AsyncStorage} from "react-native";

const QUIZ_FLASHCARDS_DATABASE = "QUIZ_FLASHCARDS_DATABASE";




export const DATA = {
  React: {
    id: 1,
    date:"21.06.2020",
    title: "React",
    questions: [
      {
        question: "What is React?",
        answer: "A library for managing user interfaces",
      },
      {
        question: "Where do you make Ajax requests in React?",
        answer: "The componentDidMount lifecycle event",
      },
    ],
  },
  JavaScript: {
    id: 2,
    date:"20.06.2020",
    title: "JavaScript",
    questions: [
      {
        question: "What is a closure?",
        answer:
          "The combination of a function and the lexical environment within which that function was declared.",
      },
    ],
  },
};
