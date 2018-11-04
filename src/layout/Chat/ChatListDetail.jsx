import React, { Component } from "react";
import { Link } from "react-router-dom";
import moment from "moment";

class ChatListDetail extends Component {
  render() {
    const { chat } = this.props;
    console.log(chat)
    return (
      <div>
        <li className="product">
          <Link to={"/" + chat.id} className="product-link">
            <h3 className="product-name">{chat.message}</h3>
            <p className="product-brand">
              {moment(chat.createdAt.toDate()).fromNow()}
            </p>
          </Link>
        </li>
      </div>
    );
  }
}
export default ChatListDetail;
