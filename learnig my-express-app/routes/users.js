var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get("/userId",(req, res, next) =>{
  // res.send(req.params)
  res.send("<h1>userId</h1>")
})

module.exports = router;
