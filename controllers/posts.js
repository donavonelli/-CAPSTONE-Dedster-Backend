const db = require('../models');

const index = (req, res) => {
    db.Post.find({}, (err, foundPosts) => {
        if (err) console.log('Error in Posts#index:', err);

        if(!foundPosts.length) return res.status(200).json({ "message": "No Posts found in db" });

        res.status(200).json({ "Posts": foundPosts });
    });
};

const show = (req, res) => {
    db.Post.findById(req.params.id, (err, foundPost) => {
        if (err) console.log('Error in Posts#show:', err);

        if(!foundPost) return res.status(200).json({ "message": "No Post with that id found in db" });

        res.status(200).json({ "Post": foundPost });
    });
};

const create = (req, res) => {
    db.Post.create(req.body, (err, savedPost) => {
        if (err) console.log('Error in Posts#create:', err);
        console.log("Works")
        res.status(201).json({ "Post": savedPost });
    });
};

const update = (req, res) => {
    db.Post.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedPost) => {
        if (err) console.log('Error in Posts#update:', err);

        if(!updatedPost) return res.status(200).json({ "message": "No Post with that id found in db" });

        res.status(200).json({ "Post": updatedPost});
    });
};

const destroy = (req, res) => {
    db.Post.findByIdAndDelete(req.params.id, (err, deletedPost) => {
        if (err) console.log('Error in Posts#destroy:', err);

        if(!deletedPost) return res.status(200).json({ "message": "No Post with that id found in db" });

        res.status(200).json({ "Post": deletedPost });
    });
};


module.exports = {
    index,
    show,
    create,
    update,
    destroy,
};
