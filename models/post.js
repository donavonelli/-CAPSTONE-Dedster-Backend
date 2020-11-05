const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    title: String,
    author: String,
    content: String,
    service: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "service",
    },
});

const Post = mongoose.model('Post', PostSchema);

module.exports = Post;
