const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    date: {
        type: Date,
        default: Date.now
      },
    exercises: [
        {
            type: String,
            name: String,
            duration: Number,
            weight: Number,
            reps: Number,
            sets: Number
        },
    ],
    })

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;

// const Schema = mongoose.Schema;

// const transactionSchema = new Schema({
//   name: {
//     type: String,
//     trim: true,
//     required: "Enter a name for transaction"
//   },
//   value: {
//     type: Number,
//     required: "Enter an amount"
//   },
//   date: {
//     type: Date,
//     default: Date.now
//   }
// });

// const Transaction = mongoose.model("Transaction", transactionSchema);

// module.exports = Transaction;
