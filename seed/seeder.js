var Access = require('../models/access');
var Template = require('../models/template');
var Certificate = require('../models/certificate');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/certificate', {useNewUrlParser: true});

var seederList = [
  new Access({
    email: 'kishan.m@quantinsti.com',
    access_type: 'R/W'
  }),
  new Access({
    email: 'kishanmallah1993@gmail.com',
    access_type: 'R'
  }),
  new Template({
    name : 'QuantInsti',
    course: [{
      name: 'QI101',
      template : {
          layout: 'layout1'
      }
    }, {
      name: 'QI102',
      template : {
          layout: 'layout2'
      }
    }, {
      name: 'QI103',
      template : {
          layout: 'layout3'
      }
    }]
  }),
  new Template({
    name : 'Quantra',
    course: [{
      name: 'QT101',
      template : {
          layout: 'layout1'
      }
    }, {
      name: 'QT102',
      template : {
          layout: 'layout2'
      }
    }, {
      name: 'QT103',
      template : {
          layout: 'layout3'
      }
    }]
  }),
  new Certificate({
    name: 'Kishan',
    email: 'kishanmallah.m@quantinsti.com',
    service: [{
      name: 'Quantinsti',
      course: [{
        name: 'EPAT',
      }]
    }]
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