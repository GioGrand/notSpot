import React, { Component } from "react";
import moment from "moment";
import { connect } from "react-redux";
import { deleteChat } from "../../store/actions/chatActions";
import { compose } from "redux";

class ChatListDetail extends Component {

  state = {
    roomid: "",
    chatid: ""
  };
  componentDidMount() {
    this.setState({
      roomid: this.props.roomid,
      chatid: this.props.chat.id
    });
    
  }

  handleSubmit = e => {
    this.props.DeleteChat(this.state);
  };

  render() {
    const { chat } = this.props;
    return (
      <div>
        <li className="product">
          <a onClick={this.handleSubmit} className="chat-link">
            <h3 className="product-name">{chat.message}</h3>
            <p className="product-brand">
              {moment(chat.createdAt.toDate()).fromNow()}
            </p>
          </a>
        </li>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    DeleteChat: cid => dispatch(deleteChat(cid))
  };
};
export default compose(
  connect(
    null,
    mapDispatchToProps
  )
  )(ChatListDetail);