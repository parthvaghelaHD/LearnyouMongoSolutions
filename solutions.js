const mongo = require('mongodb').MongoClient;
const process = require('process');
const url = 'mongodb://localhost:27017/learnyoumongo'
const age = parseInt(process.argv[2])

mongo.connect(url, function(err, db) {
      // db gives access to the database
/*	let data = db.db('learnyoumongo');
	data.collection('parrots').find({ age : {$gt: age}}).toArray(function(err, documents){
	if (err) throw err;
	console.log(documents)
	data.close();
*/
	let data = db.db('learnyoumongo');
        data.collection('parrots').find({ age : {$gt: +age}},{projection: {name : 1,age:1,_id:0}}).toArray(function(err, documents){
        if (err) throw err;
        console.log(documents)
        data.close();

});
});

