import React from "react";
import Question from "../components/Question";

const QuestionPage = ({ navigation, route }) => {
  
  return <Question route={route} navigation={navigation} />;
};

export default QuestionPage;
