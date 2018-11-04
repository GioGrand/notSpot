import React, { Component } from "react";
import { Link } from "react-router-dom";
import moment from "moment";

class RoomListDetail extends Component {
  render() {
    const { room } = this.props;
    return (
      <div>
        <li className="product">
          <Link to={"/" + room.id} className="product-link">
            <h3 className="product-name">{room.title}</h3>
            <p className="product-brand">
              {moment(room.createdAt.toDate()).fromNow()}
            </p>
          </Link>
        </li>
      </div>
    );
  }
}
export default RoomListDetail;
