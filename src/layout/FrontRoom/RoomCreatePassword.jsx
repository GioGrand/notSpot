import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { reduxForm, Field } from "redux-form";
import { withFirestore } from "react-redux-firebase";
import { createPassword } from "../../store/actions/chatActions";
import { Link } from "react-router-dom";

class RoomCreatePassword extends Component {
  state = {
    message: "Create a password for the spot"
  };

  handleChange = async e => {
    const valore = e.target.value;
    const spot = this.props.match.params.id;
    this.setState({
      spotid: this.props.match.params.id,
      password: valore
    });
  };

  handleSubmit = async values => {
    const { firestore, history } = this.props;
    await firestore.collection("matches").doc(this.props.match.params.id).set({
        password: values.password,
        createdAt: new Date()
      });
      const code = Math.random().toString(36).replace(/[^a-z]+/g, "").substr(0, 15) + Math.random().toString(36).replace(/[^a-z]+/g, "").substr(0, 15);
    await firestore.collection("tokens").doc(code).set({
        spot: this.props.match.params.id,
        createdAt: new Date()
      });
    // this.props.createPassword(this.state);
    this.props.reset();
    history.push(`/spot/${code}`);
  };

  render() {
    const { message } = this.state;
    return (
      <React.Fragment>
        <article className="list-container" id="books-interior-design">
          <div className="list">
            <div className="list-title">
              notSpot
              <span className="list-spacer"> / </span>{" "}
              <span className="list-subcategory">doesn't exist</span>
            </div>
          </div>
          <div className={"list2 " + this.state.gio}>
            <form
              autoComplete="off"
              onChange={this.handleChange}
              onSubmit={this.props.handleSubmit(this.handleSubmit)}
            >
              <div>
                <Field
                  className="input"
                  name="password"
                  component="input"
                  type="password"
                  placeholder="Create a password"
                  autoFocus={true}
                />
              </div>
              <button className="nonbutton" type="submit">
                <h3 className={"input2 " + this.state.giu}>{message}</h3>
              </button>
              )
            </form>
          </div>
          <Link to="/">
            <a className="back">← Back to the full list</a>
          </Link>
        </article>
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createPassword: password => dispatch(createPassword(password))
  };
};

export default compose(
  withFirestore,
  connect(
    null,
    mapDispatchToProps
  ),
  reduxForm({ form: "RoomCreatePassword", enableReinitialize: true })
)(RoomCreatePassword);
