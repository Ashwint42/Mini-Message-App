const router = require("express").Router();
const { messages } = require("./index");

router.get("/", (req, res) => {
  res.render("messageForm");
});

router.post("/", (req, res) => {
  const messageData = req.body;
  messageData.added = new Date();
  messages.push(messageData);

  res.redirect("/");
});

module.exports = router;
