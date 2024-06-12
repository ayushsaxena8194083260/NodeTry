const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
    name: String,
    age: Number,
    work:
    {
        type: String,
        enum: ['developer', 'designer', 'manager'],
        required: true
    },
    email: String,
    salary: Number,
});

const Person = mongoose.model('Person', personSchema);
module.exports = Person;