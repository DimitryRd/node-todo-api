//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectId} = require('mongodb');

var obj = new ObjectId();

console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.error('Unable to connect to MongoDb server');
    }
    console.log('Connected to MongoDB server');

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectId("5c6336dc488f5172308b81c1")
    }, {
        $inc: {
            age: 1
        },
        $set:{
            name: "Nikolay"
        }
    }, {
        returnOriginal: false
    }).then(result => {
        console.log(result);
    })
    db.close();
});
