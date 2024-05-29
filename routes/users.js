const express = require("express");

const router = express.Router();

const { getAllUsers, getSingleUser, createUser } = require("../controllers/UserController");


router.get("/", getAllUsers);

router.get("/:id", getSingleUser);

router.post("/", createUser);

module.exports = router;
