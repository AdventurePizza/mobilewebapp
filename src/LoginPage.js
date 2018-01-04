import React from 'react';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {Link} from 'react-router-dom';

class LoginPage extends React.Component{

  constructor(){
    super();
    this.handleClick=this.handleClick.bind(this);
    this.state={
      username:'',
      password:''
    }
  }

  handleClick(){
    // Submitting Login
  }

  render(){

    const styleDiv = {
      "textAlign":"center"
    }

    const styleButton = {
      "marginTop":15,
      "marginBottom":15
    }

    return(
      <MuiThemeProvider>
        <div>
          <AppBar
             title="Login"
           />
           <div style={styleDiv}>
             <TextField
               hintText="Enter your Username"
               floatingLabelText="Username"
               onChange = {(event,newValue) => this.setState({username:newValue})}
               />
             <br/>
             <TextField
               type="password"
               hintText="Enter your Password"
               floatingLabelText="Password"
               onChange = {(event,newValue) => this.setState({password:newValue})}
               />
             <br/>
             <RaisedButton label="Submit" style={styleButton} primary={true} onClick={this.handleClick}/>

             <h6>Not yet Registered?</h6>
             <Link to='/register'>
               <RaisedButton label="Register" style={styleButton} primary={true} onClick={this.handleClick}/>
             </Link>
           </div>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default LoginPage;
