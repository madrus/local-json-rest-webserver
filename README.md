Local CORS-enabled Webserver
============================

This webserver was inspired by the need to be able to test web client application. 
It is useful when one only has a web client project that should work with a REST API.
When from the SOC (separation of concerns) point of view one is not interested in the server side, 
only in the client side. As long as the server bahaves in a RESTful way, that's all. 

I found out the hard way testing a Visual Studio web client that it is not as easy as it may seem.
Because one is dealing with CORS (Cross-Origin Resource Sharing). 
That means that your client and your server are run by two separate solutions.
By default, it does not work. When you try to connect you get an XMLHttpRequest exception.

### Packages and dependencies used
- Node.js
- Express.js
- Underscore.js
- Cors
- Body-parser

### Installation
1. install Node.js
2. create project folder
3. open command prompt in your project folder and run:

	`npm install --save express underscore cors body-parser`
	
### Data format
In the server/data folder open movies.json file and change the data as needed for your own project.
The only important property is '_id'. Don't change its name if you don't want to change the web server code.

### Run the server
`node server/server.js`

Now, the server is listening on port 3500. The API addresses are:

- `http://localhost:3500/api/movies` (GET all and POST requests)

- `http://localhost:3500/api/movies/:id` (GET one, PUT and DELETE requests)
