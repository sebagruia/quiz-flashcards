import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";


const Header = () => {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.homeText}>Quiz Flashcards</Text>
      <Text style={styles.homeSubText}>the way to test your knowledge</Text>
      <View style={styles.logo}>
        <Feather name="layers" size={50} color="#576759" />
      </View>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
    titleContainer: {
      flex: 1.5,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#576759",
    },
    logo: {
      position: "absolute",
      top: 200,
      width: 150,
      height: 100,
      justifyContent: "center",
      alignItems: "center",
      borderWidth: 5,
      borderColor: "#DDDDDD",
      borderRadius: 100,
      backgroundColor: "#D7457B",
    },
    homeText: {
      color: "#d9d9d9",
      fontSize: 40,
    },
    homeSubText: {
      color: "#d9d9d9",
      fontSize: 14,
      fontWeight: "normal",
    },
  });

export default Header;