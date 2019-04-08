var certificateModal = require('../../../models/certificate');
var template = require('../../../models/template');
const PDFDocument = require('pdfkit');
var fs = require('fs');

exports.index = function(req, res) {
  
  var certificatePar = req.params.certificateId;
  certificatePar = certificatePar.split('.');


  certificateModal.findOne( { '_id': certificatePar[0] } ).then( function(certificateData) {    
    template.findOne( { '_id': certificateData.course_id } ).then( function(data) {
      
      var fileName = (certificateData.user_name + ' ' + data.course_name).replace(/ /g,'_');

      if (certificatePar.length > 1 && certificatePar[1] == 'pdf') {
        res.writeHead( 200, {
          'Content-Type': 'application/pdf',
          'Content-Disposition': 'attachment; filename=' + fileName + '.pdf'
        });
      }

      const doc = new PDFDocument({ size: 'A4', layout: 'landscape' });
      
      doc.pipe( fs.createWriteStream( fileName + '.pdf') );

      doc.image('public/images/certificate-type/certificate-nse.v1.jpg', 0, 0, { width: 841.89, height: 595.28 });

      doc.fontSize(14).fillColor('#666666').text('Presented to', 100, 300, { align:'center' });

      doc.fontSize(22).fillColor('#080b42').text((certificateData.user_name).toUpperCase(), 100, 330, { align:'center' });

      doc.fontSize(14).fillColor('#666666').text('for successful completion of online course', 100, 360, { align:'center' });

      doc.fontSize(22).fillColor('#666666').text((data.course_name).toUpperCase(), 100, 390, { align:'center' });
      
      doc.pipe(res);

      doc.end();
    });
  });
};