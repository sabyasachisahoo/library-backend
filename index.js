const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express();

//Configuring the database
const dbConfig = require('./src/config/database.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig.url)
.then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...');
    process.exit();
});

//to handle json request
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

//admin book routes
const bookRoute = require('./src/app/routes/book.route.js');
app.use('/library',bookRoute);

const port = 5000;
app.listen(port, () =>{
    console.log("server is running on "+port)
})
