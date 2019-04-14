const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let videoSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: 'Video name can\'t be empty'
    },
   
    Description:{
        type: String,
        required: 'Description can\'t be empty'
    },
    user: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
    creater: 
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ,
    saltSecret: String
});

module.exports = mongoose.model('Video', videoSchema );