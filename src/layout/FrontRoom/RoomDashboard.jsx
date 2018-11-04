import React, { Component } from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { BarLoader } from "react-spinners";

//////////////////////////////// Components

import RoomList from "./RoomList";
import RoomCreateForm from "./RoomCreateForm";

class RoomDashboard extends Component {
  render() {
    const { rooms } = this.props;
    return (
      <React.Fragment>
        {rooms ? (
          <article className="list-container" id="books-interior-design">
            <div className="list">
              <h2 className="list-title">
                Room
                <span className="list-spacer"> / </span>{" "}
                <span className="list-subcategory">Gatto</span>
              </h2>
              <RoomList rooms={rooms} />
            </div>
            <RoomCreateForm />
            <a className="back" href="../">
              ← Back to the full list
            </a>
          </article>
        ) : (
          <article className="list-container">
            <div className="sweetloading">
              <BarLoader
                sizeUnit={"px"}
                width={400}
                height={2}
                color={"#000000"}
              />
            </div>
          </article>
        )}
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => {
  return {
    rooms: state.firestore.ordered.rooms,
    auth: state.firebase.auth
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "rooms" }])
)(RoomDashboard);
