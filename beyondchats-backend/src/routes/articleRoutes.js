const express = require("express");
const router = express.Router();
const Article = require("../models/Article");

// GET all articles
router.get("/", async (req, res) => {
  try {
    const articles = await Article.find().sort({ createdAt: -1 });
    res.json(articles);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
