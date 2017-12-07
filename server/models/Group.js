const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const groupSchema = new Schema({
  name: {type: String, require: true},
  type : { type : String, default: 'Web' }
});

const Group = mongoose.model('Group', groupSchema);
module.exports = Group;
