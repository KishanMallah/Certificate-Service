var Access = require('../models/access');
var Template = require('../models/template');
var Certificate = require('../models/certificate');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/certificate', {useNewUrlParser: true});

var seederList = [
  // new Access({
  //   email: 'kishan.m@quantinsti.com',
  //   unique_id: '123454',
  //   access_type: 'read'
  // }),
  // new Access({
  //   email: 'kishanmallah1993@gmail.com',
  //   unique_id: '32665',
  //   access_type: 'write'
  // }),
  // new Template({
  //   course_name: 'Python',
  //   platform_name: 'Quantra',
  //   template: {
  //     certificate_image: 'certificate_python'
  //   }
  // }),
  // new Template({
  //   course_name: 'Machine Learning',
  //   platform_name: 'Quantra',
  //   template: {
  //     certificate_image: 'certificate_ml'
  //   }
  // }),
  new Certificate({
    user_name: 'kishan Mallah',
    email: 'kishanmallah199@gmail.com',
    unique_id: '123465789',
    course_id :'132'
  })
];

var seedingCount = 0 

for (var i = 0; i < seederList.length; i++) {
  seederList[i].save(function(err, result){
    seedingCount ++;
    if(seedingCount ==  seederList.length) {
      disconnect();
    }
  });
};

function disconnect () {
  mongoose.disconnect();
}