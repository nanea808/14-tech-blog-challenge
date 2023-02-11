const router = require("express").Router();
const { User, Post } = require("../models");

router.get("/", async (req, res) => {
  const postData = await Post.findAll({ include: User }).catch((err) => {
    res.json(err);
  });
  const posts = postData.map((post) => post.get({ plain: true }));
  res.render("homepage", { posts });
});

router.get("/login", async (req, res) => {
  res.render("login");
});

router.get("/dashboard", async (req, res) => {
  res.render("dashboard");
});

module.exports = router;
