const { User } = require("../models");

const userdata = [
  {
    username: "GooberGobber",
    email: "goober.gobber@gmail.com",
    password: "123456789",
  },
  {
    username: "Fleximus",
    email: "felix.glen@gmail.com",
    password: "1234finalstand",
  },
  {
    username: "Flooper",
    email: "test.thing@yahoo.com",
    password: "PooFlinger",
  },
  {
    username: "funker",
    password: "blibBlop",
    email: "my.email@msn.com",
  },
];

const seedUser = () => User.bulkCreate(userdata);

module.exports = seedUser;
