import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { connect } from 'react-redux'
import {compose} from 'redux'
import {signOut} from './../../store/actions/authActions'


 class MainHeader extends Component {
  render() {
    const { auth } = this.props;

    return (
        <header className="header">
        <h1 className="header-title">
        <Link to={"/"} className="product-link">
          notSpot
          </Link>
        </h1>

        {auth.uid ? <h2 onClick={this.props.signOut} className="header-subtitle"> exists</h2>:<h2 className="header-subtitle"> doesn't exists</h2>}
      </header>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    auth: state.firebase.auth
  }
}  
const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}


export default  compose(
  connect(mapStateToProps, mapDispatchToProps)
  )(MainHeader);