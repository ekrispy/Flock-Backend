const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();

const posts = require("./routes/posts");
const users = require("./routes/users");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Logging middleware
app.use((req, res, next) => {
    console.log(`${req.method} ${req.path}`);
    next();
});

// Routes
app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.use("/api/posts", posts);
app.use("/api/users", users);

// Error-handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: "Something went wrong!" });
});

mongoose.connect(process.env.Atlas_URI)
    .then(() => {
        // Listen for requests
        const port = process.env.PORT || 3000; // default port if PORT is not set
        app.listen(port, () => {
            console.log(`App listening at http://localhost:${port}`);
        });
    })
    .catch((error) => {
        console.error(`Error connecting to DB: ${error.message}`); // log error with message
        process.exit(1); // exit with error code if DB connection fails
    });