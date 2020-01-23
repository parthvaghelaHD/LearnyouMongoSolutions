const mongo = require('mongodb').MongoClient;
const process = require('process');
const url = 'mongodb://localhost:27017/learnyoumongo';
// const age = parseInt(process.argv[2]);
const size = process.argv[2];


// const firstName = process.argv[2];
// const lastName = process.argv[3];

mongo.connect(url, function (err, db) {
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
	/*		let data = db.db("learnyoumongo");
			const User = {
				firstName: firstName,
				lastName: lastName
			}
			data.collection('docs').insert(User, function (err, data) {
				if (err) throw err;
				console.log(JSON.stringify(obj));
			})
			db.close();
	*/


	// update in mongodb
	/*let data = db.db('learnyoumongo');
	data.collection('users').update({ username: 'tinatime' }, { $set: { age: 40 } }).toArray((err) => {
		if (err) throw err;
		data.close();
	});
	*/

	//remove in mongodb
	/*let data = db.db('learnyoumongo');
	data.collection(process.argv[3]).remove({ _id: process.argv[4] }).toArray((err) => {
		if (err) throw err;
		data.close();
	});
	*/

	// count in mongodb
	// let data = db.db('learnyoumongo');
	// 	data.collection('parrots').count({ age: { $gt: +age } }, function (err, count) {
	// 	if (err) throw err;
	// 	console.log(count);
	// 	data.close();
	// });

	//aggregate in Mongodb 
		data.collection("prices").aggregate([
			{ 
				$match: 
				{
					size: size
			}}
		,{ 
			$group:
				 {
					_id: 'average'
			,average: 
				{
					$avg: '$price'
				}
			}}
		])
		.toArray(function(err, data) {
			if (err) throw err;
			if (data.length ==="") 
				{
					throw new Error('No data found')
				}
			let firstval = data[0];
			console.log(Number(firstval.average).toFixed(2))
			db.close()
		});
	});