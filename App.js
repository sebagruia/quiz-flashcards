import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import Home from "./pages/Home";
import DeckPage from "./pages/DeckPage";
import QuestionPage from "./pages/QuestionPage";
import NewCardPage from "./pages/NewCardPage";
import NewDeckPage from "./pages/NewDeckPage";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { HeaderBackButton } from '@react-navigation/stack';
import {setLocalNotification} from "./utils/utils_index";

const Stack = createStackNavigator();

const RootNavigator = ()=>{
return(
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
              options={({navigation})=>{
                return{
                  title: "Back",
                  headerLeft: (props) => (
                    <HeaderBackButton
                      {...props}
                      onPress={() => {
                        navigation.navigate('Home');
                      }}
                    />
                  ),
                  headerStyle: { backgroundColor: "#576759" },
                  headerTitleStyle: { color: "#DDDDDD" },
                  headerBackTitleStyle: { color: "#DDDDDD" },
                  headerTintColor: "#DDDDDD",
                }
              
              }}
            />
            <Stack.Screen
              name="QuestionPage"
              component={QuestionPage}
              options={{
                title: "Back",
                headerStyle: { backgroundColor: "#576759" },
                headerTitleStyle: { color: "#DDDDDD" },
                headerBackTitleStyle: { color: "#DDDDDD" },
                headerTintColor: "#DDDDDD",
              }}
            />
            <Stack.Screen
              name="NewCardPage"
              component={NewCardPage}
              options={{
                title: "Back",
                headerStyle: { backgroundColor: "#576759" },
                headerTitleStyle: { color: "#DDDDDD" },
                headerBackTitleStyle: { color: "#DDDDDD" },
                headerTintColor: "#DDDDDD",
              }}
            />

            <Stack.Screen
              name="NewDeckPage"
              component={NewDeckPage}
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
);
}

class App extends Component {
  
  componentDidMount(){
    setLocalNotification();
  }

  render() {
    return (
      <Provider store={store}>
        <RootNavigator />
      </Provider>
    );
  }
}

export default App;
