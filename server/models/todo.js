var mongoose = require('mongoose');

var Todo = mongoose.model('todo', {
  text: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null
  }
});


// var newTodo = new Todo({
//   text: 'Cook Dinner'
// });
//
// newTodo.save().then((doc) => {
//   console.log('Saved Todo', doc);
// }, (error) => {
//   console.log('Unable to save Todo', error);
// });


// var otherTodo = new Todo({
//   text: 'Feed the dog'
// });
//
// otherTodo.save().then((doc) => {
//   console.log('Saved Todo', doc);
// }, (error) => {
//   console.log('Unable to save Todo', error);
// });

module.exports = {Todo};
