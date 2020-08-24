import React,{ Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

//exercise component
const Exercise = props => (
    <tr>
      <td>{props.exercise.username}</td>
      <td>{props.exercise.description}</td>
      <td>{props.exercise.stength}</td>
      <td>{props.exercise.date.substring(0,10)}</td>
      <td>
        <Link to={"/edit/"+props.exercise.username}>edit</Link> | <a href="#" onClick={() => { props.deleteExercise(props.exercise.username) }}>delete</a>
      </td>
    </tr>
  )
//exercise list component
export default class ExercisesList extends Component{
    constructor(props){
        super(props);
        //binding
        this.deleteExercise = this.deleteExercise.bind(this);

        this.state = {exercises: []};
    }
    // get the list of the exercises for the DB
    componentDidMount(){
        axios.get('http://localhost:5000/exercises/')
        .then(response => { 
            this.setState({ exercises: response.data })
        })
        .catch((error) => {
            console.log(error);
        })
    }
    deleteExercise(username) {
        //delete from DB
        axios.delete('http://localhost:5000/exercises/'+username)
          .then(response => { console.log(response.data)});
        //delete from display to user
        this.setState({
          exercises: this.state.exercises.filter(elem => elem.username !== username)
        })
    }

    exerciseList() {
        return this.state.exercises.map(currentexercise => {
          return <Exercise exercise={currentexercise} deleteExercise={this.deleteExercise} key={currentexercise.username}/>;
        })
    }
    
    render(){
        return(
            <div>
                <h3>Logged Exercises</h3>
                <table className="table">
                <thead className="thead-light">
                    <tr>
                    <th>Username</th>
                    <th>Description</th>
                    <th>Duration</th>
                    <th>Date</th>
                    <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    { this.exerciseList() }
                </tbody>
                </table>
            </div>
        )
    }
}