import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import axios from 'axios';
import {Link} from 'react-router-dom';

class Register extends Component {

  constructor(){
    super();
    this.handleClick = this.handleClick.bind(this);
    this.state={
      first_name:'',
      last_name:'',
      email:'',
      password:''
    }
  }

  handleClick(){
    //register Function
  }

  render() {

    const styleDiv = {
      "textAlign":"center"
    }

    const styleButton = {
      "marginTop":15,
      "marginBottom":15
    }

    return (
      <MuiThemeProvider>
        <div>
        <AppBar
           title="Register"
         />
         <div style={styleDiv}>
           <TextField
             hintText="Enter your First Name"
             floatingLabelText="First Name"
             onChange = {(event,newValue) => this.setState({first_name:newValue})}
             />
           <br/>
           <TextField
             hintText="Enter your Last Name"
             floatingLabelText="Last Name"
             onChange = {(event,newValue) => this.setState({last_name:newValue})}
             />
           <br/>
           <TextField
             hintText="Enter your Email"
             type="email"
             floatingLabelText="Email"
             onChange = {(event,newValue) => this.setState({email:newValue})}
             />
           <br/>
           <TextField
             type = "password"
             hintText="Enter your Password"
             floatingLabelText="Password"
             onChange = {(event,newValue) => this.setState({password:newValue})}
             />
           <br/>
           <RaisedButton label="Submit" primary={true} style={styleButton} onClick={(event) => this.handleClick(event)}/>

           <h6>Already Registered?</h6>
           <Link to='/login'>
             <RaisedButton label="Login" style={styleButton} primary={true}/>
           </Link>
         </div>

        </div>
       </MuiThemeProvider>
    );
  }
}
export default Register;
