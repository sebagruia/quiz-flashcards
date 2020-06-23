import React from "react";
import {Text, TouchableOpacity, StyleSheet} from "react-native";
import { useNavigation, useRoute  } from '@react-navigation/native';
import {EvilIcons} from "@expo/vector-icons";

const StartQuizButton = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const{title, questions, date} = route.params;
    
    const toQuestionPage = () => {
        navigation.navigate("QuestionPage",{title, questions, date});
      };
  return (
    <TouchableOpacity style={styles.addCard} onPress={toQuestionPage}>
    <EvilIcons
      name="play"
      size={70}
      color="#576759"
    />
    <Text style={styles.buttonText}>Start Quiz</Text>
  </TouchableOpacity>
  );
};

// Styles
const styles = StyleSheet.create({
    buttonText:{
      fontSize: 30,
      color:"#576759"
    },
  
    addCard: {
      flex: 1,
      flexDirection: "row",
      alignItems: "center",
    },
  });

export default StartQuizButton;
