import React, {Component} from 'react';
import { Segment,Button} from 'semantic-ui-react';
import {hashHistory} from 'react-router';
export default class LogoutConfirmation extends React.Component {
  constructor(){
    super();

  }
  handlelogin(){
    hashHistory.push('/');
  }
  render(){
    return(
      <div>
      <Segment style={{marginTop:'10%'}}>
      <h1>Yor are successfully logout.</h1>
      <div style={{marginLeft:'20%'}}>
      <p>Click on Login button to login again</p>
      <Button onClick={this.handlelogin.bind(this)}>Login</Button>
      </div>
      </Segment>
      </div>
    )
  }
}
