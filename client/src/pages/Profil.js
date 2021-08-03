import React, { Component } from "react";
import Navigation from "../components/Navigation";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";

export default class Profil extends Component {
  render() {
    return (
      <div>
        <Navigation />

        <SignUp />

        <SignIn />
      </div>
    );
  }
}
