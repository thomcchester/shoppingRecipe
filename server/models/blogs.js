var mongoose = require('mongoose');

var blogSchema = new mongoose.Schema({
  backgroundColor: { type: String },
  textColor: String,
  someOtherThing: String,
});

module.exports = mongoose.model('Blogs', blogSchema);
