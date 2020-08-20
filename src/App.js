import React, { Component } from "react";
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import logo from "./logo.svg";
import "./App.css";
import Form from "./Form";
import DenseTable from "./Table.js";

// injectTapEventPlugin();

class App extends Component {


  state = {
    field:{}
  }
  onChange = updatedValue => 
  {
    this.setState({fields: {
      ...this.state.fields, //read about "..." Syntax
      ...updatedValue}});
}

  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <Form onChange={fields=>this.onChange(fields)}/>
          <DenseTable 
          data={[]}
          header = {[
            {
              name:"ID",
              prop:'ID'
            },
            {
              name:"First Name",
              prop:'firstName'
            },
            {
              name:"Last Name",
              prop:'lastName'
            },
            {
              name:"1st friend",
              prop:'friend1'
            },
            {
              name:"2nd friend",
              prop:'friend2'
            },
            ]}/>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
