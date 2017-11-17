var express = require('express');
var router = express.Router();
var Default = require("../models/default.js")

router.route('/')
    .get(function(req, res){
      console.log("hit")
        Default.find(function(err, defaults){
            if(err){console.log(err);}
            res.send(defaults);
        });
    })

module.exports = router;
