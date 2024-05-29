const express = require("express");
const router = express.Router();

const  { getAllPosts, getSinglePost } = require("../controllers/postcontroller");


router.get("/", getAllPosts);

router.get("/:id", getSinglePost);

module.exports = router