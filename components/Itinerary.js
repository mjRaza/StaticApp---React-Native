import React, { Component } from "react";
import {
  Container,
  Header,
  Left,
  Tab,
  Tabs,
  Body,
  Title,
  Right
} from "native-base";
import Tab1 from "./ItineraryTabs/tabOne";
import Tab2 from "./ItineraryTabs/tabTwo";
import Tab3 from "./ItineraryTabs/tabThree";
import Tab4 from "./ItineraryTabs/tabFour";

export default class Itinerary extends Component {
  static navigationOptions = {
    title: "Itinerary"
  };

  render() {
    return (
      <Container>
        {/* <Header hasTabs>
          <Left />
          <Body>
            <Title>Title</Title>
          </Body>
          <Right />
        </Header> */}

        <Tabs>
          <Tab heading="Tab1">
            <Tab1 />
          </Tab>
          <Tab heading="Tab2">
            <Tab2 />
          </Tab>
          <Tab heading="Tab3">
            <Tab3 />
          </Tab>
          <Tab heading="Tab4">
            <Tab4 />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
