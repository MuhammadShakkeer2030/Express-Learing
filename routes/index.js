var express = require("express");
var router = express.Router();
const { MongoClient } = require("mongodb");
/* GET home page. */
router.get("/", function (req, res, next) {
  const imageGallery = [
    {
      name: "Country A",
      description: "Description of Country A",
      photo: "https://source.unsplash.com/random/800x600?countrya",
    },
    {
      name: "Country B",
      description: "Description of Country B",
      photo: "https://source.unsplash.com/random/800x600?countryb",
    },
    {
      name: "Country C",
      description: "Description of Country C",
      photo: "https://source.unsplash.com/random/800x600?countryc",
    },
  ];

  res.render("index", { Gallery: imageGallery });
});

router.post("/submit", (req, res) => {
  const { navText, navURL } = req.body;
  console.log(req.body);
  console.log(navText, navURL);

  MongoClient.connect("mongodb://localhost:27017")
    .then(() => {
      console.log("Database Connected");
    })
    .catch((err) => console.log(err));

  res.redirect("/");
});

module.exports = router;
