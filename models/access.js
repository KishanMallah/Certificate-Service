const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  email: {
    type: String,
    required:[true, 'email is empty']
  },
  unique_id: {
    type: String,
    required:[true, 'unique_id is empty']
  },
  access_type: {
    type: String,
    default: 'read'
  }
});

module.exports = mongoose.model('access', schema);