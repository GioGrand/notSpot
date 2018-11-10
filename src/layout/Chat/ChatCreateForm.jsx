import React, { Component } from "react";
import { createChat } from "../../store/actions/chatActions";
import { withFirestore } from "react-redux-firebase";
import { connect } from "react-redux";
import { compose } from "redux";
import { reduxForm, Field } from "redux-form";

class ChatCreateForm extends Component {
  state = {
    message: "",
    roomid: ""
  };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value,
      roomid: this.props.roomid
    });
  };
  handleSubmit = values => {
    this.props.createChat(this.state);
    this.props.reset();
  };
  render() {
    return (
      <div className="list2">
        <form
          autoComplete="off"
          onChange={this.handleChange}
          onSubmit={this.props.handleSubmit(this.handleSubmit)}
        >
          <div>
            <Field
              className="input"
              name="message"
              id="message"
              component="input"
              type="text"
              placeholder="Type here"
            />
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createChat: room => dispatch(createChat(room))
  };
};

export default compose(
  withFirestore,
  connect(
    null,
    mapDispatchToProps
  ),
  reduxForm({ form: "ChatCreateForm", enableReinitialize: true })
)(ChatCreateForm);
