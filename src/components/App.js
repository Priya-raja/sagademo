

import React, { Component } from "react";

import {connect} from 'react-redux';
import {getUserRequest} from '../actions';


class App extends Component {
  constructor(props) {
    super(props);
    this.props.getUserRequest();
  }
  render() {
    return (
    
    <div> 
      Yes
      </div>)
  }
}
export default connect (null,{
getUserRequest
})(App);
