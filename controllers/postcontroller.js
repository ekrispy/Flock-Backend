const mongoose = require("mongoose");
const Post = require("../models/postsSchema");


// get all posts
const getAllPosts = async (req, res) => {
    try {
        const posts = await Post.find();
        res.status(200).json(posts);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

// get single post
const getSinglePost = async (req, res) => {
    const { id } = req.params;
    try {
        const post = await Post.findById(id);
        res.status(200).json(post);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

// create post
const createPost = async (req, res) => {
    try {
        console.log(req.body)
        const post = await Post.create(req.body)
        res.status(200).json(post)
    } catch(err) {
        console.log(err.message)
        res.status(400).json(err)
    }
}

// delete post
const deletePost = async (req, res) => {
    try {
        await Post.findByIdAndDelete(req.params.id)
        res.status(200).json({ message: 'successfully deleted' })
    } catch (err) {
        console.log(err.message)
        res.status(400).json(err)
    }
}

module.exports = { getAllPosts, getSinglePost, createPost, deletePost }
