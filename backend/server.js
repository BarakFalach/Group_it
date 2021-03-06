const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

// loads environment variables from a .env file into process.env
require('dotenv').config();

const app=express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

//establish connection to MongoDB
const uri = process.env.ATLAS_URI;
mongoose.connect(uri,{useNewUrlParser:true , useCreateIndex:true , useUnifiedTopology: true});
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established succesfuly")
});

const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');
app.use('/exercises',exercisesRouter);
app.use('/users',usersRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
