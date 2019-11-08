import React, { Component } from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import About from "./About";
import Itinerary from "./Itinerary";
import Flights from "./Flights";
import Hotel from "./Hotels";
import AboutTours from "./AboutTours";
import Dos from "./Dos";
import Contacts from "./Contacts";

export class HomeScreen extends Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 1, backgroundColor: "blue" }}>
          <Image source={require("../assets/logo.jpg")} />
        </View>

        <View style={{ flex: 3, backgroundColor: "green" }}>
          <View
            style={{ flex: 3, backgroundColor: "green", flexDirection: "row" }}
          >
            <View
              style={{
                flex: 1,
                flexDirection: "column",
                backgroundColor: "red"
              }}
            >
              <Text onPress={() => this.props.navigation.navigate("Itinerary")}>
                1
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: "column",
                backgroundColor: "white"
              }}
            >
              <Text onPress={() => this.props.navigation.navigate("Flights")}>
                2
              </Text>
            </View>
          </View>

          <View
            style={{ flex: 3, backgroundColor: "green", flexDirection: "row" }}
          >
            <View style={{ flex: 1, backgroundColor: "white" }}>
              <Text onPress={() => this.props.navigation.navigate("Hotel")}>
                3
              </Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text onPress={() => this.props.navigation.navigate("Contacts")}>
                4
              </Text>
            </View>
          </View>

          <View
            style={{ flex: 3, backgroundColor: "green", flexDirection: "row" }}
          >
            <View
              style={{
                flex: 1,
                flexDirection: "column",
                backgroundColor: "red"
              }}
            >
              <Text onPress={() => this.props.navigation.navigate("Dos")}>
                5
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: "column",
                backgroundColor: "white"
              }}
            >
              <Text
                onPress={() => this.props.navigation.navigate("AboutTours")}
              >
                6
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default HomeScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red"
    // alignItems: "center",
    // justifyContent: "center"
  }
});
// onPress={() => this.props.navigation.navigate("About")}
