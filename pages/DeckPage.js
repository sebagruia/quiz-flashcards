import React from "react";
import {View, StyleSheet} from "react-native";
import Deck from "../components/Deck";

const DeckPage = ({route})=>{
   const {title, questions, date} = route.params;
    return(
        <View style={styles.deckPageContainer}>
            <Deck title={title} questions={questions} date={date} renderedInDeckPage/>
        </View>
    );
}

// Styles

const styles = StyleSheet.create({
    deckPageContainer:{
        flex:1,
        alignItems:"center"
    }
    
});

export default DeckPage;