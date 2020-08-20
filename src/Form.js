import React from "react";
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import {createData} from './Table.js'

export default class Form extends React.Component
{
    state = {
        firstName:"",
        firstNameError:"",
        lastName:"",
        lastNameError:"",
        ID:"",
        IDError:"",
        friend1:"",
        friend1Error:"",
        friend2:"",
        friend2Error:"",
    };

    change= e =>
    {
        this.props.onChange({[e.target.name]:e.target.value});
        this.setState({
            [e.target.name]: e.target.value
        });

    }

    validate =()  => {

        let isError = false;
        const errors ={};

        if (this.state.ID.length!==9)
        {
            isError=true;
            errors.IDError= "Id need to be 9 digits"
        }

        if (isError)
        {
            this.setState({
                ...this.state,
                ...errors
            })
            
        }
        return isError
    }

    onSubmit =e =>
    {
        e.preventDefault();
        const err = this.validate();
        createData('Fryoghurt', 159, 24, 24, 4.0)
        
        if(!err){
        // this.props.onSubmit(this.state);
            this.setState({
                firstName:"",
                firstNameError:"",
                lastName:"",
                lastNameError:"",
                ID:"",
                IDError:"",
                friend1:"",
                friend1Error:"",
                friend2:"",
                friend2Error:"",
            })
            this.props.onChange({
                firstName:"",
                lastName:"",
                ID:"",
                friend1:"",
                friend2:"",
            })
    }}
    render()
    {
        return (
            <form>
            
                <TextField
                name="firstName"
                label="First Name"
                // floatingLabelText="First Name"
                value ={this.state.firstName} 
                onChange = {e => this.change(e)} 
                error={this.state.firstNameError}
                />
                <br />
                <TextField
                name="lastName"
                label="Last Name"
                floatingLabelText="Last name"  
                value ={this.state.lastName} 
                onChange = {e => this.change(e)} 
                error={this.state.lastNameError}
                /> 
                <br />            
                <TextField
                name="ID"
                label="ID"
                floatingLabelText="ID"  
                value ={this.state.ID} 
                onChange = {e => this.change(e)} 
                error={this.state.IDError}
                />
                <br />
                <TextField
                name="friend1"
                label="1st friend"
                floatingLabelText="1st friend"  
                value ={this.state.friend1} 
                onChange = {e => this.change(e)} 
                error={this.state.friend1Error}
                />
                <br />
                <TextField
                name="friend2"
                label="2nd friend"
                floatingLabelText="2nd friend"  
                value ={this.state.friend2} 
                onChange = {e => this.change(e)}
                error={this.state.friend2Error}
                />
                <br />
                <br/>

                <Button 
                     onClick={e => this.onSubmit(e)}
                    variant="contained" color="primary">
                    Submit
                </Button>
              
    
            
                
            </form>

        )
    }

}