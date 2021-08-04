const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    date: {
        type: Date,
        default: Date.now
    },
    exercises:
        [
            {
                type: {
                    type: String,
                },
                name: {
                    type: String,
                    trim: true
                },
                distance: Number,
                duration: Number,
                weight: Number,
                sets: Number,
                reps: Number
            }]

})

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
