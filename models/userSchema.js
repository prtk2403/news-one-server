const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {type:String,required:""},
    email: {type:String,required:""},
    password: {type:String,required:""},
},{
    timestamps: true,
});

const userModel = mongoose.model('users', userSchema);

module.exports = userModel;