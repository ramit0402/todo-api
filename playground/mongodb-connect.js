//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);

//DESTRUCTURING IN ES6
// var user = {
//   name: 'Ramit',
//   age: 21
// };
// var {name} = user;
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
  if(error) {
    return console.log('Unable ot connect to MongoDB server');
  }

  // console.log('Connected to MongoDB server');
  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (error, result) => {
  //   if(error) {
  //     return console.log('unable to insert todo');
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  // console.log('Connected to MongoDB server');
  // db.collection('Users').insertOne({
  //   name: 'Ramit',
  //   age: 21,
  //   location: 'Thane'
  // }, (error, result) => {
  //   if(error) {
  //     return console.log('unable to insert todo');
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  //   console.log(result.ops[0]._id.getTimestamp());
  // });

  db.close();
});
