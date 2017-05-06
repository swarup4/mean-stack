var express = require('express');
var router = express.Router();
var path = require("path");

var absPath = path.join(__dirname, "../../app/views");

// route to handle home page
router.get('/', function(req, res, next) {
  res.sendFile(absPath + "/index.html");
});

module.exports = router;
