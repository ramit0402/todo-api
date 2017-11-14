const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
  if(error) {
    return console.log('Unable ot connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').find({completed: false}).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (error) => {
  //   console.log('Unable to fetch todos',  error);
  // });

  db.collection('Todos').find({completed: false}).count().then((count) => {
    console.log(`Todos Count: ${count}`);
  }, (error) => {
    console.log('Unable to fetch todos count',  error);
  });

  //db.close();
});
