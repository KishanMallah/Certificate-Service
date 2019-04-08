const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  user_name: {
    type: String,
    required:[true, 'user name is empty']
  },
  email: {
    type: String,
    required:[true, 'user name is empty']
  },
  unique_id: {
    type: String,
    required:[true, 'unique id is empty']
  },
  generate_on: {
    type: Date,
    default: Date.now 
  },
  valid_till: {
    type: Date,
    default: Date.now
  },
  course_id :{
    type: String,
    required:[true, 'course id is empty']
  }
});

module.exports = mongoose.model('user_certificate', schema);