const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  course_name: {
    type: String,
    required:[true, 'couese name is empty']
  },
  platform_name: {
    type: String,
    required:[true, 'platform name is empty']
  },
  template: {
    certificate_image: {
      type: String,
      default: 'certificate_default'
    }
  } 
});

module.exports = mongoose.model('certificate_template', schema);