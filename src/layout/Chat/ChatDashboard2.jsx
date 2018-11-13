import React, { Component } from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { BarLoader } from "react-spinners";
import { Link } from "react-router-dom";

//////////////////////////////// Components

import ChatList from "./ChatList";
import ChatCreateForm from "./ChatCreateForm";

class ChatDashboard2 extends Component {
  render() {
    const { chats } = this.props;
    const tid = this.props.token.spot;
    console.log(this.props);
    return (
      <React.Fragment>
        {chats ? (
          <article className="list-container" id="books-interior-design">
            <div className="list">
              <h2 className="list-title">
                {tid}
                <span className="list-spacer"> / </span>{" "}
                <span className="list-subcategory">delete</span>
              </h2>
              <ChatList chats={chats} roomid={tid} />
            </div>
            <ChatCreateForm roomid={tid} />

            <Link to={"/"} className="back">
              ← Back to home
            </Link>
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
const mapStateToProps = (state, ownProps) => {
  return {
    chats: state.firestore.ordered[ownProps.token.spot]
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect(props => [
    {
      collection: "rooms",
      doc: props.token.spot,
      subcollections: [{ collection: "chats", orderBy: ["createdAt", "desc"] }],
      storeAs: `${props.token.spot}`
    }
  ])
)(ChatDashboard2);
