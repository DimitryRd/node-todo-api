const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.error('Unable to connect to MongoDb server');
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').find({
    //     _id: new ObjectID("5c63c03f345175bba8157af4")
    // }).toArray().then(docs => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    //
    // }, err => {
    //
    //     console.log("Unable to fetch todo", err);
    // })

    db.collection('Users').find({name: "Andrew"}).count().then(counts => {
        console.log(`Todos count: ${counts}`);


    }, err => {

        console.log("Unable to fetch todo", err);
    })

    db.close();
});