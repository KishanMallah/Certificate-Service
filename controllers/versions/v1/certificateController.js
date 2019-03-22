var certificateModal = require('../../../models/certificate');

exports.index = function(req, res) {
  var arr = Object.values(req.params);
  // certificateModal.findOne({'_id': arr[0], 'service._id': arr[1], 'course._id': arr[2] }).then(function(data){
  //   res.send(data);
  // });

  certificateModal.findOne(
    { '_id': arr[0] },
    { service: { $elemMatch: { _id: arr[1] }}},
    { course: { $elemMatch: { _id: arr[2] }}}
    ).then(function(data){
    res.send(data);
  });

};

// {
//   "userId": "5c8b451f40d56b2f37e74116",
//   "patformId": "5c8b451f40d56b2f37e74117",
//   "certificateId": "5c8b451f40d56b2f37e74117"
// }