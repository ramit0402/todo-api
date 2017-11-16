var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://ramit0402:Ramit1996@ds111476.mlab.com:11476/todo_app' || 'mongodb://localhost:27017/TodoApp');

module.exports = {mongoose};
