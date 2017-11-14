const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
  if(error) {
    return console.log('Unable ot connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  //DELETES MANY
  // db.collection('Todos').deleteMany({text: 'eat lunch'}).then((result) => {
  //   console.log(result);
  // }, (error) => {
  //   console.log('Unable to fetch delete',  error);
  // });

  //DELETES ONE
  // db.collection('Todos').deleteOne({text: 'walk the dog'}).then((result) => {
  //   console.log(result);
  // }, (error) => {
  //   console.log('Unable to fetch delete',  error);
  // });

  //FIND ONE AND DELETE
  db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    console.log(result);
  }, (error) => {
    console.log('Unable to fetch delete',  error);
  });

  //db.close();
});
