var express = require('express');
var router = express.Router();

const PDFDocument = require('pdfkit');
var fs = require('fs');

/* ------------ Require models modules ------------ */
var access = require('../../../models/access');
var template = require('../../../models/template');
var certificate = require('../../../models/certificate');

/* ------------ Require controller modules ------------ */
var certificate_controller = require('../../../controllers/versions/v1/certificateController');

/* ------------ Certificate Routes -------- */
router.get('/certificate/:userId/:patformId/:certificateId', certificate_controller.index); // Get user certificate









/* Page list */
// router.get('/', function(req, res, next) {
//   res.render('home', { title: 'Express' });
// });

// router.get('/users', function(req, res, next) {
//   res.render('users', { title: 'Express' });
// });

// router.get('/certificate/:id', function(req, res, next) {
//   console.log(req.params);
//   var certificateId = req.params.id;
//   certificateId = certificateId.split("&");
//   certificate.findById({_id: certificateId[0]}).then(function(data){
//     res.send(data);
//   });
// });

// router.get('/certificate/:id', (req, res) => {
//   console.log(req);
//   const doc = new PDFDocument();
//   doc.pipe( fs.createWriteStream('out.pdf') );
//   // Setting response to 'attachment' (download).
//   // If you use 'inline' here it will automatically open the PDF
//   const content = "req.body.content"
//   doc.y = 300
//   doc.text(content, 50, 50)
//   doc.pipe(res)

//   res.download('out.pdf');
//   doc.end()
// })

module.exports = router;
