const router = require('express').Router();
let Exercise = require('../models/exercise.model');//the mongoose model

//first route : handeling http get request on the /users url path
router.route('/').get((req,res)=>{
    Exercise.find() //.find() - mongoose method that get a list of all the users in the DB
    .then(exercises => res.json(exercises)) // return the found users in json format
    .catch(err => res.status(400).json('Error: '+err)); // in case of an error
});

// second route : handeling http post requset 
router.route('/add').post((req,res)=>{
    const username = req.body.username;
    const description = req.body.description;
    const stength = Number(req.body.stength);
    const date = Date.parse(req.body.date);

    const newExercise = new Exercise({
        username,description,stength,date,
    });

    newExercise.save()
    .then(()=> res.json('Exercise Added!'))
    .catch(err => res.status(400).json('Error: '+ err));
});

router.route('/:username').get((req, res) => {
    Exercise.find({username : `${req.params.username}`})
      .then(exercise => res.json(exercise))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
  router.route('/:username').delete((req, res) => {
    Exercise.deleteOne({username : `${req.params.username}`})
      .then(() => res.json('Exercise deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
  router.route('/update/:username').post((req, res) => {
    Exercise.find({username : `${req.params.username}`})
      .then(exercise => {
        exercise.username = req.body.username;
        exercise.description = req.body.description;
        exercise.stength = Number(req.body.stength);
        exercise.date = Date.parse(req.body.date);
  
        exercise.save()
          .then(() => res.json('Exercise updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });

module.exports = router;

