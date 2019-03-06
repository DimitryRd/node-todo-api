const {mongoose} = require('../server/db/mongoose')
const {Todo} = require('../server/models/todos')
const {User} = require('../server/models/user')

const {ObjectID} = require('mongodb')

const id = "5c7bb9eb204118d427cea958";

if(!ObjectID.isValid(id)){
    console.error('Id is not valid')
}
Todo.find({
    _id: id
}).then(todos => {
    console.log('Todos: ' + todos)
})

Todo.findOne({
    _id: id
}).then(todo => {
    console.log('Todo: ' + todo)
})

Todo.findById(id)
    .then(todo => {
    if(!todo){
        return console.log('Id not found')
    }
    console.log('Todo by id: '+ todo)
}).catch (err => {
    console.log(err)
})

const userId = '5c6b12d7a03aeae900f5bf70'

User.findById(userId).then(user => {

    if(!user){
        console.log("User not found")
    }
    console.log(user)
}).catch(e => console.log(e))