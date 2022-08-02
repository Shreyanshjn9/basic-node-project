var mongoose = require('mongoose');
var Schema = mongoose.Schema;

contactSchema = new Schema({

    name: String,
    email: String,
    message: String
}),
    Contact = mongoose.model('User', userSchema);

module.exports = User;
