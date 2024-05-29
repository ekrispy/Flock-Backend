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

// create new post
const createPost = async (req, res) => {
    const post = req.body;
    const newPost = new Post({ ...post, creator: req.userId, createdAt: new Date().toISOString() });
    try {
        await newPost.save();
        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

module.exports = { getAllPosts, getSinglePost, createPost }