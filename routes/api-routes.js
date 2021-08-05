const router = require('express').Router();
const { Workout } = require('../models');
const db = require('../models');

// get all workouts
router.get('/api/workouts', (req, res) => {
    db.Workout.find({})
        .then(dbWorkout => { res.json(dbWorkout); })
        .catch(err => { res.json(err); })
});

// post a new workout
router.post('/api/workouts/', ({ body }, res) => {
    db.Workout.create(body)
        .then(dbWorkout => { res.json(dbWorkout) })
        .catch(err => { res.json(err) });
})

// update a workout
router.put('/api/workouts/:id', (req, res) => {
    db.Workout.findByIdAndUpdate(
        { _id: req.params.id },
        { $push: { exercises: req.body } },
        { new: true, runValidators: true })
        .then(dbWorkout => { res.json(dbWorkout); })
        .catch(err => res.json(err))
})

// get for the range

router.get('/api/workouts/range', (req, res) => {
    db.Workout.aggregate(
        [
            {
              $addFields: { totalDuration: 'something'}
              // add total duration from all exercises here????
              }
          ] 
    )
})

module.exports = router;