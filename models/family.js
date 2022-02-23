var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;
const jwt = require("jsonwebtoken");
var bcrypt     = require('bcrypt');

var FamilySchenma = new Schema({
    name: String,
    relationship: String,
    age: Number,
    avatar: String,
    user_id: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
}, {strict: false});

family = mongoose.model("Family", FamilySchenma);

module.exports = {
  Family: family,
}