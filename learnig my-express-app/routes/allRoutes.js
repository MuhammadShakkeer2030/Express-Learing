const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/", (req, res) => {
  res.send("Hello, World!");
});

router.get("/first", (req, res) => {
  res.sendFile(path.join(__dirname, "../first.html"));
});
router.post("/about", (req, res) => {
  res.send("bout");
});
router.get("/users", (req, res) => {
  res.send("<h1>users</h1>");
});
router.get("/users/:userId", (req, res) => {
  res.send(`<h1>${req.params.userId}</h1>`);
});

router.get("/download", (req, res) => {
  res.download(path.join(__dirname, "../public/images/download.png"));
});

module.exports = router;
