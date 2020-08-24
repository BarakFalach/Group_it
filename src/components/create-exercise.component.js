import React,{ Component } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';


export default class CreateExercises extends Component{
    constructor(props){
        super(props);
        //binding
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeStength = this.onChangeStength.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        //react varibales
        this.state = {
            username: '',
            description: '',
            stength: 0,
            date: new Date(),
            users: []
        }
    }
    //react method - automaticly call before anything displays on the page
    componentDidMount() {
      axios.get('http://localhost:5000/users/')
        .then(response => {
          if (response.data.length > 0) { //at least 1 user in the DB
            this.setState({
              users: response.data.map(user => user.username),
              username: response.data[0].username
            })
          }
        })
        .catch((error) => {
          console.log(error);
        })
  
    }

    onChangeUsername(e) {
        this.setState({
          username: e.target.value
        })
    }
    onChangeDescription(e) {
        this.setState({
          description: e.target.value
        })
    }
    onChangeStength(e) {
        this.setState({
          stength: e.target.value
        })
    }
    onChangeDate(date) {
        this.setState({
          date: date
        })
    }
    onSubmit(e){
        e.preventDefault();
        const exercise = {
            username: this.state.username,
            description: this.state.description,
            duration: this.state.stength,
            date: this.state.date
        }
        console.log(exercise);
        //send data to backend
        axios.post('http://localhost:5000/exercises/add', exercise)
        .then(res => console.log(res.data));

        window.location = '/' //take back to homepage after click submit
          
    }

    render(){
        return(
            <div>
      <h3>Create New Exercise Log</h3>
      <form onSubmit={this.onSubmit}>
        <div className="form-group"> 
          <label>Username: </label>
          <select ref="userInput"
              required
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUsername}>
              {
                this.state.users.map(function(user) {
                  return <option 
                    key={user}
                    value={user}>{user}
                    </option>;
                })
              }
          </select>
        </div>
        <div className="form-group"> 
          <label>Description: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.description}
              onChange={this.onChangeDescription}
              />
        </div>
        <div className="form-group">
          <label>Stength: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.duration}
              onChange={this.onChangeDuration}
              />
        </div>
        <div className="form-group">
          <label>Date: </label>
          <div>
            <DatePicker //Datepicker component
              selected={this.state.date}
              onChange={this.onChangeDate}
            />
          </div>
        </div>

        <div className="form-group">
          <input type="submit" value="Create Exercise Log" className="btn btn-primary" />
        </div>
      </form>
    </div>
        )
    }
}