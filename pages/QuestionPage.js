import React from "react";
import Question from "../components/Question"

const QuestionPage = ({ route }) => {

  return (
    <Question {...route.params}/>
  );
};


export default QuestionPage;
