const express = require('express');
const router = express.Router();
const emailCtrl = require('../../controllers/api/emails');

router.post('/', emailCtrl.sendEmail);

module.exports = router;