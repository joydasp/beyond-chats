const express  = require("express");
const cors = require("cors");


const articleRoutes = require("./src/routes/articleRoutes");

const app =express();

app.use(cors());
app.use(express.json());

app.use("/api/articles", articleRoutes);

app.get("/" , (req,res) => {
    res.send("Beyond chats api is running");
});

module.exports = app;