import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Text, StyleSheet, FlatList } from "react-native";
import Header from "../components/Header";
import AddDeckButton from "../components/AddDeckButton";
import DeckInList from "../components/DeckInList";
import { receiveItemsAction } from "../redux/actions";

class Home extends Component {
  componentDidMount() {
    this._unsubscribe = this.props.navigation.addListener("focus", () => {
      this.props.getAsyncStorageContent();
    });
  }

  componentWillUnmount() {
    this._unsubscribe();
  }

  renderItem = ({ item }) => {
    return <DeckInList {...item} />;
  };

  render() {
    const { items } = this.props;
    const deckNumber = Object.keys(items).length;
    return (
      <View style={styles.container}>
        <Header />
        <View style={styles.decksInfoContainer}>
          <View style={styles.deckNumber}>
            <View style={{ marginRight: 50 }}>
              <Text style={styles.deckNumberText}>{deckNumber} Decks</Text>
            </View>
            <AddDeckButton />
          </View>

          <View style={{ flex: 0.9 }}>
            <FlatList
              data={Object.values(items)}
              renderItem={this.renderItem}
              keyExtractor={(item) => item.title}
            />
          </View>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.itemsReducer.asyncStorageContent,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAsyncStorageContent: () => dispatch(receiveItemsAction()),
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
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  deckNumberText: {
    fontSize: 30,
    fontWeight: "100",
    color: "#576759",
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
