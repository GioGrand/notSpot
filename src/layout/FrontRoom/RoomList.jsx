import React, { Component } from "react";
import RoomListDetail from "./RoomListDetail";
import FlipMove from "react-flip-move";

class RoomList extends Component {
  render() {
    const { rooms } = this.props;
    return (
      <ol className="list-content">
      {/*   <FlipMove
          staggerDelayBy={300}
          appearAnimation="fade"
          enterAnimation="accordionVertical"
          leaveAnimation="none"
          maintainContainerHeight= 'true'
        > */}
          {rooms &&
            rooms.map(room => {
              return <RoomListDetail room={room} key={room.id} />;
            })}
      {/* </FlipMove> */}
      </ol>
    );
  }
}
export default RoomList;
