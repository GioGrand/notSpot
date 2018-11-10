import React, { Component } from "react";
import { createRoom } from "../../store/actions/chatActions";
import { withFirestore } from "react-redux-firebase";
import { connect } from "react-redux";
import { compose } from "redux";
import { reduxForm, Field } from "redux-form";
import Typist from 'react-typist';
import { renderToString } from 'react-dom/server';

class RoomCreateForm extends Component {
  handleChange = async e => {
    const valore = e.target.value;
  };

  handleSubmit = values => {
    this.props.createRoom(values);
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
              name="title"
              component="input"
              type="text"
              placeholder="Create your room"
            />
          </div>
        </form>

        
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createRoom: room => dispatch(createRoom(room))
  };
};

export default compose(
  withFirestore,
  connect(
    null,
    mapDispatchToProps
  ),
  reduxForm({ form: "RoomCreateForm", enableReinitialize: true })
)(RoomCreateForm);
