Local CORS-enabled Webserver
============================

This webserver was inspired by the need to be able to test web client application. 
It is useful when one only has a web client project that should work with a REST API.
When from the SOC (separation of concerns) point of view one is not interested 
in the server side, only in the client side. 
As long as the server bahaves in a RESTful way, that's all. 

I have found out the hard way while testing a Visual Studio web client, 
that out of the box it does not work with a stand-alone node/express server.
Because one is dealing with CORS (Cross-Origin Resource Sharing). 
That means that your client and your server are run by two separate solutions.
By default, it does not work. When one tries to connect, one gets 
an XMLHttpRequest exception. Fortunately, node.js has a package for that called "cors". 

I have also added a mongodb backend in order to be able to persist the test data.
It is necessary that MongoDb is installed and mongod is running on your machine
using the default port 27017.

### Packages and dependencies used
- Node.js
- Express.js
- Underscore.js
- Cors
- Body-parser
- mongodb

### Installation
1. install Node.js
2. create project folder
3. open command prompt in your project folder and run:

	`npm install --save express underscore cors body-parser mongodb`
	
### Data format
In the server/data folder open movies.json file and change the data 
as needed for your own project. The only important property is '_id'. 
Don't change its name if you don't want to change the web server code.

### Initialize the database collection
This project uses the "webapidb" database and "movies" collection in it.
Run the following command in order to insert your sample data in it: 
`node server/data/db_init.js`

### Run the server
`node server/server.js`

Now, the server is listening on port 3500. The API addresses are:

- `http://localhost:3500/api/movies` (GET all and POST requests)

- `http://localhost:3500/api/movies/:id` (GET one, PUT and DELETE requests)

### Release notes
As of September, 3d only GET all and GET one are implemented. 
Shortly, I will add the rest of the CRUD operations. 
