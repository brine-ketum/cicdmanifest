//Import the Express.js framework

const express = require('express');
const app = express();

// Define a route handler for GET requests to the root URL
app.get('/', (req,res)=> {
	res.send("Hello, Welcome to Docker Course!"); // Send a response with a greeting message
 });

// Start listening for incoming connections on port 3000 
app.listen(3000, function () { 
	console.log("app listening on port 3000");
});
