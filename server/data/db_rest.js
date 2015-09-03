module.exports = function dbRest() {
	'use strict';
	var dbName = 'webapidb';
	var dbUrl = 'mongodb://localhost:27017/' + dbName;
	var collectionName = 'movies';
	var MongoClient = require('mongodb').MongoClient;

	return {
		getMovies: getMovies,
		getMovie: getMovie,
		postMovie: postMovie,
		putMovie: putMovie,
		deleteMovie: deleteMovie
	};
	
	/////////////////////////////////////////

	function getMovies(req, res, next) {
		MongoClient.connect(dbUrl, function (err, db) {
			if (err) console.log(err);

			console.log('getMovies: connected to ' + dbName);

			var collection = db.collection(collectionName);

			collection
				.find({}, {}, { sort: { _id: 1 } })
				.toArray(function (err, found) {
					if (err) console.log(err);
				
					// send the list of movies
					res.status(200).send(found);
				})
		});
	}

	function getMovie(req, res, next) {
		MongoClient.connect(dbUrl, function (err, db) {
			if (err) console.log(err);

			console.log('getMovie: connected to ' + dbName);

			var collection = db.collection(collectionName);

			// get one specific movie
			collection.findOne({ _id: req.params.id }, function (err, found) {
				if (err) console.log(err);
				
				console.log(found);
				
				// send the found movie
				res.status(200).send(found);
			})
		});
	}

	function postMovie(req, res, next) {
		// insert the new item into the collection (validate first)
		if (req.body._id &&
			req.body.title &&
			req.body.director &&
			req.body.releaseYear &&
			req.body.rating) {
			json.push(req.body);
			res.status(200).json(json);
		} else {
			res.status(500).json({ error: 'There was an error!' });
		}
	};

	function putMovie(req, res, next) {
		// update the item in the collection
		if (req.params.id &&
			req.body.title &&
			req.body.director &&
			req.body.releaseYear &&
			req.body.rating) {
			_.each(json, function (elem, index) {
				// find and update:
				if (elem._id === req.params.id) {
					elem.title = req.body.title;
					elem.director = req.body.director;
					elem.releaseYear = req.body.releaseYear;
					elem.rating = req.body.rating;
				}
			});
			res.status(200).json(json);
		} else {
			res.status(500).json({ error: 'There was an error!' });
		}
	};

	function deleteMovie(req, res, next) {
		// delete the item from the collection
		var indexToDel = -1;
		_.each(json, function (elem, index) {
			if (elem._id === req.params.id) {
				indexToDel = index;
			}
		});
		if (~indexToDel) {
			json.splice(indexToDel, 1);
		}
		res.status(200).json(json);
	};
}