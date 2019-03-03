const mongoose = require('mongoose')
const User = require('../models/user.js')

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost:27017/TodoApp')

// const Todo = mongoose.model('Todos', {
//     text: {
//         type: String,
//         required: true,
//         minlength: 1,
//         trim: false
//     },
//     completed: {
//         type: Boolean,
//         default: false
//     },
//     completedAt: {
//         type: Number,
//         default: null
//     }
// });

// const otherTodo = new Todo({
//     text: 123
//     // completed: true,
//     // completedAt: 123
// })

// otherTodo.save().then(doc => {
//     console.log('Saved todo', doc);
// }, err => {
//     console.error(err, "Todo is not saved");
// })

// const newUser = new User({
//     text: 'Make the bed'
// });

// newUser.save().then(doc => {
//     console.log('New user saved', doc);
// }, err => {
//     console.log(err, 'User is not saved');
// });

module.exports = {mongoose}

