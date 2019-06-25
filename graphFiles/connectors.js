const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, (error) => {
    if (error) console.log('Database Connection Error---------', error);
    console.log('Database connected');
});

const player = new Schema({
    position: String,
    name: String,
    team: String,
    jerseyNumber: Number,
    wonSuperBowl: Boolean
})

//Export your model defined.
module.exports = mongoose.model("Player", player);