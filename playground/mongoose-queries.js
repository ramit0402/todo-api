const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var todoId = '5a0c89404a7b782494cc90c1';
var userId = '5a0c3ace73e7450e18b6ecfb';

// Todo.find({
//   _id: todoId
// }).then((todos) => {
//   console.log('Todos:', todos);
// });
//
// Todo.findOne({
//   _id: todoId
// }).then((todo) => {
//   if(!todo) {
//     return console.log('Id not found');
//   }
//   console.log('Todo:', todo);
// });

User.findById(userId).then((user) => {
  if(!user) {
    return console.log('Unable to find user');
  }
  console.log('User:',user);
}, (error) => {
  console.log('Id is not valid');
});

Todo.findById(todoId).then((todo) => {
  if(!todo) {
    return console.log('Id not found');
  }
  console.log('Todo By ID:', todo);
}, (error) => {
  return console.log('Id not valid');
});
