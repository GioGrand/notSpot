import React, { Component } from "react";
import ChatListDetail from "./ChatListDetail";

class RoomList extends Component {
  render() {
    const { chats, roomid } = this.props;
    return (
      <ol className="list-content">
          {chats &&
            chats.map(chat => {
              return (
                <ChatListDetail chat={chat} roomid={roomid} key={chat.id} />
              );
            })}
      </ol>
    );
  }
}
export default RoomList;


