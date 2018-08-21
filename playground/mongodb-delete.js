//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();

console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.error('Unable to connect to MongoDb server');
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos')
    //     .deleteMany({text: 'Eat lunch'}).then(
    //         result => {
    //             console.log(result);
    //         }
    // );
    // db.collection('Todos').findOneAndDelete({completed: false}).then(result =>{
    //     console.log(result);
    // })
    //
    // db.collection('Users')
    //     .deleteMany({name: 'Dimitry'});

    db.collection('Users').findOneAndDelete({_id: new ObjectID('5b69f4ea065bf82bf09ebf9a')}).then(result =>{
        console.log(JSON.stringify(result));
    })
    db.close();
});