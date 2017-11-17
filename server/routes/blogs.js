var express = require('express');
var router = express.Router();
var Blogs = require("../models/blogs.js")

router.route('/')
    .get(function(req, res){
      Blogs.find({}, function(err, blogs) {
        var blogMap = {};

        blogs.forEach(function(blog) {
          blogMap[blog._id] = blog;
        });
        var blogMapArray = []
        for(var key in blogMap){
          if(blogMap.hasOwnProperty(key)){
            blogMapArray.push(blogMap[key])
          }
        }
        res.send(blogMapArray);
    });
});

module.exports = router;




// router.route('/')
//     .get(function(req, res){
//         Blogs.find(function(err, defaults){
//             if(err){console.log(err);}
//             res.send(defaults);
//         });
//     })
//
// module.exports = router;
