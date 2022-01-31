const express = require('express');

const accountsController = require('../controller/accountsController');

const router = express.Router();

router.post('/reset', accountsController.postReset);
router.post('/event', accountsController.postEvent);
router.get('/balance', accountsController.getBalance);

module.exports = router;