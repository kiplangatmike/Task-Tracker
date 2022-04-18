const mongoose = require('mongoose')
const { required } = require('nodemon/lib/config')

const postSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
        unique: true
    },
    is_completed: {
        type: Boolean,
        required: true
    }
},
)
module.exports = mongoose.model('v1', postSchema)