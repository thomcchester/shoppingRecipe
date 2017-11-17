var express = require("express");
var router = express.Router();
var passport = require("passport");
var path = require("path");

router.post("/", passport.authenticate("local", {
  //We do not have this page built yet. Should send logged in admin to admin page
  successRedirect: "/Admin/AdminLog",
  //TODO success/failure Flash()
  failureRedirect: "/Admin/AdminNotLog"
}));



module.exports = router;
