import React, { Component } from "react";
import ChatListDetail from "./ChatListDetail";
import FlipMove from "react-flip-move";

class RoomList extends Component {
  render() {
    const { chats } = this.props;
    return (
      <ol className="list-content">
        <FlipMove
          staggerDelayBy={300}
          appearAnimation="fade"
          enterAnimation="accordionVertical"
          leaveAnimation="accordionVertical"
        >
          {chats &&
            chats.map(chat => {
              return <ChatListDetail chat={chat} key={chat.id} />;
            })}
        </FlipMove>
      </ol>
    );
  }
}
export default RoomList;
