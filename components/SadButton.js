import React from "react";
import {TouchableOpacity} from "react-native";
import { Fontisto } from "@expo/vector-icons";

const SadButton = ({choosingWrongAnswer})=>{
    return(
        <TouchableOpacity onPress={choosingWrongAnswer} role="button">
        <Fontisto name="confused" color="#D7457B" size={60} />
      </TouchableOpacity>
    );
}

export default SadButton;