const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const projectSchema = new Schema({
  name: {type: String, require: true},
  author: {type: Schema.Types.ObjectId, ref: 'User', required: true},
  image: {type: String, default: '/images/Batmobile_Blueprint.jpg'},
  description: {type: String, require: true}
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Project = mongoose.model('Project', projectSchema);
module.exports = Project;
