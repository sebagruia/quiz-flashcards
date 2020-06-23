import React, { Component } from "react";
import { connect } from "react-redux";
import { receiveItemsAction } from "../redux/actions";
import { View, Text, StyleSheet, FlatList } from "react-native";
import Deck from "../components/Deck";
import { DATA } from "../utils/DATA";
import { Feather } from "@expo/vector-icons";

class Home extends Component {

  componentDidMount(){
    this.props.retreviveItems();
  }
  renderItem = ({ item }) => {
    return <Deck {...item} navigation={this.props.navigation} />;
  };

  
  render() {
    const {items} = this.props;
    const deckNumber = Object.keys(items).length;
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.homeText}>Quiz Flashcards</Text>
          <Text style={styles.homeSubText}>the way to test your knowledge</Text>
          <View style={styles.logo}>
            <Feather name="layers" size={50} color="#576759" />
          </View>
        </View>

        <View style={styles.decksInfoContainer}>
          <View style={styles.deckNumber}>
            <Text style={styles.deckNumberText}>{deckNumber} Decks</Text>
          </View>
          <FlatList
            data={Object.values(items)}
            renderItem={this.renderItem}
            keyExtractor={(item) => item.id.toString()}
          />
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state)=>{
  return{
    items:state.items
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    retreviveItems: () => dispatch(receiveItemsAction(DATA)),
  };
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DDDDDD",
  },
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
  decksInfoContainer: {
    flex: 3,
    alignItems: "center",
    paddingTop: 80,
  },
  deckNumber: {
    width: 320,
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  deckNumberText: {
    fontSize: 30,
    color: "#576759",
    elevation: 4,
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
