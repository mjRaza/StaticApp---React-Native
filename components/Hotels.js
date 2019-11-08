import React, { Component } from "react";
import {
  Container,
  Header,
  Left,
  Tab,
  Tabs,
  Body,
  Right,
  Title
} from "native-base";
import Tab1 from "./HotelTabs/hotelOne";
import Tab2 from "./HotelTabs/hotelTwo";

class Hotels extends Component {
  static navigationOptions = {
    title: "Hotels",
    header: null
  };

  render() {
    return (
      <Container>
        <Header hasTabs>
          <Left />
          <Body>
            <Title>Hotels</Title>
          </Body>
          <Right />
        </Header>

        <Tabs>
          <Tab
            heading="Tab1"
            tabStyle={{ backgroundColor: "#5078F2" }}
            activeTabStyle={{ backgroundColor: "#5078F2" }}
          >
            <Tab1 />
          </Tab>
          <Tab heading="Tab2">
            <Tab2 />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

export default Hotels;
