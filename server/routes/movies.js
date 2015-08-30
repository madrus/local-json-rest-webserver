module.exports = function (app) {

  var movies = [
    {
      "_id": 1,
      "title": "Star Wars",
      "releaseYear": 1983
    },
    {
      "_id": 11,
      "title": "Star Trek",
      "releaseYear": 1981
    },
    {
      "_id": 21,
      "title": "Shrek",
      "releaseYear": 2004
    }
  ]

  app.route('/api/movies')
    .get(function () {

    });

}