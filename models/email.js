const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const emailSchema = new Schema({
    name: {type: String},
    email: {type: String},
    subject: {type: String},
    message: {type: String},
})

module.exports = mongoose.model("Class", emailSchema);