const mongoose = require('mongoose');
const {Schema} = mongoose;

const blogPostsSchema = new Schema({
    title:String,
    content:String
});

mongoose.model('blogPosts', blogPostsSchema)