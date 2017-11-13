var mongoose = require('mongoose');

var defaultSchema = new mongoose.Schema({
  backgroundColor: { type: String },
  textColor: String,
  someOtherThing: String,
});

module.exports = mongoose.model('Default', defaultSchema);
