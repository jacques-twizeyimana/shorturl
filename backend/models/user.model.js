const mongoose = require('mongoose');
const jwt  =  require('jsonwebtoken')
const config = require('config')

var userSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: true,
        maxlength: 255,
        minlength: 3
    },
    lname: {
        type: String,
        required: true,
        maxlength: 255,
        minlength: 3
    },
    email: {
        type: String,
        required: true,
        unique: true,
        maxlength: 255,
        minlength: 3
    },
    password: {
        type: String,
        required: true,
        maxlength: 1024,
        minlength: 3
    },
    isAdmin:{
        type: Boolean,
        required: true,
        default: false
    },
    createdAt:{
        type:Date,
        required:true,
        default:Date.now
    }
});
// userSchema.methods.generateAuthToken = function(){
//     const token  =jwt.sign({_id:this._id,name:this.name,email:this.email,isAdmin:this.isAdmin}
//         ,config.get('jwtPrivateKey'))
//     return token
// }
const User = mongoose.model('User', userSchema);

module.exports = User