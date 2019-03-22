const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  name: {
    type: String,
    required:[true, 'email fiels is empty']
  },
  course: [{
      name: {
        type: String,
        required:[true, 'email fiels is empty']
      },
      template : {
          layout: {
            type: String,
            required:[true, 'email fiels is empty']
          }
      }
    }]
});

module.exports = mongoose.model('certificate_template', schema);