const express = require("express");
const router = express.Router();

const  { getAllPosts, getSinglePost, createPost } = require("../controllers/postcontroller");


router.get("/", getAllPosts);

router.get("/:id", getSinglePost);

router.post("/", createPost);



module.exports = router