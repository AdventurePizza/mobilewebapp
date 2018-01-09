import React from 'react';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import axios from 'axios';
class Profile extends React.Component{

  constructor(){
    super();
    this.state={
      twitterHandle : ''
    };
    this.handleData=this.handleData.bind(this);
    this.collectData=this.collectData.bind(this);
  }

  handleData(event){
    if(event.key === 'Enter'){
      this.collectData();
    }
  }

  collectData(){
    axios.get(URL)
      .then(response => console.log(response))
      .catch(error=>console.log('Something Went Wrong'))
  }

  render(){
    const buttonStyle = {
      margin: "10px 25px",
    };

    const inputStyle = {
      width: "95%",
      display: "block",
      margin:"12px auto"
    }
    return(
      <MuiThemeProvider>
        <div>
        <AppBar
           title="Profile"
         />
          <TextField
          hintText="Enter the ID"
          floatingLabelText="Twitter handle"
          onChange={(e)=>{this.setState({ twitterHandle: e.target.value })}}
          onKeyPress={this.handleData}
          style={inputStyle}
        />
        <RaisedButton label="Submit" onClick={this.collectData} primary={true} style={buttonStyle} />
       </div>
     </MuiThemeProvider>
    );
  }
}

export default Profile;
