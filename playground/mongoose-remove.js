const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((response) => {
//   console.log(response);
// }, (error) => {
//   console.log(error);
// });


Todo.findOneAndRemove({
  _id: '5a0e81dbc273a044f44cd78'
}).then((todo) => {
  if(!todo) {
    return console.log('No such id found');
  }
  console.log(todo);
}, (error) => {
  console.log('Give a correct id');
});


// Todo.findByIdAndRemove('5a0e81dbc273a044f44cbd78').then((todo) => {
//   console.log(todo);
// }, (error) => {
//   console.log(error);
// });
