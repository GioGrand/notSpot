import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withFirestore } from "react-redux-firebase";
import { firestoreConnect } from "react-redux-firebase";
import Chatdashboard2 from "./ChatDashboard2";
import { BarLoader } from "react-spinners";

class ChatContainer extends Component {
  // state = {date: new Date()};

  // componentDidMount() {
  //   this.timerID = setInterval(
  //     () => this.tick(),
  //     1000
  //   );
  //    setTimeout(function() {
  //      alert('daiii');
  //       //history.push(`/createpassword/${bid3}`);
  //     }, 300000);
  // }

  // tick() {
  //   this.setState({
  //     date: new Date()
  //   });
  // }

  // componentWillUnmount() {
  //   clearInterval(this.timerID);
  // }

  render() {
    const { tokes } = this.props;
    console.log(tokes);
    return (
      <React.Fragment>
    {/*}  <h2>It is {this.state.date.toLocaleTimeString()}.</h2> */}
        {tokes ? (
          <Chatdashboard2 token={tokes} />
        ) : (
          <article className="list-container">
            <div className="sweetloading">
              <BarLoader
                sizeUnit={"px"}
                width={400}
                height={2}
                color={"#000000"}
              />
            </div>
          </article>
        )}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    tokes: state.firestore.data[ownProps.match.params.id]
  };
};

export default compose(
  withFirestore,
  connect(
    mapStateToProps,
    null
  ),
  firestoreConnect(props => [
    {
      collection: "tokens",
      doc: props.match.params.id,
      storeAs: `${props.match.params.id}`
    }
  ])
)(ChatContainer);
