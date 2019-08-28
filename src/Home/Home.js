import React from 'react';
import { connect } from "react-redux";

import './Home.css';
import {addNewUserAction} from '../Action/addNewUserAction';

class Home extends React.Component {
 
  render() {
    return (
      <div className="Home">
      <button className="w3-button w3-black" onClick ={this.props.addNewUserAction}>Button Button</button>
      <div className="w3-row-padding">
      {this.props.users.map((users, i) =>
        <div key={i} className="w3-col l2 m6 w3-margin-bottom">
        <div className="w3-display-container w3-margin-bottom">
        <div className="w3-display-topleft w3-black w3-padding">{users.name}</div>
        </div>
        </div>
    
      )}
      </div>
      </div>
    ); 
  }
}
const mapStateToProps = state => ({
  ...state
});
const mapDispatchToProps = dispatch => ({
  addNewUserAction: () => dispatch(addNewUserAction),
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(Home);