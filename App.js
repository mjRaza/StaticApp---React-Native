import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./components/HomeScreen";
import About from "./components/About";
import Itinerary from "./components/Itinerary";
import Flights from "./components/Flights";
import Hotel from "./components//Hotels";
import AboutTours from "./components/AboutTours";
import Dos from "./components/Dos";
import Contacts from "./components/Contacts";

export default class App extends React.Component {
  static navigationOptions = {
    title: "Flights"
  };

  render() {
    return <AppContainer />;
  }
}

const AppNavigator = createStackNavigator(
  {
    HomeScreen: {
      screen: HomeScreen
    },
    About: {
      screen: About
    },
    Itinerary: {
      screen: Itinerary
    },
    Flights: {
      screen: Flights
    },
    Hotel: {
      screen: Hotel
    },
    AboutTours: {
      screen: AboutTours
    },
    Dos: {
      screen: Dos
    },
    Contacts: {
      screen: Contacts
    }
  },
  {
    initialRouteName: "HomeScreen",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#0084ff"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold"
      }
    }
  }
);

const AppContainer = createAppContainer(AppNavigator);
