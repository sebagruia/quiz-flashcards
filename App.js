import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import Home from "./components/Home";

class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Home />
      </View>
    );
  }
}

export default App;
