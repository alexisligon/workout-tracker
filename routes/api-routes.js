const router = require('express').Router();
const db = require('../models');

// get all workouts
router.get('/api/workouts', (req, res) => {
    db.Workout.aggregate([{
        $addFields: { totalDuration: { $sum: '$exercises.duration' } }
    }])
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
    db.Workout.find({})
    .then(dbWorkouts => {
        const workouts = dbWorkouts.map(workout => {
            const duration = workout.exercises.reduce((acc, next) => {
                return acc + next.duration;
            }, 0);
            return {
                totalDuration: duration,
                ...workout.toObject()
            }
        })
        res.json(workouts);
    })
    .catch(err => {
        res.json(err)
    })

})


module.exports = router;