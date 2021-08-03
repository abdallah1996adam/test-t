import React, { Component } from "react";
import BookingDate from "../components/BookingDate";
import Navigation from "../components/Navigation";

export default class Booking extends Component {
  render() {
    return (
      <div>
        <Navigation />

        <BookingDate />
      </div>
    );
  }
}
