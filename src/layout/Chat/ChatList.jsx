import React, { Component } from "react";
import ChatListDetail from "./ChatListDetail";
import FlipMove from "react-flip-move";

class RoomList extends Component {
  render() {
    const { chats, roomid } = this.props;
    return (
      <ol className="list-content">
      {/* <FlipMove
          staggerDelayBy={300}
          appearAnimation="fade"
          enterAnimation="accordionVertical"
          leaveAnimation="none"
          maintainContainerHeight= 'true'
      > */}
          {chats &&
            chats.map(chat => {
              return (
                <ChatListDetail chat={chat} roomid={roomid} key={chat.id} />
              );
            })}
       {/*  </FlipMove> */}
      </ol>
    );
  }
}
export default RoomList;


