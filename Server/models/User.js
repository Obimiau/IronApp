const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const userSchema = new Schema({
  username: {type: String, require: true},
  fullName: {type: String, require: true},
  avatar: {type: String, default: '/public/images/no_image_user.png'},
  email: {type: String, require: true},
  password: {type: String, require: true},
  group: {type: Schema.Types.ObjectId, ref: 'Group', required: true},
  score: {type: String, default: 0},
  codewars_user: String,
  github_user: String,
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const User = mongoose.model('User', userSchema);
module.exports = User;
