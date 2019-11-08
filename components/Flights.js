import React, { Component } from "react";
import { View, Text } from "react-native";
import { Container, Content, Card, Button } from "native-base";

class Flights extends Component {
  static navigationOptions = {
    title: "Flights"
  };
  render() {
    return (
      <Container>
        <Card>
          <View style={{ backgroundColor: "grey" }}>
            <View
              style={{
                backgroundColor: "red",
                alignItems: "center",
                padding: 5
              }}
            >
              <Text>Danger</Text>
            </View>
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                padding: 3
              }}
            >
              <Text>Text will cime here</Text>
              <Text style={{ paddingTop: 2 }}>Text will cime here</Text>
              <Text style={{ paddingTop: 2 }}>Text will cime here</Text>
            </View>
          </View>
        </Card>
      </Container>
    );
  }
}

export default Flights;
