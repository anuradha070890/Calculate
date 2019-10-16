
const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors');
var app= express();

//middleware
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

// Configuring the database
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
},).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

//Required for update and modify function in mongodb
mongoose.set('useFindAndModify', false);

//enable cors 
app.use(cors());

// Required routes
require('./app/routes/multiply.routes.js')(app);

app.use('/',(req,res)=>{
    res.json({"message": "Welcome "});

})

//start server

app.listen(3000,()=>{
    console.log("server is listening on 3000")
})