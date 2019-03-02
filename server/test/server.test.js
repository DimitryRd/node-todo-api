const request = require('supertest');
const expect = require('expect');

const {app} = require('./../server.js');
const {Todo} = require('./../models/todos.js');

beforeEach(done => {
    Todo.remove({}).then(() => done());
})

describe('POST /todos', () => {

    it('should create a new todo', (done) =>     {

        let text = 'Test todo text';

        request(app)
            .post('/todos')
            .send({text})
            .expect(200)
            .expect(res => {
                expect(res.body.text).toBe(text, 'Different text');
            })
            .end((err, res) => {
                if (err) {
                    return done(err);
                }
                Todo.find().then(todos => {
                    expect(todos.length).toBe(1);
                    expect(todos[0].text).toBe(text);
                    done();
                }).catch(err => {
                    done(err);
                })
            });
    });

    it('should not create a todo with invalid data' , (done) => {
        
        request(app)
            .post('/todos')
            .send({})
            .expect(400)
            .end((err, res) => {
            if(err) {
                return done(err)
            }
            Todo.find().then(todos => {
                expect(todos.length).toBe(0, "Todo was created");
                done();
            }).catch(err => done(err));
        })
    })
})