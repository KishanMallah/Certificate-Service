var express = require('express');
var router = express.Router();

/* ------------ Require models modules ------------ */
var access = require('../../../models/access');
var template = require('../../../models/template');
var certificate = require('../../../models/certificate');

/* ------------ Require controller modules ------------ */
var certificate_controller = require('../../../controllers/versions/v1/certificateController');

/* ------------ Certificate Routes -------- */
router.get('/certificate/:certificateId', certificate_controller.index); // Get user certificate

module.exports = router;
