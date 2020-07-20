import React from "react";
import {TouchableOpacity} from "react-native";
import { Fontisto } from "@expo/vector-icons";

const SmileButton = ({choosingCorrectAnswer})=>{
    return(
        <TouchableOpacity onPress={choosingCorrectAnswer} role="button">
        <Fontisto name="smiling" color="#7C926F" size={60} />
      </TouchableOpacity>
    );
}

export default SmileButton;