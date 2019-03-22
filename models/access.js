const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  email: {
    type: String,
    required:[true, 'email fiels is empty']
  },
  unique_id: {
    type: String,
    required:[true, 'unique_id fiels is empty']
  },
  access_type: {
    type: String,
    default: 'R',
    required:[true, 'access_type fiels is empty']
  }
});

module.exports = mongoose.model('access', schema);