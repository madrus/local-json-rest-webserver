module.exports = function dbInit() {
	'use strict';

	var moviesJson = require('./movies.json');
	var collectionName = 'movies';
	var MongoClient = require('mongodb').MongoClient;

	MongoClient.connect('mongodb://localhost:27017/webapidb', function (err, db) {

		if (err) console.log(err);

		console.log('Connected to MongoDB!');
	
		/** using the db connection object, save the collection 'movies' 
 		 * to a separate variable */
		var collection = db.collection(collectionName);
	
		// drop collection
		collection.drop(function (err) {
			if (err) console.log(err);

			console.log('Collection "' + collectionName + '" dropped.')
			// insert some movies
			collection.insert(moviesJson, function (err, inserted) {
				if (err) console.log(err);
		
				// succes => log the inserted docs
				console.log(inserted.insertedCount + ' record(s) successfully inserted.');
				console.log(inserted.ops);
		
				// close connection
				db.close();
			});
		});

	});
};
