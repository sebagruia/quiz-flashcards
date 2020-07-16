import React, {Fragment} from "react";
import {Text, View, StyleSheet} from "react-native";

const FlashCardInfo = ({title, numberOfQuestions,restart, questionNumber}) => {
  return (
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
        <Text style={{ color: "#fff", fontSize: 20 }}>
          {restart ? (
            <Fragment>
              {numberOfQuestions}/{numberOfQuestions}
            </Fragment>
          ) : (
            <Fragment>
              {questionNumber + 1}/{numberOfQuestions}
            </Fragment>
          )}
        </Text>
      </View>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
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
  });

export default FlashCardInfo;
