//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();

console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.error('Unable to connect to MongoDb server');
    }
    console.log('Connected to MongoDB server');

    db.collection('Users').findOneAndUpdate({
            _id: new ObjectID('5b69f649e785ac212c9da95d')
        }, {
            $set: {
                name: 'Dimitry'
            },
            $inc: {
                age: 2

            }
        },
        {
            returnOriginal: false
        }
    ).then(result => {
        console.log(result);
    })
    db.close();
})
;