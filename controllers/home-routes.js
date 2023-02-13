const router = require("express").Router();
const { User, Post } = require("../models");

router.get("/", async (req, res) => {
  const postData = await Post.findAll({ include: User }).catch((err) => {
    res.json(err);
  });
  const posts = postData.map((post) => post.get({ plain: true }));
  res.render("homepage", { posts, loggedIn: req.session.loggedIn });
});

router.get("/login", async (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render("login");
});

router.get("/dashboard", async (req, res) => {
  res.render("dashboard", { loggedIn: req.session.loggedIn });
});

module.exports = router;
