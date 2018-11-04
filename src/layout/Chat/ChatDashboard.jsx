import React, { Component } from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { BarLoader } from "react-spinners";
import { Link } from "react-router-dom";

//////////////////////////////// Components

import ChatList from "./ChatList";
import ChatCreateForm from "./ChatCreateForm";

class ChatDashboard extends Component {
  render() {
    const { chats } = this.props;
    const tid = this.props.match.params.id;
    console.log(tid);
    return (
      <React.Fragment>
        {chats ? (
          <article className="list-container" id="books-interior-design">
            <div className="list">
              <h2 className="list-title">
                Room
                <span className="list-spacer"> / </span>{" "}
                <span className="list-subcategory">{tid}</span>
              </h2>
              <ChatList chats={chats} />
            </div>
            <ChatCreateForm />

            <Link to={"/"} className="back">
              ← Back to the full list
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
const mapStateToProps = state => {
  return {
    chats: state.firestore.ordered.chats
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect(props => [
    {
      collection: "rooms",
      doc: props.match.params.id,
      subcollections: [{ collection: "chats", orderBy: ["createdAt", "desc"] }],
      storeAs: "chats"
    }
  ])
)(ChatDashboard);
