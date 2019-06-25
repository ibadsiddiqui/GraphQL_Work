//import mongoose to connect to your database and define your Schemas.
const mongoose = require('mongoose');
//Define your Schema used for define your models.
const Schema = mongoose.Schema;

//Connect to your database using the connect method, and pass in your Connection String as your first argument, 
//, a options options, and a callback with an error if there is one.
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, (error) => {
    //If there is an error log the error to the console.
    if (error) console.log('Database Connection Error---------', error);
    //to indicate your database is connected.
    console.log('Database connected');
});