import React, { Component } from "react";
import { createRoom } from "../../store/actions/chatActions";
import { withFirestore } from "react-redux-firebase";
import { connect } from "react-redux";
import { compose } from "redux";
import { reduxForm, Field } from "redux-form";

class RoomCreateForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gio: "sesto"
    };
  }

  handleChange = async e => {
    const { firestore } = this.props;
    const valore = e.target.value;
    const valore2 = valore.toLowerCase();
    let stanza = await firestore.get(`rooms/${valore2}`);
    let lunghezza = valore.length;
    if (lunghezza > 3) {
      if (!stanza.exists) {
        this.setState({ message: "Create this spot →	" });
        this.setState({
          gio: "terzo",
          giu: "",
          bil: valore,
          bid: "",
          message: "Create this spot →	"
        });
      } else {
        this.setState({
          message: valore + " is in the forest. Go there →	",
          gio: "quinto",
          bid: valore,
          bil: ""
        });
      }
    } else {
      this.setState({ gio: "sesto" });
      this.setState({ message: "Too short. Try a longer name" });
    }
  };

  handleSubmit = values => {
    console.log(this.state);
    const { history } = this.props;
    console.log(history);
    const bid2 = this.state.bid.toLowerCase();
    const bid3 = this.state.bil.toLowerCase();

    if (this.state.bid) {
      //  this.props.reset();
      console.log(this.state);
      history.push(`/checkpassword/${bid2}`);
      // setTimeout(function() {
      //   history.push(`/checkpassword/${bid2}`);
      // }, 500);
    } else {
      this.props.createRoom(values);
      //  this.props.reset();
      this.setState({
        message: "Great. New spot somewhere",
        gio: "quinto"
      });
      history.push(`/createpassword/${bid3}`);
      // setTimeout(function() {
      //   history.push(`/createpassword/${bid3}`);
      // }, 500);
    }
  };

  render() {
    const { message } = this.state;
    return (
      <React.Fragment>
        <article className="list-container" id="books-interior-design">
          <div className="list">
            <div className="list-title">
              notSpot
              <span className="list-spacer"> / </span>
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
                  className={"input " + this.state.giu}
                  name="title"
                  component="input"
                  type="text"
                  placeholder="Type a spot name"
                  autoFocus={true}
                />
              </div>
              {message ? (
                <button className="nonbutton" type="submit">
                  <h3 className={"input2 " + this.state.giu}>{message}</h3>
                </button>
              ) : null}
            </form>
          </div>
          <a className="back">I want to know more</a>
        </article>
      </React.Fragment>
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
