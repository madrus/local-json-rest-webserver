/*jshint node:true*/
module.exports = function (app) {
	'use strict';

	var _ = require('underscore');
    var api = '/api';
    var data = './../data/';
	var json = require(data + 'movies.json');

	app.get(api + '/movies', getMovies);
	app.get(api + '/movies/:id', getMovie);
	app.post(api + '/movies/:id', postMovie);
	app.put(api + '/movies/:id', putMovie);
	app.delete(api + '/movies/:id', deleteMovie);

	function getMovies(req, res, next) {
		// get the list of movies
		res.status(200).json(json);
	}

	function getMovie(req, res, next) {
		// get one specific movie
		var movie;
		_.each(json, function (elem, index) {
			if (elem._id === req.params.id) {
				movie = elem;
			}
		});
		res.status(200).send(movie);
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