const router = require('express').Router();
let user = require('../models/user.model');
const User = require('../models/user.model'); //the mongoose model

//first route : handeling http get request on the /users url path
router.route('/').get((req,res)=>{
    User.find() //.find() - mongoose method that get a list of all the users in the DB
    .then(users => res.json(users)) // return the found users in json format
    .catch(err => res.status(400).json('Error: '+err)); // in case of an error
});

// second route : handeling http post requset 
router.route('/add').post((req,res)=>{
    const username = req.body.username;
    const newUser = new User({username});

    newUser.save()
    .then(()=> res.json(`User ${newUser.username} Added!`))
    .catch(err => res.status(400).json('Error: '+ err));
});

module.exports = router;

