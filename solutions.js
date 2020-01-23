const mongo = require('mongodb').MongoClient;
const process = require('process');
const url = 'mongodb://localhost:27017/learnyoumongo'
const firstName = process.argv[2];
const lastName = process.argv[3];

mongo.connect(url, function(err, db) {
			// find query in Mongodb
			
/*	let data = db.db('learnyoumongo');
	data.collection('parrots').find({ age : {$gt: age}}).toArray(function(err, documents){
	if (err) throw err;
	console.log(documents)
	data.close();
*/

		// find Project in mongodb
	/* let data = db.db('learnyoumongo');
      //   data.collection('parrots').find({ age : {$gt: +age}},{projection: {name : 1,age:1,_id:0}}).toArray(function(err, documents){
      //   if (err) throw err;
      //   console.log(documents)
      data.close();
*/
		// insert in mongodb
			let data = db.db("learnyoumongo");
			const obj = {
				firstName: firstName,
				lastName: lastName
			}
			data.collection('docs').insert(obj, function (err, data) {
				if (err) throw err;
				console.log(JSON.stringify(obj));
			})
			db.close();
});

