import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import Home from "./pages/Home";
import DeckPage from "./pages/DeckPage";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <NavigationContainer initialRouteName="Home">
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="DeckPage"
              component={DeckPage}
              options={{
                title: "Back",
                headerStyle: { backgroundColor: "#576759" },
                headerTitleStyle: { color: "#DDDDDD" },
                headerBackTitleStyle: { color: "#DDDDDD" },
                headerTintColor: "#DDDDDD",
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
       </Provider>
    );
  }
}

export default App;
