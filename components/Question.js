import React, { Fragment } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const Question = ({ title, questions, date }) => {
  const number = questions.length;
  return (
    <View style={{flex:1}}>
      <View style={styles.flashCardContainer}>
        <View style={styles.flashCardInfo}>
          <View
            style={[
              styles.flashCardTitle,
              { borderRightWidth: 4, borderColor: "#d9d9d9" },
            ]}
          >
            <Text style={{ color: "#fff", fontSize: 25 }}>{title}</Text>
          </View>
          <View style={styles.flashCardTitle}>
            <Text style={{ color: "#fff", fontSize: 20 }}>Question</Text>
            <Text style={{ color: "#fff", fontSize: 20 }}>1/4</Text>
          </View>
        </View>
        <View style={[{ flex: 1 }, styles.flashCardQuestion]}>
          <View style={styles.flashCardQuestionText}>
            <Text style={{ color: "#fff", fontSize: 20 }}>
              Care este capitala Romaniei?
            </Text>
          </View>
        </View>
        
      </View>

    <View style={{flex:1, flexDirection:"row", marginTop:100}}>
        <View style={{flex:1, paddingRight:20, paddingLeft:20}}>
        <Button
            title="Show Answer"
            accessibilityLabel="button with label Show Answer"
            color="#576759"
          />
        </View>
   
    </View>
    
   
    
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  flashCardContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    padding: 15,
  },
  flashCardInfo: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#7C926F",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomWidth: 4,
    borderColor: "#d9d9d9",
  },
  flashCardTitle: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  flashCardQuestion: {
    flexDirection: "row",
    backgroundColor: "#D7457B",
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
  flashCardQuestionText: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Question;
