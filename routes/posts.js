const express = require("express");
const router = express.Router();

const  { getAllPosts, getSinglePost, createPost, deletePost } = require("../controllers/postcontroller");


router.get("/", getAllPosts);
router.post('/', createPost);
router.delete('/:id', deletePost);

router.get("/:id", getSinglePost);

module.exports = router