const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
  if(error) {
    return console.log('Unable ot connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID("5a0b1b0b7a014484c4fd6ca5")
  // }, {
  //     $set: {
  //       completed: true
  //     }
  //   }, {
  //     returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // }, (error) => {
  //   console.log('Unable to update delete',  error);
  // });

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID("5a0b0a10a280742ddcebf873")
  }, {
      $set: {
        name: 'Ramit'
      },
      $inc: {
        age: 1
      }
    }, {
      returnOriginal: false
  }).then((result) => {
    console.log(result);
  }, (error) => {
    console.log('Unable to update delete',  error);
  });

  //db.close();
});
