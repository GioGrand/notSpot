import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";
//////////////////////////////// Components
import RoomDashboard from "./layout/FrontRoom/RoomDashboard";
import ChatDashboard from "./layout/Chat/ChatDashboard";


class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <main className="list">
          <header className="header">
            <h1 className="header-title">
            <Link to={"/"} className="product-link">
              notSpot
              </Link>
            </h1>
            <h2 className="header-subtitle">doesn't exist</h2>
          </header>
          <Switch>
              <Route exact path='/' component={RoomDashboard} />
              <Route path='/:id' component={ChatDashboard} />
            </Switch>
        </main>
      </div>
      </BrowserRouter>

    );
  }
}

export default App;
