const mongoose = require('mongoose');
const jwt  =  require('jsonwebtoken')
const config = require('config');

var urlSchema = new mongoose.Schema({
    user_id: {
        type: String,
        maxlength: 255,
        minlength: 10,
        default:null
    },
    link: {
        type: String,
        required: true,
        maxlength: 255,
        minlength: 3
    },
    code: {
        type: String,
        required: true,
        unique: true,
        maxlength: 10,
        minlength: 5
    },
    createdAt:{
        type:Date,
        required:true,
        default:Date.now
    }
});
const Url = mongoose.model('Url', urlSchema);

module.exports = Url