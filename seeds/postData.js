const { Post } = require("../models");

const postdata = [
  {
    title: "Gobbers Bloopers",
    content: "I am a goober.",
    user_id: "1",
  },
  {
    title: "Who is Rob?",
    content:
      "Rob Endelman is a chef who, in addition to teaching cooking technique, empowers people with the knowledge to make better choices when it comes to buying and preparing food. He is also kinda silly about having someone who knows.",
    user_id: "2",
  },
  {
    title: "Darker",
    content: "The darkest darkness.",
    user_id: "3",
  },
  {
    title: "HTML is cool.",
    content: "I like html.",
    user_id: "4",
  },
];

const seedPost = () => Post.bulkCreate(postdata);

module.exports = seedPost;
