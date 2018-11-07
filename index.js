//bringing required resources
const restify = require('restify');
const mongoose = require('mongoose');
const config = require('/config');//config.js file created

//setting up the server
const server = restify.createServer();

//Middlewares

//body parser for reading HTTP POST data.
//reads form's input and stores as JS objects
server.use(restify.plugins.bodyParser());

server.listen(config.PORT, () => {
  mongoose.connect(config.MONGODB_URI, { useNewUrlParser: true }
    );
});

//initisalise db variable
const db = mongoose.connection;

//to handle errors
db.on('error', (err) => console.log(err));

