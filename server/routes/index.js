/*jshint node:true*/
module.exports = function (app) {
	'use strict';

	var _ = require('underscore');
    var api = '/api';
    var data = './../data/';
	var DbRest = require(data + 'db_rest');
	var db = new DbRest();

	app.get(api + '/movies', db.getMovies);
	app.get(api + '/movies/:id', db.getMovie);
	app.post(api + '/movies/:id', db.postMovie);
	app.put(api + '/movies/:id', db.putMovie);
	app.delete(api + '/movies/:id', db.deleteMovie);
}