const mongoose = require('mongoose');
const User = require('../models/user.js');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp', { useMongoClient: true });

module.exports = { mongoose };

