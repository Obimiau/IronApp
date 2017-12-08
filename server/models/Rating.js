const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const ratingSchema = new Schema({
  project: {type: Schema.Types.ObjectId, ref: 'Project', required: true},
  rate: {type: Number, required: true},
  comments: String
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Rating = mongoose.model('Rating', ratingSchema);
module.exports = Rating;
