const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

const posts = require("./routes/posts");


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.use("/posts", posts);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})