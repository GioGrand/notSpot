import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";
//////////////////////////////// Components
import RoomCreateForm from "./layout/FrontRoom/RoomCreateForm";
import RoomCreatePassword from './layout/FrontRoom/RoomCreatePassword'
import RoomCheckPassword from './layout/FrontRoom/RoomCheckPassword'
import ChatDashboard from "./layout/Chat/ChatDashboard";
import ChatContainer from "./layout/Chat/ChatContainer";

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
              <Route exact path='/' component={RoomCreateForm} />
              {/*  <Route path='/spot/:id' component={ChatDashboard} /> */ }
              <Route exact path='/createpassword/:id' component={RoomCreatePassword} />
              <Route exact path='/checkpassword/:id' component={RoomCheckPassword} />
              <Route exact path='/spot/:id' component={ChatContainer} />

            </Switch>
        </main>
      </div>
      </BrowserRouter>

    );
  }
}

export default App;
