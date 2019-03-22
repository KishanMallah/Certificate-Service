const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  name: {
    type: String,
    required:[true, 'user name fiels is empty']
  },
  email: {
    type: String,
    required:[true, 'user name fiels is empty']
  },
  service: [{
    name: {
      type: String,
      required:[true, 'course name fiels is empty']
    },
    course: [{
      name: {
        type: String,
        required:[true, 'course name fiels is empty']
      },
      generate_on: {
        type: Date,
        default: Date.now 
      },
      valid_till: {
        type: Date,
        default: Date.now
      }
    }]
  }]
});

module.exports = mongoose.model('user_certificate', schema);