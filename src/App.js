import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
//////////////////////////////// Components
import RoomCreateForm from "./layout/FrontRoom/RoomCreateForm";
import RoomCreatePassword from "./layout/FrontRoom/RoomCreatePassword";
import RoomCheckPassword from "./layout/FrontRoom/RoomCheckPassword";
import ChatContainer from "./layout/Chat/ChatContainer";
import MainHeader from "./layout/Header/header";

import { connect } from "react-redux";
import { compose } from "redux";

import {anonymousSignIn} from './store/actions/authActions'

class App extends Component {

  componentDidMount() {
 

    this.props.anSignIn();

  }


  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <main className="list">
            <MainHeader />
            <Switch>
              <Route exact path="/" component={RoomCreateForm} />
              {/*  <Route path='/spot/:id' component={ChatDashboard} /> */}
              <Route
                exact
                path="/createpassword/:id"
                component={RoomCreatePassword}
              />
              <Route
                exact
                path="/checkpassword/:id"
                component={RoomCheckPassword}
              />
              <Route exact path="/spot/:id" component={ChatContainer} />
            </Switch>
          </main>
        </div>
      </BrowserRouter>
    );
  }
}


const mapDispatchToProps = dispatch => {
  return {
    anSignIn: () => dispatch(anonymousSignIn())
  };
};

export default compose(
  connect(
    null,
    mapDispatchToProps
  )
  )(App);

