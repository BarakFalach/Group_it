<<<<<<< HEAD
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";

import Navbar from "./components/navbar.component"
import ExercisesList from "./components/exercises-list.component";
import EditExercise from "./components/edit-exercise.component";
import CreateExercise from "./components/create-exercise.component";
import CreateUser from "./components/create-user.component";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br/>
        <Route path="/" exact component={ExercisesList} />
        <Route path="/edit/:username" component={EditExercise} />
        <Route path="/create" component={CreateExercise} />
        <Route path="/user" component={CreateUser} />
      </div>
    </Router>
  );
=======
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
>>>>>>> cb5ccb3053f2f05d065b655afe67afee7220baaa
}

export default App;