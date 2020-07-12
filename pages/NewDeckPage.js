import React, { Component } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { connect } from "react-redux";
// import { addDeckAction } from "../redux/actions";
import { addDeckAction } from "../utils/DATA";

class NewDeckPage extends Component {
  constructor() {
    super();

    this.state = {
      value: "",
    };
  }

  handleOnChange = (text) => {
    this.setState({ value: text });
  };

  addNewDeck = () => {
    // this.props.dispatch(addDeckAction(this.state.value));
    addDeckAction(this.state.value);
    this.props.navigation.goBack(this.props.items);
  };

  render() {
    const { value } = this.state;
    
    return (
      <View style={styles.newDeckPageContainer}>
        <View style={styles.newDeckPageText}>
          <Text style={{ fontSize: 30 }}>Add Deck</Text>
          <Text>create a new deck of flashcards</Text>
        </View>
        <View style={styles.newDeckPageInput}>
          <Text style={{ marginBottom: 5 }}>Title</Text>
          <TextInput
            style={styles.newDeckPageTextInput}
            onChangeText={this.handleOnChange}
            value={value}
          />
        </View>
        <View style={styles.newDeckPageButton}>
          <Button
            onPress={this.addNewDeck}
            title="Create Deck"
            accessibilityLabel="button with label Show Answer"
            color="#576759"
          />
        </View>
      </View>
    );
  }
}

// Styles
const styles = StyleSheet.create({
  newDeckPageContainer: {
    flex: 1,
    alignItems: "center",
    paddingTop: 40,
    paddingLeft: 5,
    paddingRight: 5,
  },
  newDeckPageText: {
    width: 320,
    fontSize: 30,
    marginBottom: 30,
  },
  newDeckPageInput: {
    width: 320,
    marginBottom: 30,
  },
  newDeckPageButton: {
    width: 320,
  },
  newDeckPageTextInput: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
  },
});


export default connect()(NewDeckPage);
