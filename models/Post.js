const mongoose = require('mongoose')
const Schema = mongoose.Schema

const postSchema = new Schema({
    title:String,
    text:String,
    author:String,
    date:{type:Date, default:Date.now},
    img:{type:String, default:null}
})

const Post = new mongoose.model('Post', postSchema)

module.exports = Post