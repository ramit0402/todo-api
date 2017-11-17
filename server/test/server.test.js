const expect = require('expect');
const supertest = require('supertest');

const {app} = require('./../server');
const{Todo} = require('./../models/todo');
const {ObjectID} = require('mongodb');

const todos = [{
  _id: new ObjectID(),
  text: 'First test todo'
}, {
  _id: new ObjectID(),
  text: 'Second test todo'
}];

beforeEach((done) => {
  Todo.remove({}).then(() => {
    return Todo.insertMany(todos);
  }).then(() => done());
});

describe('POST /todos', () => {
  it('should create a new todo', (done) => {
    var text = 'Test todo text';

    supertest(app)
      .post('/todos')
      .send({text})
      .expect(200)
      .expect((response) => {
        expect(response.body.text).toBe(text);
      })
      .end((error, response) => {
        if(error) {
          return done(error);
        }

        Todo.find({text}).then((todos) => {
          expect(todos.length).toBe(1);
          expect(todos[0].text).toBe(text);
          done();
        }).catch((error) => done(error));
      });
  });

  it('should not create todo with invalid body data', (done) => {
    supertest(app)
      .post('/todos')
      .send({})
      .expect(400)
      .end((error, response) => {
        if(error) {
          return done(error);
        }
        Todo.find().then((todos) => {
          expect(todos.length).toBe(2);
          done();
        }).catch((error) => done(error));
      });
  });
});

describe('GET /todos', () => {
  it('should get all todos', (done) => {
    supertest(app)
      .get('/todos')
      .expect(200)
      .expect((response) => {
        expect(response.body.todos.length).toBe(2);
      })
      .end(done);
  });
});


describe('GET /todos/:id', () => {
  it('should return todo doc', (done) => {
    supertest(app)
    .get(`/todos/${todos[0]._id.toHexString()}`)
    .expect(200)
    .expect((response) => {
      expect(response.body.todo.text).toBe(todos[0].text);
    })
    .end(done);
  });

  it('should return 404 if todo not found', (done) => {
    var hexId = new ObjectID().toHexString();
    supertest(app)
      .get(`/todos/${hexId}`)
      .expect(404)
      .end(done);
  });

  it('should return 400 for non-object ids', (done) => {
    supertest(app)
      .get(`/todos/123abc`)
      .expect(400)
      .end(done);
  });
});
