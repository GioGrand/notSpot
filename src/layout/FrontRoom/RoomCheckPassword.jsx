import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { reduxForm, Field } from "redux-form";
import { withFirestore } from "react-redux-firebase";
import { Link } from "react-router-dom";

class RoomCheckPassword extends Component {
  state = {
    message: "Secret word someone gave you.."
  };

  handleChange = async e => {
    const { firestore } = this.props;
    const spot = this.props.match.params.id;
    const valore = e.target.value;
    await firestore.get(`matches/${spot}`);
    this.setState({
      gio: "quinto",
      giu: "",
      message: "Secret word someone gave you.."
    });
  };

  handleSubmit = async values => {
    const { firestore, history } = this.props;
    const valore = values.password;
    const codice = await this.props.matches[`${this.props.match.params.id}`].password;

    if (codice === valore) {
      this.setState({
        gio: "sesto",
        giu: "",
        message: "excellent, redirecting.."
      });
      const code = Math.random().toString(36).replace(/[^a-z]+/g, "").substr(0, 15) + Math.random().toString(36).replace(/[^a-z]+/g, "").substr(0, 15);
      await firestore.collection("tokens").doc(code).set({
        spot: this.props.match.params.id,
        createdAt: new Date(),
        authorId: this.props.auth.uid
      });
      this.props.reset();
      history.push(`/spot/${code}`);
      // setTimeout(function() {
      //   history.push(`/spot/${spot}`);
      // }, 1000);
    } else {
      this.setState({
        gio: "terzo",
        giu: "",
        message: "Ops.. wrong password	"
      });
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
                  placeholder="Secret word, please"
                  autoFocus={true}
                />
              </div>
              <button className="nonbutton" type="submit">
                <h3 className={"input2 " + this.state.giu}>{message}</h3>
              </button>
            </form>
          </div>
          <Link to="/">
            <a className="back">← Back to home</a>
          </Link>
        </article>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    matches: state.firestore.data.matches,
    auth: state.firebase.auth
  };
};

export default compose(
  withFirestore,
  connect(
    mapStateToProps,
    null
  ),
  reduxForm({ form: "RoomCheckPassword", enableReinitialize: true })
)(RoomCheckPassword);
