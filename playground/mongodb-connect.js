//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

let obj = new ObjectID();

console.log('>>>>'+obj);


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {

    if (err) {
        return console.error('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result) => {
    //
    //     if (err) {
    //         return console.log('Unable to insert todo', err);
    //     }
    //
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    // db.collection('Users').insertOne({
    //     name: 'Dimitry',
    //     age: 29,
    //     location: 'Kyiv'
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert user', err);
    //     }
    //
    //     console.log(result.ops[0]._id.getTimestamp());
    // })

    db.close();
});


//
// const {MongoClient, ObjectID} = require('mongodb');
// var obj = new ObjectID();
//
// console.log(obj);
//
// MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
//     if (err) {
//         return console.error('Unable to connect to MongoDb server');
//     }
//     console.log('Connected to MongoDB server');
//
//     // db.collection('Todos').insertOne({
//     //     text: 'Something to do',
//     //     completed: false
//     // }, (err, result) => {
//     //     if(err){
//     //         return console.error('Unable to insert todos', err);
//     //     }
//     //
//     //     console.log(JSON.stringify(result.ops, undefined, 2));
//     // })
//
//     // db.collection('Users').insertOne({
//     //     name: 'Dimitry',
//     //     age: 29,
//     //     location: 'Kyiv, Ukraine'
//     // }, (err, result) => {
//     //     if (err) {
//     //     }
//     //         console.error('Unable to insert user to MongoDB');
//     //     console.log(result.ops[0]._id.getTimestamp());
//     // });
//
//     db.close();
// });