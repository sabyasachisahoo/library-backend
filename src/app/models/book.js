var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BookSchema = new Schema({
    name: String,
    author: String,
    description: String,
    price:String,
    count:String,
    url:String
});

module.exports = mongoose.model('Book', BookSchema);